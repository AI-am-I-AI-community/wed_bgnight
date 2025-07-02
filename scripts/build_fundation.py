import os
import re
from pathlib import Path

# --- Config -------------------------------------------------------------
VAULT_ROOT = Path(__file__).resolve().parents[1]
FOUNDATION_DIR = VAULT_ROOT / "04_data/3.fundation"
SEARCH_DIRS = [
    VAULT_ROOT / "04_data/0.RAW",
    VAULT_ROOT / "04_data/1.ai",
    VAULT_ROOT / "04_data/2.reflexion",
    VAULT_ROOT / "03_private",
    VAULT_ROOT / "02_business",
]

TOPIC_KEYWORDS = {
    "01_core_identity": ["identity", "価値観", "persona", "プロフィール"],
    "02_thinking_psychology": ["thinking", "psychology", "思考", "感情", "心理"],
    "03_learning_problem_solving": ["learning", "学習", "problem", "解決", "勉強", "学び"],
    "04_daily_routines": ["routine", "daily", "日課", "ルーティン", "習慣", "タイムトラッキング"],
    "05_skills_abilities": ["skill", "skills", "スキル", "能力", "プロフィール"],
    "06_interests_hobbies": ["interest", "hobby", "趣味", "関心"],
    "07_goals_plans": ["goal", "goals", "plan", "plans", "目標", "計画", "OKR", "ロードマップ"],
    "08_memories_experiences": ["memory", "memories", "experience", "experiences", "エピソード", "体験", "思い出"],
    "09_ai_instruction_manual": ["prompt", "instruction", "AIツール", "マニュアル"],
    "10_personal_story": ["story", "ライフストーリー", "生い立ち", "ストーリー"],
}

# topicsに含まれるファイルから自動要約を生成する対象。
SKIP_AUTO_SUMMARY = {"01_core_identity", "02_thinking_psychology"}

# -----------------------------------------------------------------------

def find_matching_files(keywords):
    matches = []
    kw_pattern = re.compile("|".join(re.escape(k) for k in keywords), re.IGNORECASE)
    for d in SEARCH_DIRS:
        if not d.exists():
            continue
        for root, _, files in os.walk(d):
            for f in files:
                if not f.endswith(".md"):
                    continue
                path = Path(root) / f
                try:
                    text = path.read_text(encoding='utf-8')
                except Exception:
                    continue
                if kw_pattern.search(f) or kw_pattern.search(text):
                    matches.append(path.relative_to(VAULT_ROOT).as_posix())
    return sorted(set(matches))


def update_foundation_file(topic_key, sources):
    fname = FOUNDATION_DIR / f"{topic_key.split('_')[0]}_{topic_key.split('_',1)[1]}_fundation.md"
    if not fname.exists():
        return
    content = fname.read_text(encoding='utf-8').splitlines()
    # update YAML sources list (between --- blocks)
    yaml_end_idx = content.index('---', 1)  # second --- line
    yaml_block = content[1:yaml_end_idx]
    new_yaml = []
    in_sources = False
    for line in yaml_block:
        if line.startswith('sources:'):
            new_yaml.append('sources:')
            in_sources = True
            for s in sources:
                new_yaml.append(f'  - {s}')
            continue
        if in_sources and line.startswith(' '):
            # skip old source lines
            continue
        else:
            in_sources = False
            new_yaml.append(line)
    # rebuild file
    updated = ['---'] + new_yaml + ['---'] + content[yaml_end_idx+1:]

    # append Extracted Notes section
    if '## Extracted Notes' not in content:
        updated.append('\n## Extracted Notes')
    idx = updated.index('## Extracted Notes') if '## Extracted Notes' in updated else len(updated)-1
    notes = [f"- [[{s}]]" for s in sources]
    updated = updated[:idx+1] + notes + updated[idx+1:]

    # ---------------- Auto Summary -----------------
    if topic_key not in SKIP_AUTO_SUMMARY:
        summary_header = '## Auto Summary'
        # remove old auto summary block if exists
        if summary_header in updated:
            start = updated.index(summary_header)
            # cut until next header or end
            end = start + 1
            while end < len(updated) and not updated[end].startswith('## '):
                end += 1
            updated = updated[:start] + updated[end:]

        snippets = []
        for s in sources[:20]:  # limit 20 sources for brevity
            fpath = VAULT_ROOT / s
            if not fpath.exists():
                continue
            try:
                lines = fpath.read_text(encoding='utf-8').splitlines()
            except Exception:
                continue
            # grab first 5 non-empty lines (skip yaml if present)
            cleaned = []
            in_yaml = False
            for ln in lines:
                if ln.strip().startswith('---'):
                    in_yaml = not in_yaml
                    continue
                if in_yaml or not ln.strip():
                    continue
                cleaned.append(ln.strip().lstrip('#').strip())
                if len(cleaned) >= 5:
                    break
            if not cleaned:
                continue
            snippet = [f"### {Path(s).name}"] + [f"- {c[:120]}" for c in cleaned]
            snippets.extend(snippet + [''])

        if snippets:
            updated.append(summary_header)
            updated.extend(snippets)

    fname.write_text("\n".join(updated), encoding='utf-8')


def main():
    for topic, kws in TOPIC_KEYWORDS.items():
        srcs = find_matching_files(kws)
        update_foundation_file(topic, srcs)
        print(f"{topic}: {len(srcs)} sources added.")

if __name__ == '__main__':
    main() 