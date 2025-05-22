# Hello World VSCode Workspace Template

This project is a template for quickly starting a new JavaScript project in VSCode. It includes a basic structure, configuration files, and automation for best practices.

## Project Structure & Purpose

- `.vscode/` — VSCode settings and tasks for running and debugging the project.
  - `tasks.json`: Defines how to run the `hello.js` script.
- `.github/` — GitHub-specific files for issues, PRs, CI/CD, and documentation.
  - `ISSUE_TEMPLATE/`: Templates for bug reports and feature requests.
  - `PULL_REQUEST_TEMPLATE.md`: Template for pull requests.
  - `workflows/ci.yml`: GitHub Actions workflow for CI/CD.
  - `FEATURE_REQUESTS.md`: Track feature requests.
  - `CONTRIBUTING.md`: Guide for contributors.
- `docs/` — Documentation files.
- `tests/` — Test files.
- `src/` — Source files for the project.
- `dist/` — Distribution/build output files.
- `public/` — Public/static files.
- `hello.js` — Simple Hello World script.
- `.gitignore` — Excludes files from version control.
- `.editorconfig` — Consistent coding styles across editors.
- `.prettierrc` — Prettier code formatting config.
- `.eslintrc` — ESLint code linting config.
- `.env` — Local environment variables.
- `.env.example` — Example environment variables.
- `LICENSE` — Project license (MIT).
- `CHANGELOG.md` — Project changes and updates.

## How to Run

- Open the project in VSCode.
- Use the VSCode task: `Run Hello World` (Ctrl+Shift+B or Cmd+Shift+B) to run `hello.js`.
- Or run manually: `node hello.js`

## Extending the Project

- Add new source files to `src/`.
- Add tests to `tests/`.
- Add documentation to `docs/`.

---

For more details, see individual file headers and comments.
