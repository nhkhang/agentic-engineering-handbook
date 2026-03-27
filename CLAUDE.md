# Claude Code Prompt: Init Agentic Engineering Handbook (Docusaurus)

## Goal

Initialize a Docusaurus project for a public, open-source handbook called **"Agentic Engineering Handbook"**. This is a living reference for engineers and AI agents working with agentic systems. Do NOT create any content — only set up the project structure, configuration, and contributor infrastructure.

## Requirements

### 1. Project Init

- Use Docusaurus v3 (latest stable) with TypeScript
- Project name: `agentic-engineering-handbook`
- Tagline: "A living handbook for building, operating, and collaborating with AI agents"
- Use the `classic` preset

### 2. Site Configuration (`docusaurus.config.ts`)

- Title: "Agentic Engineering Handbook"
- URL: configure for GitHub Pages deployment (use placeholder org name `agentic-handbook`)
- Enable blog: false (docs-only mode)
- Set up navbar with: Home, Docs, GitHub link
- Footer with: MIT License notice, "Built with Docusaurus", GitHub link
- Color scheme: support both light and dark mode
- Enable docs versioning (but don't create any versions yet)
- Configure `editUrl` pointing to the GitHub repo so readers can propose edits
- Add metadata: `og:type`, `og:title`, `description` for SEO

### 3. Docs Sidebar Structure

Create the folder structure and placeholder `_category_.json` files (NO content markdown files) for these sections:

```
docs/
├── foundations/           # Core concepts of agentic engineering
├── patterns/              # Design patterns for agent systems
├── tooling/               # Tools, frameworks, SDKs
├── workflows/             # Real-world agentic workflows
├── human-agent-collab/    # Human-in-the-loop, delegation, oversight
├── evaluation/            # Testing, benchmarking, evals
├── safety/                # Guardrails, security, alignment
└── contributing/          # How to contribute to this handbook
```

Each `_category_.json` should have a `label`, `position` (in the order listed above), and `description`.

### 4. Agent-Friendly Features

- Create a `static/llms.txt` file with a brief description of the handbook and a note that full content is available via the GitHub repo's raw markdown files
- Create a `static/llms-full.txt` placeholder (empty, to be auto-generated later)
- Add a `robots.txt` in `static/` that allows all crawlers

### 5. Contributor Infrastructure

- `CONTRIBUTING.md` — clear guide covering: how to submit content, PR workflow, branch naming convention (`docs/<topic>`), writing style expectations (concise, practical, example-driven), and how to run locally
- `CODE_OF_CONDUCT.md` — Contributor Covenant v2.1
- `.github/PULL_REQUEST_TEMPLATE.md` — PR template with checklist: description, section affected, content reviewed for accuracy, no proprietary info
- `.github/ISSUE_TEMPLATE/content-request.md` — issue template for requesting new handbook topics
- `LICENSE` — MIT License

### 6. CI/CD

- `.github/workflows/deploy.yml` — GitHub Actions workflow to build and deploy to GitHub Pages on push to `main`
- `.github/workflows/ci.yml` — GitHub Actions workflow for PR checks: build validation, broken link check

### 7. Developer Experience

- Add scripts in `package.json`:
  - `start` — local dev server
  - `build` — production build
  - `serve` — serve production build locally
  - `clear` — clear Docusaurus cache
  - `typecheck` — TypeScript type checking
- `.nvmrc` with Node 20 LTS
- `.gitignore` properly configured for Docusaurus + Node
- `README.md` — project overview, quick start instructions (clone, install, run), link to live site, how to contribute, license badge

### 8. Constraints

- Do NOT create any actual documentation content (no `.md` or `.mdx` files in the docs sections except `_category_.json`)
- Do NOT install optional plugins yet (search, analytics, etc.) — keep it minimal
- Do NOT set up custom themes or CSS beyond default Docusaurus styling
- Keep everything clean, minimal, and ready for content to be added incrementally
