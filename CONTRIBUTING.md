# Contributing to Ngoga Portfolio

First off, thank you for considering contributing to this project! 🎉

The following is a set of guidelines for contributing to the Ngoga Portfolio project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)

---

## Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inclusive environment. By participating, you are expected to uphold this code. Please report unacceptable behavior to [mngogafidele@gmail.com](mailto:mngogafidele@gmail.com).

### Our Standards

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

---

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [existing issues](https://github.com/ngoguessfidele/ngoga_portfolio/issues) to avoid duplicates.

When creating a bug report, please include:

- **Clear title** describing the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details** (browser, OS, Node.js version)

Use the following template:

```markdown
## Bug Description
A clear and concise description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
A clear description of what you expected to happen.

## Actual Behavior
What actually happened.

## Screenshots
If applicable, add screenshots to help explain your problem.

## Environment
- OS: [e.g., Windows 11, macOS 14]
- Browser: [e.g., Chrome 120, Firefox 121]
- Node.js version: [e.g., 18.17.0]
```

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/ngoguessfidele/ngoga_portfolio/issues).

When creating an enhancement suggestion, please include:

- **Clear title** describing the enhancement
- **Detailed description** of the proposed feature
- **Use case** explaining why this enhancement would be useful
- **Mockups or examples** if applicable

### Pull Requests

1. **Fork** the repository
2. **Create a branch** from `main` for your feature
3. **Make your changes** following our style guidelines
4. **Test** your changes thoroughly
5. **Commit** your changes with meaningful commit messages
6. **Push** to your fork
7. **Open a Pull Request** against `main`

#### Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review of code completed
- [ ] Comments added where necessary
- [ ] Documentation updated if needed
- [ ] No new warnings generated
- [ ] Tested on multiple browsers/devices

---

## Development Setup

### Prerequisites

- Node.js >= 18.17.0
- npm >= 9.0.0 (or yarn/pnpm)
- Git

### Local Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/ngoga_portfolio.git
cd ngoga_portfolio

# 3. Add upstream remote
git remote add upstream https://github.com/ngoguessfidele/ngoga_portfolio.git

# 4. Install dependencies
npm install

# 5. Start development server
npm run dev

# 6. Open http://localhost:3000
```

### Keeping Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream changes into your local main branch
git checkout main
git merge upstream/main

# Push updates to your fork
git push origin main
```

---

## Style Guidelines

### TypeScript/React

- Use **TypeScript** for all new code
- Follow **functional component** patterns
- Use **hooks** for state management
- Prefer **named exports** over default exports (except for page components)
- Keep components **small and focused**

```typescript
// ✅ Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
}

// ❌ Avoid
export default function Button(props: any) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

### CSS/Tailwind

- Use **Tailwind CSS** utility classes
- Follow **mobile-first** responsive design
- Use **CSS custom properties** for theming
- Keep class lists readable with line breaks for long lists

```tsx
// ✅ Good
<div className="
  flex flex-col items-center
  md:flex-row md:justify-between
  p-4 bg-white dark:bg-gray-900
  rounded-lg shadow-lg
">

// ❌ Avoid
<div className="flex flex-col items-center md:flex-row md:justify-between p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
```

### File Organization

```
components/
├── ComponentName.tsx      # Component file
├── ComponentName.test.tsx # Tests (if applicable)
└── index.ts              # Barrel exports (if needed)
```

---

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting, semicolons, etc.) |
| `refactor` | Code refactoring |
| `perf` | Performance improvements |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |

### Examples

```bash
# Feature
feat(projects): add filtering by technology

# Bug fix
fix(header): resolve mobile menu not closing on navigation

# Documentation
docs(readme): update installation instructions

# Style
style(hero): format code according to prettier config

# Refactor
refactor(contact): simplify form validation logic
```

---

## Questions?

Feel free to reach out:

- **Email**: [mngogafidele@gmail.com](mailto:mngogafidele@gmail.com)
- **LinkedIn**: [Ngoga Fidele](https://www.linkedin.com/in/musafiri-fidele-6aa69311b/)
- **GitHub Issues**: [Open an issue](https://github.com/ngoguessfidele/ngoga_portfolio/issues)

---

Thank you for contributing! 🙏
