# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an Obsidian vault implementing a "Second Self" (第二の自分) system - an AI-assisted personal knowledge management and self-documentation framework. The system processes personal data through multiple layers to create a comprehensive digital representation of an individual.

## Key Architecture

### Data Flow Pipeline
The system follows a 4-stage data processing pipeline:

1. **RAW Data Capture** (`04_data/0.RAW/`) - Primary sources (voice recordings, documents, media)
2. **AI Processing** (`04_data/1.ai/`) - Automated summarization and analysis
3. **Human Reflection** (`04_data/2.reflexion/`) - Manual insights and feedback
4. **Foundation Building** (`04_data/3.fundation/`) - Consolidated knowledge base

### Core Personal Profile
The `00_core/` directory contains the main personal profile divided into 10 categories:
- Core Identity, Thinking & Psychology, Learning & Problem Solving
- Daily Routines, Skills & Abilities, Interests & Hobbies  
- Goals & Plans, Memories & Experiences, AI Instruction Manual, Personal Story

## Development Commands

### Python Scripts
All automation scripts are located in the `scripts/` directory:

```bash
# Process new files from inbox to RAW data
python scripts/ingest_raw.py

# Generate AI summaries from RAW data
python scripts/summarize_ai.py

# Build foundation files from processed data
python scripts/build_fundation.py

# Push decisions to domain READMEs
python scripts/push_to_domain.py

# Update dashboards (placeholder)
python scripts/update_dashboards.py
```

### Environment Setup
- Set `OPENAI_API_KEY` environment variable for AI summarization
- Python 3.x with `openai` package required
- Scripts assume they're run from the vault root directory

## File Organization

### Directory Structure
- `00_core/` - Main personal profile (summary, details, deepdive levels)
- `01_inbox/` - Temporary staging for new content
- `02_business/` - Business and professional projects
- `03_private/` - Personal hobbies and private content
- `04_data/` - Data processing pipeline (RAW → AI → Reflection → Foundation)
- `05_templates/` - Reusable templates
- `06_archive/` - Historical backups
- `scripts/` - Automation scripts

### Naming Conventions
- Files use numbered prefixes for ordering (01_, 02_, etc.)
- Date formats: `YYYY-MM-DD` or `YYYYMM` for monthly groupings
- Foundation files: `{number}_{category}_fundation.md`
- AI processed files: `{original_name}_ai.md`

## Data Processing Workflow

### Metadata Standards
Files use YAML frontmatter for metadata:

```yaml
---
source: 04_data/0.RAW/voice/2025-06/filename.wav
method: voice  # voice | docs | media
summary_level: first_pass  # first_pass | second_pass
impact: medium  # low | medium | high
domain: private  # private | business
---
```

### Topic Classification
The system uses keyword-based classification for 10 core topics:
- Identity, Psychology, Learning, Routines, Skills, Interests, Goals, Memories, AI Instructions, Personal Story

## Technical Notes

### Obsidian Integration
- Uses Dataview plugin for dynamic queries
- Supports backlinks and graph view
- Templates in `05_templates/` for consistent formatting

### AI Integration
- OpenAI API for text summarization
- Whisper API planned for voice transcription
- Foundation building uses keyword matching for content categorization

### Security Considerations
- All API keys should be set as environment variables
- Personal data remains local in the Obsidian vault
- Scripts include basic error handling for file operations

## Development Guidelines

### Adding New Scripts
- Place in `scripts/` directory with descriptive names
- Use `pathlib.Path` for cross-platform file handling
- Include error handling for file operations
- Follow the established YAML metadata format

### Modifying Data Flow
- Understand the 4-stage pipeline before making changes
- Update both the processing scripts and documentation
- Test with sample data before processing real personal content

### File Processing
- Always preserve original files in 0.RAW
- Use relative paths in YAML metadata for portability
- Maintain the numbered directory structure for ordering