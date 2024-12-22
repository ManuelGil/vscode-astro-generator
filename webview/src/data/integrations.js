export const integrations = [
  {
    name: '@astrojs/tailwind',
    description: 'Use Tailwind CSS to style your Astro site',
    category: ['Official', 'CSS + UI'],
    icon: 'https://astro.build/assets/integrations/tailwind.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add tailwind',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add tailwind',
      },
      {
        type: 'yarn',
        command: 'yarn astro add tailwind',
      },
    ],
  },
  {
    name: '@astrojs/react',
    description: 'Use React components within Astro',
    category: ['Official', 'Frameworks', 'CSS + UI'],
    icon: 'https://astro.build/assets/integrations/react.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add react',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add react',
      },
      {
        type: 'yarn',
        command: 'yarn astro add react',
      },
    ],
  },
  {
    name: '@astrojs/sitemap',
    description: 'Generate a sitemap for your Astro site',
    category: ['Official'],
    icon: 'https://astro.build/assets/integrations/sitemap.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add sitemap',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add sitemap',
      },
      {
        type: 'yarn',
        command: 'yarn astro add sitemap',
      },
    ],
  },
  {
    name: '@astrojs/mdx',
    description: 'Add support for MDX pages in your Astro site',
    category: ['Official'],
    icon: 'https://astro.build/assets/integrations/mdx.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add mdx',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add mdx',
      },
      {
        type: 'yarn',
        command: 'yarn astro add mdx',
      },
    ],
  },
  {
    name: '@astrojs/node',
    description: 'Deploy your Astro site to a Node.js server',
    category: ['Official', 'Adapters'],
    icon: 'https://astro.build/assets/integrations/node.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add node',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add node',
      },
      {
        type: 'yarn',
        command: 'yarn astro add node',
      },
    ],
  },
  {
    name: '@astrojs/starlight',
    description:
      'Build beautiful, high-performance documentation websites with Astro',
    category: ['Official'],
    icon: 'https://astro.build/assets/integrations/starlight.svg',
    installation: [
      {
        type: 'npm',
        command: 'npm create astro@latest -- --template starlight',
      },
      {
        type: 'pnpm',
        command: 'pnpm create astro --template starlight',
      },
      {
        type: 'yarn',
        command: 'yarn create astro --template starlight',
      },
    ],
  },
  {
    name: '@astrojs/vercel',
    description: 'Deploy your site to Vercel',
    category: ['Official', 'Adapters'],
    icon: 'https://astro.build/assets/integrations/vercel.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add vercel',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add vercel',
      },
      {
        type: 'yarn',
        command: 'yarn astro add vercel',
      },
    ],
  },
  {
    name: '@astrojs/vue',
    description: 'Use Vue components within Astro',
    category: ['Official', 'Frameworks', 'CSS + UI'],
    icon: 'https://astro.build/assets/integrations/vue.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add vue',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add vue',
      },
      {
        type: 'yarn',
        command: 'yarn astro add vue',
      },
    ],
  },
  {
    name: '@astrojs/cloudflare',
    description: 'Deploy your site to Cloudflare Workers/Pages',
    category: ['Official', 'Adapters'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add cloudflare',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add cloudflare',
      },
      {
        type: 'yarn',
        command: 'yarn astro add cloudflare',
      },
    ],
  },
  {
    name: '@astrojs/svelte',
    description: 'Use Svelte components within Astro',
    category: ['Official', 'Frameworks', 'CSS + UI'],
    icon: 'https://astro.build/assets/integrations/svelte.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add svelte',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add svelte',
      },
      {
        type: 'yarn',
        command: 'yarn astro add svelte',
      },
    ],
  },
  {
    name: '@astrojs/partytown',
    description:
      'Use Partytown to move scripts into a Web Worker in your Astro project',
    category: ['Official', 'Performance + SEO', 'Analytics'],
    icon: 'https://astro.build/assets/integrations/partytown.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add partytown',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add partytown',
      },
      {
        type: 'yarn',
        command: 'yarn astro add partytown',
      },
    ],
  },
  {
    name: '@astrojs/solid-js',
    description: 'Use Solid.js components within Astro',
    category: ['Official', 'Frameworks', 'CSS + UI'],
    icon: 'https://astro.build/assets/integrations/solid.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add solid',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add solid',
      },
      {
        type: 'yarn',
        command: 'yarn astro add solid',
      },
    ],
  },
  {
    name: '@astrojs/preact',
    description: 'Use Preact components within Astro',
    category: ['Official', 'Frameworks', 'CSS + UI'],
    icon: 'https://astro.build/assets/integrations/preact.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add preact',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add preact',
      },
      {
        type: 'yarn',
        command: 'yarn astro add preact',
      },
    ],
  },
  {
    name: '@astrojs/netlify',
    description: 'Deploy your site to Netlify',
    category: ['Official', 'Adapters'],
    icon: 'https://astro.build/assets/integrations/netlify.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add netlify',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add netlify',
      },
      {
        type: 'yarn',
        command: 'yarn astro add netlify',
      },
    ],
  },
  {
    name: '@astrojs/alpinejs',
    description: 'Use Alpine components within Astro',
    category: ['Official', 'Frameworks', 'CSS + UI', 'Performance + SEO'],
    icon: 'https://astro.build/assets/integrations/alpinejs.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add alpine',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add alpine',
      },
      {
        type: 'yarn',
        command: 'yarn astro add alpine',
      },
    ],
  },
  {
    name: '@astrojs/markdoc',
    description: 'Add support to Markdoc in your Astro site',
    category: ['Official'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add markdoc',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add markdoc',
      },
      {
        type: 'yarn',
        command: 'yarn astro add markdoc',
      },
    ],
  },
  {
    name: 'astro-relative-links',
    description: 'Build Astro with relative links',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-relative-links',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-relative-links',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-relative-links',
      },
    ],
  },
  {
    name: '@analogjs/astro-angular',
    description: 'Use Angular components within Astro',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add @analogjs/astro-angular',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add @analogjs/astro-angular',
      },
      {
        type: 'yarn',
        command: 'yarn astro add @analogjs/astro-angular',
      },
    ],
  },
  {
    name: '@qwikdev/astro',
    description: 'Use Qwik components and Resumability within Astro',
    category: ['Frameworks', 'CSS + UI', 'Performance + SEO'],
    icon: 'https://astro.build/assets/integrations/qwik.svg',
    installation: [
      {
        type: 'npm',
        command: 'npm create @qwikdev/astro',
      },
      {
        type: 'pnpm',
        command: 'pnpm create @qwikdev/astro',
      },
      {
        type: 'yarn',
        command: 'yarn create @qwikdev/astro',
      },
      {
        type: 'bun',
        command: 'bun create @qwikdev/astro',
      },
    ],
  },
  {
    name: '@astropub/flow',
    description: 'Use components to control flow in Astro',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @astropub/flow',
      },
    ],
  },
  {
    name: '@astropub/context',
    description: 'Create a shared context across Astro components',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @astropub/context',
      },
    ],
  },
  {
    name: 'astro-html-beautifier',
    description: 'Beautify HTML fileson astro final bundle with js-beautify',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-html-beautifier',
      },
    ],
  },
  {
    name: 'astro-opengraph-images',
    description: 'Generate Open Graph images for your Astro site',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-opengraph-images',
      },
    ],
  },
  {
    name: '@grucloud/bau-astro',
    description: 'Use Bau with Astro',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @grucloud/bau-astro',
      },
    ],
  },
  {
    name: '@astro-aws/adapter',
    description: 'An adapter for deploying an Astro application to AWS Lambda',
    category: ['Frameworks', 'Adapters'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add @astro-aws/adapter',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add @astro-aws/adapter',
      },
      {
        type: 'yarn',
        command: 'yarn astro add @astro-aws/adapter',
      },
    ],
  },
  {
    name: '@igor.dvlpr/astro-post-excerpt',
    description:
      '⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown and MDX files. Astro v2+ collections are supported as well! 💎',
    category: ['Frameworks'],
    icon: 'https://astro.build/assets/integrations/astro-post-excerpt.png',
    installation: [
      {
        type: 'npm',
        command: 'npm i -D "@igor.dvlpr/astro-post-excerpt"',
      },
    ],
  },
  {
    name: 'astro-typst',
    description: 'Use typst with Astro',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-typst',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-typst',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-typst',
      },
    ],
  },
  {
    name: '@astropub/config-to-alias',
    description:
      'Add aliasing support to Astro, JavaScript, TypeScript, and CSS files',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @astropub/config-to-alias',
      },
    ],
  },
  {
    name: '@astropub/worker',
    description: 'Use Web Workers in Astro',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @astropub/worker',
      },
    ],
  },
  {
    name: 'astro-integration-elm',
    description: 'Use Elm components within Astro',
    category: ['Frameworks', 'CSS + UI'],
    icon: 'https://astro.build/assets/integrations/astro-integration-elm.svg',
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-integration-elm',
      },
    ],
  },
  {
    name: 'custom-elements-ssr',
    description: 'Custom Elements renderer for ssr',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npm i custom-elements-ssr @webcomponents/template-shadowroot',
      },
    ],
  },
  {
    name: '@igor.dvlpr/astro-easynav-button',
    description:
      '🧭 Add an easy-to-use navigational button (jump to top/bottom) to your Astro site. 🔼',
    category: ['Frameworks', 'CSS + UI'],
    icon: 'https://astro.build/assets/integrations/@igor.dvlpr/astro-easynav-button.png',
    installation: [
      {
        type: 'npm',
        command: 'npm i "@igor.dvlpr/astro-easynav-button"',
      },
    ],
  },
  {
    name: 'astro-vanjs',
    description: 'Astro integration for VanJS',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'astro add astro-vanjs',
      },
    ],
  },
  {
    name: 'astro-mithril',
    description: 'Use Mithril components within Astro',
    category: ['Frameworks'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-mithril',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-mithril',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-mithril',
      },
    ],
  },
  {
    name: 'astro-loader-github-releases',
    description:
      "Astro loader for loading GitHub releases from a user's commit history or a list of repositories.",
    category: ['Content Loaders'],
    installation: [
      {
        type: 'npm',
        command: 'npm install -D astro-loader-github-releases',
      },
    ],
  },
  {
    name: 'astro-sheet-loader',
    description:
      'This package provides a Google Sheets loader for Astro. It allows you to load and parse publicly viewable Sheets, and use the data in your Astro site.',
    category: ['Content Loaders'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-sheet-loader',
      },
    ],
  },
  {
    name: 'astro-loader-github-prs',
    description:
      'Astro loader for loading GitHub pull requests with a search query.',
    category: ['Content Loaders'],
    installation: [
      {
        type: 'npm',
        command: 'npm install -D astro-loader-github-prs',
      },
    ],
  },
  {
    name: 'dewp',
    description: 'Tools for migrating from WordPress to Astro',
    category: ['Content Loaders'],
    installation: [
      {
        type: 'npm',
        command:
          'npm create astro -- --template delucis/dewp/examples/blog-starter',
      },
      {
        type: 'pnpm',
        command:
          'pnpm create astro --template delucis/dewp/examples/blog-starter',
      },
      {
        type: 'yarn',
        command:
          'yarn create astro --template delucis/dewp/examples/blog-starter',
      },
    ],
  },
  {
    name: 'astro-loader-github-repos',
    description: 'Load GitHub repository data into the Astro content layer',
    category: ['Content Loaders'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-loader-github-repos',
      },
    ],
  },
  {
    name: 'astro-loader',
    description:
      "A package for loading content into Astro's Content Collection API",
    category: ['Content Loaders'],
    installation: [
      {
        type: 'pnpm',
        command: 'pnpm add astro-loader',
      },
    ],
  },
];
