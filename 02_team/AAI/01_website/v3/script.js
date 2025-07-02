// AI am I v3 - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // =============================================================================
    // タブ機能
    // =============================================================================
    
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // すべてのボタンとペインからactiveクラスを削除
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // クリックされたボタンと対応するペインにactiveクラスを追加
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // =============================================================================
    // スムーススクロール
    // =============================================================================
    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // =============================================================================
    // ヘッダーのスクロール効果
    // =============================================================================
    
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // スクロール方向に応じてヘッダーの背景を調整
        if (scrollTop > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // =============================================================================
    // アニメーション（Intersection Observer）
    // =============================================================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // アニメーション対象の要素を選択
    const animateElements = document.querySelectorAll(
        '.philosophy-card, .step-card, .resource-card, .example-card, .problem-item'
    );
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // =============================================================================
    // カウンターアニメーション
    // =============================================================================
    
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        }
        
        updateCounter();
    }
    
    // 統計カウンターの要素を監視
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                
                // 数字を抽出
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                if (number && !element.classList.contains('animated')) {
                    element.classList.add('animated');
                    animateCounter(element, number);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // =============================================================================
    // フォーム処理（仮想）
    // =============================================================================
    
    const ctaButtons = document.querySelectorAll('.cta-button-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#signup' || this.getAttribute('href') === '#start') {
                e.preventDefault();
                showModal();
            }
        });
    });
    
    function showModal() {
        // モーダル表示の実装（実際のプロジェクトでは外部サービスと連携）
        alert('無料スタートキットの詳細は、実際のサービスでは専用フォームが表示されます。\n\n含まれる内容：\n- スタートガイド PDF\n- プロンプト例集30選\n- 週次レビューシート\n- コミュニティ参加権');
    }
    
    // =============================================================================
    // ヒーローカードのホバー効果
    // =============================================================================
    
    const heroCards = document.querySelectorAll('.hero-card');
    
    heroCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // =============================================================================
    // モバイルナビゲーション（簡易版）
    // =============================================================================
    
    // レスポンシブ対応のためのナビゲーション調整
    function handleMobileNav() {
        const nav = document.querySelector('.nav');
        const headerCta = document.querySelector('.header-cta');
        
        if (window.innerWidth <= 768) {
            nav.style.flexDirection = 'column';
            nav.style.gap = '1rem';
        } else {
            nav.style.flexDirection = 'row';
            nav.style.gap = '2rem';
        }
    }
    
    window.addEventListener('resize', handleMobileNav);
    handleMobileNav(); // 初期実行
    
    // =============================================================================
    // パフォーマンス最適化
    // =============================================================================
    
    // 画像の遅延読み込み（仮想）
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    lazyLoadImages();
    
    // =============================================================================
    // エラーハンドリング
    // =============================================================================
    
    window.addEventListener('error', function(e) {
        console.log('エラーが発生しました:', e.error);
        // 実際のプロジェクトではエラーレポートサービスに送信
    });
    
    // =============================================================================
    // Google Analytics / GTM 連携準備
    // =============================================================================
    
    function trackEvent(action, category = 'User Interaction', label = '') {
        // Google Analytics イベント送信の準備
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
        
        console.log(`Event tracked: ${category} - ${action} - ${label}`);
    }
    
    // CTAボタンクリックの追跡
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackEvent('CTA Click', 'Button', buttonText);
        });
    });
    
    // タブクリックの追跡
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.textContent.trim();
            trackEvent('Tab Switch', 'Navigation', tabName);
        });
    });
    
    // =============================================================================
    // 初期化完了
    // =============================================================================
    
    console.log('AI am I v3 JavaScript initialized successfully');
    
    // パフォーマンス計測
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loadTime = performance.now();
            console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        }, 0);
    });
    
});

// =============================================================================
// ユーティリティ関数
// =============================================================================

// デバウンス関数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// スロットル関数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// スムーススクロール用のユーティリティ
function scrollToElement(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// モーダル表示（将来の拡張用）
function createModal(content, options = {}) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            ${content}
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // クローズ機能
    modal.querySelector('.modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    return modal;
}