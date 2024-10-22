# Contributing to Stunning UI

Thank you for your interest in contributing to the **Stunning UI** project! Your contributions help make this project better for everyone. Please take a moment to read through these guidelines to ensure a smooth collaboration.

## Table of Contents

- [Contributing to Stunning UI](#contributing-to-stunning-ui)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Code of Conduct](#code-of-conduct)
  - [How to Contribute](#how-to-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Adding New Components](#adding-new-components)
  - [Project Structure](#project-structure)
  - [Style Guidelines](#style-guidelines)
    - [Coding Standards](#coding-standards)
    - [Component Format](#component-format)
    - [Commit Messages](#commit-messages)
  - [Documentation Guidelines](#documentation-guidelines)
    - [Steps to Add a New Component](#steps-to-add-a-new-component)
    - [Single-File Components](#single-file-components)
  - [Testing](#testing)
  - [License](#license)

---

## Getting Started

- **Fork the Repository**: Create a personal fork of the project on GitHub.
- **Clone Your Fork**: Clone your forked repository to your local machine.
- **Create a Branch**: Create a new branch for your contribution (`git checkout -b feat/YourFeatureName`).
- **Install Dependencies**: Run `pnpm install` to install all necessary dependencies.

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](./CODE_OF_CONDUCT.md), which aims to foster an open and welcoming environment.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an [issue](https://github.com/xiaoluoboding/stunning-ui/issues){:target="\_blank"} and include:

- A clear and descriptive title.
- Steps to reproduce the issue.
- Expected and actual results.
- Screenshots or code snippets, if applicable.

### Suggesting Enhancements

We welcome suggestions for new features or improvements. Please open an [issue](https://github.com/xiaoluoboding/stunning-ui/issues){:target="\_blank"} and include:

- A clear and descriptive title.
- A detailed description of the enhancement.
- Any relevant examples or mockups.

### Adding New Components

We appreciate contributions that add new components to the library. Please ensure that:

- The component is generally useful and aligns with the project's goals.
- The component is compatible with both **Nuxt** and **Vue**.
- You follow the coding and documentation guidelines outlined below.
- You include unit tests for your component.

## Project Structure

Understanding the project structure is crucial for effective contribution:

- **Components Directory**:
  - Main components should be placed in `components/stunning/<component-name>/`.
  - Example components should be placed in `pages/playground/<component-folder-name>/`.
- **Documentation**:
  - Documentation files are located in the `content/<component-name>/` directory.
  - After adding a component, write its documentation in this directory.

## Style Guidelines

### Coding Standards

- **Language**: All components should be written in **Vue.js** with TypeScript support.
- **Styling**: Use **Tailwind CSS** classes for styling whenever possible.
- **Naming Conventions**: Use `PascalCase` for component names and filenames.

### Component Format

Your Vue components should adhere to the following structure:

```vue
<!-- Template -->
<template>
  <!-- Your template code goes here -->
</template>

<!-- Script -->
<script lang="ts" setup>
// Your script code goes here
</script>

<!-- Styles (if required) -->
<style scoped>
/* Your styles go here */
</style>
```

**Notes:**

- Use `<script lang="ts" setup>` for TypeScript and the Composition API.
- Keep styles scoped to prevent conflicts.
- Ensure compatibility with both **Nuxt** and **Vue**.

### Commit Messages

- Use the [Conventional Commits](https://www.conventionalcommits.org/) format.
- Begin with a type (`feat`, `fix`, `docs`, etc.) followed by a short description.
- Example: `feat: add TextHoverEffect component`

## Documentation Guidelines

Proper documentation is crucial for users to understand and effectively use the components. Follow these guidelines when adding documentation for new components.

### Steps to Add a New Component

1. **Create the Component**

   - Place the main component in `components/stunning/<component-name>/`.
   - Follow the [Component Format](#component-format) specified above.
   - If the component requires examples or demos, add demo components to `pages/playground/<component-folder-name>/`.

2. **Write Documentation**

   - Add a new Markdown file in `content/components/<component-name>/` for your component's documentation.
   - Use the appropriate template based on whether your component is single-file or multi-file (see below).
   - Mention the **Credits** and source if the component is ported from any other UI library or taken inspiration from any other source.

3. **Ensure Compatibility**

   - Test your component in both **Nuxt** and **Vue** environments.

### Single-File Components

For components that are contained within a single `.vue` file, use the following template:

1. **Front Matter**

   Begin with YAML front matter that includes the `title` and `description`:

   ```yaml
   ---
   title: Your Component Title
   description: A brief description of what your component does.
   ---
   ```

2. **Preview Section**

   Use the `Playground` to display a live preview of the component. The `url` should be set to the folder name of your component in `pages/playground/<component-name>/`.

   ```markdown
   ::div{label="Preview"}
   <Playground url="/playground/<component-name>"></Playground>
   ::
   ```

3. **API Documentation**

   Provide a table listing all props:

   ```markdown
   ## API

   | Prop Name | Type     | Default | Description           |
   | --------- | -------- | ------- | --------------------- |
   | `prop1`   | `string` | `''`    | Description of prop1. |
   | `prop2`   | `number` | `0`     | Description of prop2. |
   ```

4. **Component Code**

   Include the full code of the component using `CodeCollapse`.

   ```markdown
   ## Component Code

   You can copy and paste the following code to create this component:

   ::CodeCollapse
   <YourComponentCode />
   ::
   ```

**Example:**

[StreamingText](./content/components/streaming-text.md)

## Testing

- **Unit Tests**: Write unit tests for your component if applicable.
- **Cross-Environment Testing**: Ensure that your component works correctly in both **Nuxt** and **Vue** environments.
- **Visual Testing**: Check the component visually to ensure it renders correctly.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](https://github.com/xiaoluoboding/stunning-ui/blob/main/LICENSE){:target="\_blank"}.
