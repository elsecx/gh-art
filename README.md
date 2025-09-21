# GitHub-Art

![License](https://img.shields.io/github/license/elsecx/gh-art)
![Issues](https://img.shields.io/github/issues/elsecx/gh-art)
![PRs](<https://img.shields.io/badge/(Compiler)%20Typescript-passing-cyan?logo=github>)
![PRs](https://img.shields.io/badge/PRs-Welcome-lightgreen)

**GitHub-Art** is an **open-source web tool** that lets you create **custom art patterns** on your [GitHub Contribution Graph](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile) automatically.  
Design a pattern on an interactive editor, and the system will generate the required commits so your artwork appears directly on your GitHub profile.

![Demo Screenshot](./docs/demo-preview.png)

---

## ✨ Features

- **Interactive Pattern Editor**  
  Draw patterns on a 7 × 52 grid representing days and weeks of a year.
- **Export / Import**  
  Save or share designs in JSON format.
- **GitHub Integration**  
  Log in with GitHub OAuth, choose an existing repository, or create a dedicated repo for your art.
- **Automated Commit Generator**  
  Generate backdated commits automatically to match your pattern.
- **Contribution Graph Preview**  
  Preview the result before publishing commits.

---

## 🚀 Tech Stack

- **Framework**: Next.js (TypeScript)
- **UI**: Tailwind CSS + shadcn/ui
- **State Management**: Redux Toolkit
- **Canvas/Grid**: Konva.js
- **Auth**: NextAuth with GitHub OAuth
- **Hosting / Deployment**: Vercel (recommended)
- **Tooling**: ESLint, Prettier, pnpm (recommended)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [pnpm](https://pnpm.io/) (recommended) / npm / yarn
- GitHub OAuth App credentials (Client ID & Secret) → [Setup Guide](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/github-art.git
cd github-art

# 2. Install dependencies
pnpm install

# 3. Create environment variables
cp .env.example .env.local
# Fill in GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET

# 4. Start the development server
pnpm dev
```

Copy env example and fill required variables (see Environment Variable Required):

```bash
cp .env.example .env.local
# edit .env.local
```

Run the dev server:

```bash
pnpm dev
```

Common scripts (defined in package.json):

```bash
# development
pnpm dev

# build
pnpm build

# production start (after build)
pnpm start

# lint
pnpm lint

# format / prettier
pnpm format

# run tests (if tests exist)
pnpm test
```

If you need to emulate Git operations (for commit generation) locally, consider using a test repository or feature flag to avoid affecting personal repositories.

---

## 📦 Deployment

We recommend deploying to **Vercel** for zero-config Next.js hosting.

1. Push your repository to GitHub.
2. Create a new Vercel project and link the GitHub repository.
3. Add environment variables in the Vercel dashboard (see the list below).
4. Deploy — Vercel will build and publish automatically.

> **_Optionally:_** use GitHub Actions to run scheduled commit-generation jobs or to run the commit generator as a server-side operation (requires additional secrets / tokens).

---

## 🔑 Environment Variables Required

Add these to .env.local (development) and to your deployment environment (Vercel):

```ini
# GitHub OAuth app
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret

# NextAuth config
NEXTAUTH_URL=https://your-deployment-url.com   # http://localhost:3000 for local dev
NEXTAUTH_SECRET=long_random_secret

# Optional: Personal Access Token (if implementing server-side repo operations)
# Only use if you understand the security implications.
GITHUB_PAT=your_personal_access_token_here

# Optional: default target repo name for automatic repo creation
DEFAULT_REPO_NAME=graph-art
```

### Security notes

- Never commit .env.local to source control.
- For production, store secrets in the hosting provider's secret manager (e.g., Vercel Environment Variables).
- Prefer OAuth and short-lived tokens. If you use a PAT for automation, restrict its scope and store it securely.

---

## Pattern JSON Format

Patterns are exported/imported using JSON. Consistent format helps sharing and programmatic generation.

### Spec

- year: target year (number)
- grid: 7 × 52 array — 7 rows (days) × 52 columns (weeks)
    - Row index 0 = Sunday, 1 = Monday, ... 6 = Saturday
    - Column index 0 = first week column (left-most)
- intensity: optional per-cell integer (0 = no commits, higher number = more commits / stronger color)

### Example

```json
{
  "year": 2025,
  "grid": [
    // 52 columns (weeks), each containing 7 integers (days)
    // Sunday → Saturday (top to bottom)
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    ...
  ],
  "meta": {
    "name": "Example Pattern",
    "author": "Alwafey",
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

### Intensity mapping (recommended)

GitHub contribution graphs have 5 color levels.
Below are the default commit counts to achieve each shade (you can override via intensityMap):

- 0 — `#ebedf0` (0 commit)
- 1 — `#9be9a8` (≥1 commit)
- 2 — `#40c463` (≥3 commits)
- 3 — `#30a14e` (≥6 commits)
- 4 — `#216e39` (≥10 commits)

When generating commits, the system reads the `grid` intensity and multiplies it by the corresponding commit count.

---

## 🤝 Contributing

We welcome contributions from everyone. To keep the project healthy and easy to maintain, please follow these steps:

1. Fork the repository.
2. Create a feature branch:
    ```bash
     git checkout -b feat/your-feature
    ```
3. Make changes, run linters and tests, and commit with a clear message:
    ```bash
    git commit -m "feat(editor): add undo/redo"
    ```
4. Push your branch and open a Pull Request (PR) against main.
5. Describe your changes and link any related issues.

Suggested file to include in the repo `CONTRIBUTING.md` — contribution guidelines and PR checklist

### Review process

- All PRs are reviewed by maintainers.
- Small changes may be merged quickly; larger changes may request revisions.
- Use meaningful commit messages and follow Conventional Commits if possible.

---

## 🧑‍💻 Coding Standards

- Language: TypeScript for all source files (`.ts`, `.tsx`).
- Linting: ESLint (recommended rules + Prettier compatibility).
- Formatting: Prettier (run `pnpm format`).
- Commit messages: Prefer Conventional Commits (e.g., `feat:`, `fix:`, `chore:`).
- Branching: Use feature branches named `feat/...`, `fix/...`, `chore/...`.
- Tests: Add unit/integration tests where appropriate. Aim for maintainable and testable code.

### Example scripts (package.json)

```json
{
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "eslint . --ext .ts,.tsx",
        "format": "prettier --write .",
        "test": "vitest"
    }
}
```

---

## 📜 License

This project is released under the MIT License. See the included LICENSE file for full details.

---

## 💬 Support & Feedback

- **Report bugs or request features**: open an issue on GitHub → [issues](https://github.com/<your-username>/gh-art/issues)
- **Discuss ideas and roadmap**: GitHub Discussions (if enabled) → [discussions](https://github.com/<your-username>/gh-art/discussions)

If you find GitHub-Art helpful, please ⭐ star the repository — it helps others discover the project!
