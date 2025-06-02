<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# GitHub Copilot Instructions`
# This file contains instructions for GitHub Copilot to help it understand the context of your project.
# It is used to provide hints and suggestions for code completion and generation.
# The instructions are written in Markdown format and can include any relevant information about the project.

# Project Overview

To create a development environment template that generates a VSCode workspace.

1. Create a new directory for the project in ~/dev/ and ask for USER input for the project name.
2. cd into the project directory.
3. Create a `.vscode` folder inside the project directory.
4. Create a README.md file in the project root.
5. Create other necessary files and directories for the project. Examples include:
   - `hello.js`: A simple JavaScript file that prints "Hello, World!" to the console.
   - `tasks.json`: A VSCode tasks file that defines how to run the project. Inside [`.vscode`], create a `tasks.json` file that defines a task to run the `hello.js` script.
6. Implement a simple "Hello, World!" script in `hello.js`.
7. Add instructions in the README.md file on how to run the project using the provided VSCode task or with `node hello.js`.
8. Ensure that the project is set up to be easily extensible for future development.
9. Add a `.gitignore` file to exclude unnecessary files from version control.
10. Add a license file to the project.
11. Add a `.editorconfig` file to maintain consistent coding styles across different editors and IDEs.
12. Add a `.prettierrc` file to configure Prettier for code formatting.
13. Add a `.eslintrc` file to configure ESLint for code linting.
14. Add a .env file to store environment variables.
15. Add a .env.example file to provide an example of the environment variables needed for the project.
16. Add a .github directory with issue templates and pull request templates and a workflow file for CI/CD (e.g., GitHub Actions) to automate testing and deployment and a FEATURE_REQUESTS.md file to document feature requests and a CONTRIBUTING.md file to guide contributors on how to contribute to the project.
17. Add a CHANGELOG.md file to document changes and updates to the project. Update it with changes as the project evolves.
18. Create a docs folder at the project root to store documentation files if not created. Keep the documentation up to date with the project changes and updates.
19. Create a tests folder at the project root to store test files if not created.
20. Create a src folder at the project root to store source files if not created.
21. Create a dist folder at the project root to store distribution files if not created.
22. Create a public folder at the project root to store public files if not created.

## IMPORTANT

- Explain the purpose of each file and directory in the README.md file.
- Use clear and concise language.
- Follow best practices for code organization and documentation.
- Ensure that the project is easy to understand and navigate.
- Use consistent naming conventions for files and directories.
- Use appropriate file extensions for each file type.
- Use comments in the code to explain complex logic or important sections.
- Place a comment at the top of each file to indicate its purpose and usage. 
  - Place metadata at the top of each file to indicate version, changes, and author information.

- Be the best AI Architect and Developer you can be.
- Use the latest and most relevant technologies and frameworks.
- Use the latest and most relevant coding standards and best practices.
- Use the latest and most relevant tools and libraries.
- Use the latest and most relevant design patterns and architectures.
- Focus on design patterns and take the time to explain them.
- Use the latest and most relevant DevOps practices and tools.
- Use the latest and most relevant security practices and tools.
- Use the latest and most relevant testing practices and tools.
- Use the latest and most relevant deployment practices and tools.
- Use the latest and most relevant performance optimization practices and tools.
- Use the latest and most relevant accessibility practices and tools.
- When there is an opportunity to use a design pattern, explain it in detail and provide an example of how to implement it.
- Let the user know when outdated UI frameworks or libraries are used and suggest alternatives.
- Always make the user aware of oppertunities to improve the project structure, organization, and maintainability.
- Always make the user aware of opperunities to take an existing file and refactor it to use a design pattern.