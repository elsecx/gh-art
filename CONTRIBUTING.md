# Contributing to GitHub-Art

**Thank you for your interest in contributing!**  
GitHub-Art is an open-source project that thrives on community involvement.  
This document explains how to report issues, propose features, and submit code changes.

---

## Table of Contents
- [Contributing to GitHub-Art](#contributing-to-github-art)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Ways to Contribute](#ways-to-contribute)
  - [Development Setup](#development-setup)
  - [Branching \& Workflow](#branching--workflow)
  - [Commit Guidelines](#commit-guidelines)
  - [Pull Request Process](#pull-request-process)
  - [Issue Guidelines](#issue-guidelines)
  - [Additional Tips](#additional-tips)

---

## Code of Conduct
Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to help keep our community welcoming and inclusive.

---

## Ways to Contribute
You can help the project in many ways:
- **Bug reports** – File an issue if you find a bug or unexpected behavior.
- **Feature requests** – Suggest new features or improvements.
- **Documentation** – Improve README, docs, or add tutorials.
- **Code contributions** – Fix bugs, add features, or refactor code.
- **Testing** – Write unit/integration tests to improve reliability.

---

## Development Setup
1. **Fork** the repository to your GitHub account.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/github-art.git
   cd github-art
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. **Create a branch** for your work:
   ```bash
   git checkout -b feat/awesome-feature
   ```
5. Configure environment variables:
   Copy `.env.example` → `.env.local` and fill in required values.
6. Run the dev server:
   ```bash
   pnpm dev
   ```
7. Make your changes and ensure everything runs without errors.

---

## Branching & Workflow
We use a simplified GitHub Flow:
- **main** – always deployable.
- Feature branches follow the pattern:
  - `feat/<short-description>` for new features.
  - `fix/<short-description>` for bug fixes.
  - `chore/<short-description>` for maintenance or tooling.

---

## Commit Guidelines
Follow [Conventional Commits](https://www.conventionalcommits.org/) to keep history clean and changelog-friendly.

Common types:
- `feat:` – New feature
- `fix:` – Bug fix
- `docs:` – Documentation only changes
- `chore:` – Build/CI/tooling changes
- `refactor:` – Code change that neither fixes a bug nor adds a feature

Example:
```scss
feat(editor): add undo/redo functionality
```

---

## Pull Request Process
1. Push your branch to your fork:
   ```bash
    git push origin feat/awesome-feature
   ```
2. Open a Pull Request (PR) against the main branch of the upstream repository.
3. Provide a clear description of the problem and your solution.
4. Ensure:
   - All tests pass (pnpm test).
   - Code is formatted (pnpm format).
   - No lint errors (pnpm lint).

> Maintainers will review your PR.  
> Small changes may be merged quickly, larger ones might require discussion or revisions.

---

## Issue Guidelines
When opening a new issue:
- Use the provided templates (if available).
- Include steps to reproduce, environment details, and screenshots if applicable.
- Check existing issues to avoid duplicates.

---

## Additional Tips
- Use TypeScript for all code changes.
- Avoid committing build artifacts (e.g., .next, node_modules).
- Keep PRs focused. Smaller, focused PRs are easier to review and merge.

---

> ***Thank you for helping make GitHub-Art better!***