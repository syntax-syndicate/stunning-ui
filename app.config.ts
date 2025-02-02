export default defineAppConfig({
  stunning: {
    site: {
      title: 'Stunning UI',
      description: 'Create stunning websites that are stand out',
      url: 'http://stunningui.design',
      ogImage: '/preview.png'
    },
    theme: {
      customizable: true,
      color: 'neutral',
      radius: 0.5
    },
    header: {},
    aside: {},
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        nuxt: 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        vue: 'vscode-icons:file-type-vue',
        ts: 'vscode-icons:file-type-typescript',
        tsx: 'vscode-icons:file-type-typescript',
        mjs: 'vscode-icons:file-type-js',
        cjs: 'vscode-icons:file-type-js',
        js: 'vscode-icons:file-type-js',
        jsx: 'vscode-icons:file-type-js',
        md: 'vscode-icons:file-type-markdown',
        mdc: 'vscode-icons:file-type-markdown',
        py: 'vscode-icons:file-type-python',
        npm: 'vscode-icons:file-type-npm',
        pnpm: 'vscode-icons:file-type-pnpm',
        npx: 'vscode-icons:file-type-npm',
        yarn: 'vscode-icons:file-type-yarn',
        bun: 'vscode-icons:file-type-bun',
        yml: 'vscode-icons:file-type-yaml',
        json: 'vscode-icons:file-type-json',
        terminal: 'lucide:terminal'
      }
    },
    footer: {},
    toc: {
      enable: true,
      title: 'On This Page',
      links: [
        {
          title: 'Star on GitHub',
          icon: 'lucide:star',
          to: 'https://github.com/xiaoluoboding/stunning-ui',
          target: '_blank'
        },
        {
          title: 'Create Issues',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/xiaoluoboding/stunning-ui/issues',
          target: '_blank'
        }
      ]
    },
    search: {
      enable: true,
      inAside: false
    }
  }
})
