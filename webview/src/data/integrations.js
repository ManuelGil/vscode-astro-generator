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
    category: ['Official', 'Performance + SEO'],
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
    category: ['Frameworks', 'CSS + UI'],
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
    category: ['Frameworks', 'CSS + UI'],
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
    category: ['Frameworks', 'CSS + UI', 'Performance + SEO'],
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
    category: ['Frameworks', 'CSS + UI'],
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
    category: ['Frameworks', 'CSS + UI', 'Performance + SEO'],
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
    category: ['Frameworks', 'Performance + SEO'],
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
    category: ['Frameworks', 'Adapters', 'Performance + SEO'],
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
    category: ['Frameworks', 'Analytics'],
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
    category: ['Frameworks', 'CSS + UI', 'Accessibility'],
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
  {
    name: 'astro-sst',
    description:
      'Adapter that allows Astro to deploy your site to AWS utilizing SST.',
    category: ['Adapters'],
    icon: 'https://astro.build/assets/integrations/sst.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-sst',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-sst',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-sst',
      },
    ],
  },
  {
    name: '@deno/astro-adapter',
    description: 'Deploy your Astro site to a Deno server',
    category: ['Adapters'],
    icon: 'https://astro.build/assets/integrations/deno.svg',
    installation: [
      {
        type: 'npm',
        command: 'npm install @deno/astro-adapter',
      },
    ],
  },
  {
    name: 'astro-aws-amplify',
    description: 'Deploy Astro to AWS Amplify (SSR)',
    category: ['Adapters'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-aws-amplify',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-aws-amplify',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-aws-amplify',
      },
    ],
  },
  {
    name: '@nurodev/astro-bun',
    description:
      "Allows Astro to run your SSR site with the Bun's native API Bun.serve.",
    category: ['Adapters'],
    installation: [
      {
        type: 'bun',
        command: 'bun add @nurodev/astro-bun',
      },
    ],
  },
  {
    name: 'astro-auto-adapter',
    description:
      "Let's you choose between Astro Adapters based off of the ASTRO_ADAPTER_MODE environment variable.",
    category: ['Adapters'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-auto-adapter',
      },
    ],
  },
  {
    name: 'astro-vercel-edge',
    description: 'Deploy your Astro site to Vercel Edge Functions',
    category: ['Adapters'],
    installation: [
      {
        type: 'npm',
        command: 'npm add astro-vercel-edge',
      },
    ],
  },
  {
    name: '@zeabur/astro-adapter',
    description: 'Deploy your site to Zeabur',
    category: ['Adapters'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @zeabur/astro-adapter',
      },
    ],
  },
  {
    name: '@common-web/astro-lambda-edge',
    description:
      'This Adapter allows Astro to deploy your SSR site to Lambda@Edge Lambda target.',
    category: ['Adapters'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @common-web/astro-lambda-edge -D',
      },
      {
        type: 'pnpm',
        command: 'pnpm add @common-web/astro-lambda-edge -D',
      },
      {
        type: 'yarn',
        command: 'yarn add @common-web/astro-lambda-edge -D',
      },
    ],
  },
  {
    name: '@astrojs-aws/adapter',
    description: 'The Astro adapter of AWS Serverless',
    category: ['Adapters'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add @astrojs-aws/adapter',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add @astrojs-aws/adapter',
      },
      {
        type: 'yarn',
        command: 'yarn astro add @astrojs-aws/adapter',
      },
    ],
  },
  {
    name: 'bunny-astro',
    description: 'Astro adapter for Edge Scripting for bunny.net 🐰',
    category: ['Adapters'],
    installation: [
      {
        type: 'npm',
        command: 'npm install bunny-astro',
      },
    ],
  },
  {
    name: '@bluvenit/astro-adapter-azure',
    description: 'Deploy your site to Azure using SWA',
    category: ['Adapters'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @bluvenit/astro-adapter-azure @azure/functions',
      },
    ],
  },
  {
    name: 'astro-screen-recorder',
    description: 'astro dev toolbar button for screen recording',
    category: ['Adapters', 'Dev Toolbar'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-screen-recorder',
      },
    ],
  },
  {
    name: 'astro-icon',
    description:
      'This Astro integration provides a straight-forward `Icon` component for Astro.',
    category: ['CSS + UI', 'Performance + SEO', 'Images + Media'],
    icon: 'https://astro.build/assets/integrations/astro-icon.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-icon',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-icon',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-icon',
      },
    ],
  },
  {
    name: '@astro-community/astro-embed-youtube',
    description: 'Component to easily embed YouTube videos on your Astro site',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm i @astro-community/astro-embed-youtube',
      },
      {
        type: 'pnpm',
        command: 'pnpm add @astro-community/astro-embed-youtube',
      },
      {
        type: 'yarn',
        command: 'yarn add @astro-community/astro-embed-youtube',
      },
    ],
  },
  {
    name: '@astro-community/astro-embed-twitter',
    description: 'Component to easily embed Tweets on your Astro site',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm i @astro-community/astro-embed-twitter',
      },
      {
        type: 'pnpm',
        command: 'pnpm add @astro-community/astro-embed-twitter',
      },
      {
        type: 'yarn',
        command: 'yarn add @astro-community/astro-embed-twitter',
      },
    ],
  },
  {
    name: 'astro-embed',
    description: 'Astro components to easily embed common media formats',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-embed',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-embed',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-embed',
      },
    ],
  },
  {
    name: '@astro-community/astro-embed-vimeo',
    description: 'Component to easily embed Vimeo videos on your Astro site',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm i @astro-community/astro-embed-vimeo',
      },
      {
        type: 'pnpm',
        command: 'pnpm add @astro-community/astro-embed-vimeo',
      },
      {
        type: 'yarn',
        command: 'yarn add @astro-community/astro-embed-vimeo',
      },
    ],
  },
  {
    name: '@astro-community/astro-embed-link-preview',
    description:
      "Component to embed a website's OpenGraph image and metadata on your Astro site",
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm i @astro-community/astro-embed-link-preview',
      },
      {
        type: 'pnpm',
        command: 'pnpm add @astro-community/astro-embed-link-preview',
      },
      {
        type: 'yarn',
        command: 'yarn add @astro-community/astro-embed-link-preview',
      },
    ],
  },
  {
    name: '@playform/compress',
    description: '🗜️ Compress —',
    category: ['CSS + UI', 'Performance + SEO', 'Images + Media'],
    icon: 'https://astro.build/assets/integrations/@playform/compress.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add @playform/compress',
      },
      {
        type: 'pnpm',
        command: 'pnpx astro add @playform/compress',
      },
      {
        type: 'yarn',
        command: 'yarn astro add @playform/compress',
      },
    ],
  },
  {
    name: 'astro-pagefind',
    description: 'Astro integration for Pagefind static site search',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-pagefind',
      },
    ],
  },
  {
    name: 'lucide-astro',
    description: 'Get your Lucide icons right into your Astro project',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install lucide-astro',
      },
      {
        type: 'pnpm',
        command: 'pnpm add lucide-astro',
      },
      {
        type: 'yarn',
        command: 'yarn add lucide-astro',
      },
    ],
  },
  {
    name: '@astro-community/astro-embed-baseline-status',
    description:
      'Component to easily embed the Baseline status of a web feature on your Astro site',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm i @astro-community/astro-embed-baseline-status',
      },
      {
        type: 'pnpm',
        command: 'pnpm add @astro-community/astro-embed-baseline-status',
      },
      {
        type: 'yarn',
        command: 'yarn add @astro-community/astro-embed-baseline-status',
      },
    ],
  },
  {
    name: '@playform/inline',
    description: '🦔 Inline —',
    category: ['CSS + UI', 'Performance + SEO'],
    icon: 'https://astro.build/assets/integrations/@playform/inline.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add @playform/inline',
      },
      {
        type: 'pnpm',
        command: 'pnpx astro add @playform/inline',
      },
      {
        type: 'yarn',
        command: 'yarn astro add @playform/inline',
      },
    ],
  },
  {
    name: '@astro-community/astro-embed-bluesky',
    description:
      'Component to embed a fully-styled Bluesky post with no client-side JavaScript in your Astro site',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm i @astro-community/astro-embed-bluesky',
      },
      {
        type: 'pnpm',
        command: 'pnpm add @astro-community/astro-embed-bluesky',
      },
      {
        type: 'yarn',
        command: 'yarn add @astro-community/astro-embed-bluesky',
      },
    ],
  },
  {
    name: 'astro-breadcrumbs',
    description: 'A breadcrumb component for Astro',
    category: ['CSS + UI', 'Accessibility'],
    icon: 'https://astro.build/assets/integrations/astro-breadcrumbs.svg',
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-breadcrumbs',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-breadcrumbs',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-breadcrumbs',
      },
    ],
  },
  {
    name: 'astro-feather-icons',
    description:
      'Feather icons for Astro (based on svelte-feather-icons by dylanblokhuis)',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-feather-icons',
      },
      {
        type: 'pnpm',
        command: 'pnpm i astro-feather-icons',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-feather-icons',
      },
    ],
  },
  {
    name: 'astro-webmanifest',
    description:
      'Generate a webmanifest and icons for Astro to make progressive web apps',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-webmanifest',
      },
      {
        type: 'pnpm',
        command: 'pnpx astro add astro-webmanifest',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-webmanifest',
      },
    ],
  },
  {
    name: '@swup/astro',
    description: 'Smooth page transitions, smart preloading and more in Astro',
    category: ['CSS + UI', 'Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @swup/astro',
      },
    ],
  },
  {
    name: '@astropub/md',
    description: 'Render any Markdown content in Astro',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @astropub/md',
      },
    ],
  },
  {
    name: 'simple-icons-astro',
    description: 'Get your Simple icons right into your Astro project',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install simple-icons-astro',
      },
      {
        type: 'yarn',
        command: 'yarn add simple-icons-astro',
      },
    ],
  },
  {
    name: 'astro-loading-indicator',
    description:
      'Display a progress bar between page navigations when using View Transitions',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-loading-indicator',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-loading-indicator',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-loading-indicator',
      },
    ],
  },
  {
    name: 'astro-devtool-breakpoints',
    description:
      'A Dev Toolbar App to display the size of the current viewport—as a tailwind class.',
    category: ['CSS + UI', 'Dev Toolbar'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-devtool-breakpoints',
      },
    ],
  },
  {
    name: 'astro-iconify',
    description:
      'Fork of astro-icon. Lets you easily use the up to date iconify service as a straight forward astro icon component.',
    category: ['CSS + UI', 'Performance + SEO', 'Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-iconify',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-iconify',
      },
    ],
  },
  {
    name: 'astro-themes',
    description: 'Easy dark mode for Astro websites',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-themes',
      },
    ],
  },
  {
    name: 'astro-heroicons',
    description: 'Heroicons as Astro components',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-heroicons',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-heroicons',
      },
    ],
  },
  {
    name: 'astro-social-share',
    description: 'Social share buttons for Astro',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-social-share',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-social-share',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-social-share',
      },
    ],
  },
  {
    name: 'phosphor-astro',
    description: 'Phosphor icons as Astro components',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install phosphor-astro',
      },
      {
        type: 'yarn',
        command: 'yarn add phosphor-astro',
      },
    ],
  },
  {
    name: 'astro-bootstrap',
    description: 'Bootstrap 5 components crafted for use with Astro',
    category: ['CSS + UI'],
    icon: 'https://astro.build/assets/integrations/astro-bootstrap.png',
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-bootstrap',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-bootstrap',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-bootstrap',
      },
    ],
  },
  {
    name: '@astropub/code',
    description:
      'A lightweight Astro component for syntax highlighting and rendering beautifully formatted code blocks.',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @astropub/code',
      },
    ],
  },
  {
    name: 'astro-particles',
    description:
      'Official tsParticles Astro Component - Easily create highly customizable particle, confetti and fireworks animations and use them as animated backgrounds for your website.',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-particles',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-particles',
      },
    ],
  },
  {
    name: '@xtreat/astro-iconify',
    description:
      'A type-safe simple and easy-to-modify Iconify Icon component for Astro',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @xtreat/astro-iconify',
      },
      {
        type: 'yarn',
        command: 'yarn add @xtreat/astro-iconify',
      },
      {
        type: 'pnpm',
        command: 'pnpm install @xtreat/astro-iconify',
      },
      {
        type: 'bun',
        command: 'bun install @xtreat/astro-iconify',
      },
      {
        type: 'deno',
        command: 'deno install npm:@xtreat/astro-iconify',
      },
    ],
  },
  {
    name: '@astro-reactive/form',
    description: 'The Reactive Form component for Astro 🔥',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @astro-reactive/form',
      },
    ],
  },
  {
    name: '@grucloud/bau-astro',
    description: 'Use Bau within Astro',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @grucloud/bau-astro',
      },
    ],
  },
  {
    name: 'astro-critters-slim',
    description: '🦔 Minimal Critters integration for astro.js',
    category: ['CSS + UI', 'Performance + SEO'],
    icon: 'https://astro.build/assets/integrations/astro-critters-slim.webp',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-critters-slim',
      },
    ],
  },
  {
    name: '@appzic/astro-reset-css',
    description: 'Astro Component for CSS reset like tailwind base',
    category: ['CSS + UI'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @appzic/astro-reset-css',
      },
    ],
  },
  {
    name: 'astro-mdx-code-blocks',
    description:
      'An easy way to customize the syntax highlighting of MDX fenced code blocks by providing your own Astro component.',
    category: ['CSS + UI'],
    icon: 'https://astro.build/assets/integrations/astro-mdx-code-blocks.png',
    installation: [
      {
        type: 'npm',
        command:
          'npm install -D astro-mdx-code-blocks astro-auto-import @astrojs/mdx',
      },
    ],
  },
  {
    name: 'astro-seo',
    description: 'Makes it easy to add SEO relevant tags to your Astro app.',
    category: ['Performance + SEO'],
    icon: 'https://astro.build/assets/integrations/astro-seo.png',
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-seo',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-seo',
      },
    ],
  },
  {
    name: 'astro-compressor',
    description: 'A gzip and brotli compressor for Astro',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-compressor',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-compressor',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-compressor',
      },
    ],
  },
  {
    name: 'astro-robots-txt',
    description: 'Generate a robots.txt for Astro',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-robots-txt',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-robots-txt',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-robots-txt',
      },
    ],
  },
  {
    name: '@astrolib/seo',
    description: 'Managing your SEO easier in Astro projects',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @astrolib/seo',
      },
      {
        type: 'yarn',
        command: 'yarn add @astrolib/seo',
      },
    ],
  },
  {
    name: 'astro-font',
    description:
      'Automatically optimize your custom fonts, local fonts, fonts over any CDN, and Google fonts for performance.',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-font',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-font',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-font',
      },
    ],
  },
  {
    name: 'astro-og-canvas',
    description: 'Generate OpenGraph images for your Astro site',
    category: ['Performance + SEO', 'Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-og-canvas',
      },
    ],
  },
  {
    name: 'astro-i18next',
    description:
      'An astro integration of i18next + some utility components to help you translate your astro websites!',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-i18next',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-i18next',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-i18next',
      },
    ],
  },
  {
    name: 'astro-imagetools',
    description: 'Image Optimization tools for the Astro JS framework',
    category: ['Performance + SEO', 'Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-imagetools',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-imagetools',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-imagetools',
      },
    ],
  },
  {
    name: '@inlang/paraglide-astro',
    description:
      "A fully type-safe i18n library specifically designed for partial hydration patterns like Astro's islands.",
    category: ['Performance + SEO', 'Accessibility'],
    icon: 'https://astro.build/assets/integrations/@inlang/paraglide-astro.png',
    installation: [
      {
        type: 'npm',
        command: 'npm install @inlang/paraglide-astro',
      },
    ],
  },
  {
    name: 'astrojs-service-worker',
    description:
      'An Astro integration that generates a Service Worker. Powered by Workbox.',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astrojs-service-worker',
      },
      {
        type: 'yarn',
        command: 'yarn add astrojs-service-worker',
      },
    ],
  },
  {
    name: 'astro-google-fonts-optimizer',
    description:
      'An Astro integration to optimize the Google Fonts loading performance',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-google-fonts-optimizer',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-google-fonts-optimizer',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-google-fonts-optimizer',
      },
    ],
  },
  {
    name: '@playform/format',
    description: '🗻 Format —',
    category: ['Performance + SEO'],
    icon: 'https://astro.build/assets/integrations/@playform/format.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add @playform/format',
      },
      {
        type: 'pnpm',
        command: 'pnpx astro add @playform/format',
      },
      {
        type: 'yarn',
        command: 'yarn astro add @playform/format',
      },
    ],
  },
  {
    name: 'astro-i18n',
    description: 'A TypeScript-first internationalization library for Astro.',
    category: ['Performance + SEO', 'Accessibility'],
    icon: 'https://astro.build/assets/integrations/astro-i18n.svg',
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-i18n',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-i18n',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-i18n',
      },
    ],
  },
  {
    name: ' astro-page-insight',
    description:
      'Shows everything to improve from Lighthouse results directly on the page.',
    category: ['Performance + SEO', 'Accessibility', 'Dev Toolbar'],
    icon: 'https://astro.build/assets/integrations/astro-page-insight.png',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-page-insight',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-page-insight',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-page-insight',
      },
    ],
  },
  {
    name: 'astro-rename',
    description:
      'astro-rename is an Astro integration that brings postcss-rename functionality to your Astro project without the need for configuration.',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install --save-dev astro-rename',
      },
      {
        type: 'yarn',
        command: 'yarn add --dev astro-rename',
      },
    ],
  },
  {
    name: 'astro-sitemap',
    description: 'Generate a sitemap for Astro with more control',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-sitemap',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-sitemap',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-sitemap',
      },
    ],
  },
  {
    name: '@itsmatteomanf/astro-pagefind',
    description:
      'Performs the indexing operation for the Pagefind search engine',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add @itsmatteomanf/astro-pagefind',
      },
      {
        type: 'yarn',
        command: 'yarn astro add @itsmatteomanf/astro-pagefind',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add @itsmatteomanf/astro-pagefind',
      },
    ],
  },
  {
    name: 'astro-min',
    description:
      'Extremely ⚡ fast and smart 🟠 HTML 🟡 JS 🔵 CSS 🟣 SVG minification for Astro 🚀 based on Rust 🦀',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm run astro add astro-min',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-min',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-min',
      },
    ],
  },
  {
    name: 'astro-link-card',
    description:
      'Astro integration to automatically convert bare links into link cards.',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-link-card',
      },
    ],
  },
  {
    name: 'astro-seo-metadata',
    description:
      'Bare minimum SEO meta tags to make most social networks and Google engine happy.',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'pnpm',
        command: 'pnpm i astro-seo-metadata',
      },
    ],
  },
  {
    name: 'astro-redirect-from',
    description:
      "🎯 Set redirect urls in your frontmatter within your Astro site's Markdown files. Mimics the behavior of jekyll-redirect-from.",
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-redirect-from',
      },
    ],
  },
  {
    name: 'astro-helmet',
    description: 'A document head manager for astro.',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-helmet',
      },
    ],
  },
  {
    name: 'og-images-generator',
    description:
      'Generate OG images from a static folder and / or a middleware. Extract metadata from HTML pages. No headless browser involved. Comes as a CLI, API or plugins.',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install og-images-generator',
      },
    ],
  },
  {
    name: 'astro-remove-whitespace',
    description:
      'Astro integration that removes whitespace between HTML tags in build output',
    category: ['Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-remove-whitespace',
      },
    ],
  },
  {
    name: 'astro-analytics',
    description:
      'Provides Analytics snippets injection for popular web analytics tools',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-analytics',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-analytics',
      },
      {
        type: 'pnpm',
        command: 'pnpm install astro-analytics',
      },
    ],
  },
  {
    name: 'astro-matomo',
    description: 'Matomo integration for Astro',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-matomo',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-matomo',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-matomo',
      },
    ],
  },
  {
    name: 'astro-google-analytics',
    description: 'Provides Google Analytics 4 snippet injection.',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-google-analytics',
      },
    ],
  },
  {
    name: '@digi4care/astro-google-tagmanager',
    description:
      'A seamless integration for injecting Google Tag Manager snippets into Astro projects, supporting popular web analytics tools.',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @digi4care/astro-google-tagmanager',
      },
      {
        type: 'yarn',
        command: 'yarn add @digi4care/astro-google-tagmanager',
      },
    ],
  },
  {
    name: 'astro-fathom',
    description: 'Fathom Analytics tracking for your Astro site.',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-fathom',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-fathom',
      },
      {
        type: 'pnpm',
        command: 'pnpm install astro-fathom',
      },
    ],
  },
  {
    name: '@jop-software/astro-matomo',
    description: 'Matomo integration for Astro',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add @jop-software/astro-matomo',
      },
      {
        type: 'pnpm',
        command: 'pnpm dlx astro add @jop-software/astro-matomo',
      },
    ],
  },
  {
    name: '@codecov/astro-plugin',
    description: 'Official Codecov Astro Plugin',
    category: ['Analytics', 'Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add @codecov/astro-plugin',
      },
      {
        type: 'yarn',
        command: 'yarn astro add @codecov/astro-plugin',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add @codecov/astro-plugin',
      },
    ],
  },
  {
    name: '@yeskunall/astro-umami',
    description: 'Add Umami Analytics to your Astro website',
    category: ['Analytics'],
    installation: [
      {
        type: 'pnpm',
        command: 'pnpm astro add @yeskunall/astro-umami',
      },
    ],
  },
  {
    name: 'astro-umami-analytics',
    description: 'Astro component for easy integration of Umami analytics',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-umami-analytics',
      },
    ],
  },
  {
    name: 'astro-hotjar',
    description: 'Hotjar component for Astro',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-hotjar',
      },
    ],
  },
  {
    name: 'astro-yandex-metrika',
    description: 'Yandex Metrika component for Astro',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-yandex-metrika',
      },
    ],
  },
  {
    name: 'astro-beam',
    description: 'Beam component for Astro',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-beam',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-beam',
      },
      {
        type: 'pnpm',
        command: 'pnpm install astro-beam',
      },
      {
        type: 'bun',
        command: 'bun install astro-beam',
      },
    ],
  },
  {
    name: 'astro-microsoft-clarity',
    description: 'Provides microsoft clarity snippet injection.',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-microsoft-clarity',
      },
      {
        type: 'pnpm',
        command: 'pnpm install astro-microsoft-clarity',
      },
    ],
  },
  {
    name: '@digi4care/astro-google-analytics',
    description:
      'A seamless integration for injecting Google Analytics snippets into Astro projects, supporting popular web analytics tools.',
    category: ['Analytics'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @digi4care/astro-google-analytics',
      },
      {
        type: 'yarn',
        command: 'yarn add @digi4care/astro-google-analytics',
      },
    ],
  },
  {
    name: 'accessible-astro-components',
    description:
      'A set of Accessible, easy to use, Front-end UI Components for Astro.',
    category: ['Accessibility'],
    icon: 'https://astro.build/assets/integrations/accessible-astro-components.png',
    installation: [
      {
        type: 'npm',
        command: 'npm install accessible-astro-components --save-dev',
      },
    ],
  },
  {
    name: 'astro-carousel',
    description:
      'An accessible carousel component for Astro 🚀 that works by using browser navigation.',
    category: ['Accessibility', 'Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-carousel',
      },
    ],
  },
  {
    name: '@philnash/astro-pagination',
    description:
      'A flexible, accessible pagination component for displaying links to next, previous, first, last and a window of pages in your Astro site.',
    category: ['Accessibility'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @philnash/astro-pagination',
      },
    ],
  },
  {
    name: 'astro-nanointl',
    description:
      'Tiny set of tools to implement internationalization for Astro',
    category: ['Accessibility', 'Performance + SEO'],
    installation: [
      {
        type: 'npm',
        command: 'npm install -D astro-nanointl',
      },
      {
        type: 'pnpm',
        command: 'pnpm add -D astro-nanointl',
      },
    ],
  },
  {
    name: 'astro-emoji',
    description: 'An accessible emoji component for Astro applications',
    category: ['Accessibility'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-emoji',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-emoji',
      },
    ],
  },
  {
    name: 'nottheme',
    description: 'Accessible theme switcher for Astro',
    category: ['Accessibility'],
    installation: [
      {
        type: 'npm',
        command: 'npm install nottheme',
      },
    ],
  },
  {
    name: '@sarissa/pagination',
    description:
      'Add page number buttons for pagination. Automaticly add and disable numbers as current page number.',
    category: ['Accessibility'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @sarissa/pagination',
      },
    ],
  },
  {
    name: 'astro-remark-eleventy-image',
    description:
      'Remark plugin for Astro that automatically optimizes images referenced in markdown files.',
    category: ['Accessibility', 'Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-remark-eleventy-image',
      },
    ],
  },
  {
    name: 'astro-middleware-cn',
    description: 'Astro middleware for chinese md page.',
    category: ['Accessibility'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-middleware-cn',
      },
    ],
  },
  {
    name: '@unpic/astro',
    description:
      'A high-performance, responsive image service and component library for Astro',
    category: ['Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @unpic/astro',
      },
    ],
  },
  {
    name: 'astro-better-image-service',
    description:
      "Astro integration for image compression and conversion, superseding Astro's default image service.",
    category: ['Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-better-image-service',
      },
      {
        type: 'bun',
        command: 'bun astro add astro-better-image-service',
      },
    ],
  },
  {
    name: '@julian_cataldo/astro-lightbox',
    description: 'Simple lightbox component.',
    category: ['Images + Media'],
    installation: [
      {
        type: 'pnpm',
        command: 'pnpm i @julian_cataldo/astro-lightbox',
      },
    ],
  },
  {
    name: 'astro-preload',
    description:
      'Download images at build time! Supports Iconify icons and arbitrary images.',
    category: ['Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-preload',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-preload',
      },
    ],
  },
  {
    name: '@jcayzac/astro-image-service-ng',
    description:
      "A drop-in replacement for Astro's default image service, with art direction support.",
    category: ['Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npx add @jcayzac/astro-image-service-ng sharp',
      },
      {
        type: 'yarn',
        command: 'yarn add @jcayzac/astro-image-service-ng sharp',
      },
      {
        type: 'pnpm',
        command: 'pnpm add @jcayzac/astro-image-service-ng sharp',
      },
      {
        type: 'bun',
        command: 'bunx add @jcayzac/astro-image-service-ng sharp',
      },
      {
        type: 'deno',
        command: 'deno add npm:@jcayzac/astro-image-service-ng npm:sharp',
      },
    ],
  },
  {
    name: 'astro-eleventy-img',
    description: 'Astro + eleventy-img',
    category: ['Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-eleventy-img',
      },
    ],
  },
  {
    name: 'astro-geo-map',
    description:
      'Embed an interactive map in your webpage. Using Leaflet.js under the hood.',
    category: ['Images + Media'],
    installation: [
      {
        type: 'pnpm',
        command: 'pnpm i astro-geo-map',
      },
    ],
  },
  {
    name: 'astro-simple-art-direction',
    description: 'A simple art direction for Astro.',
    category: ['Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-simple-art-direction',
      },
    ],
  },
  {
    name: '@cyberkoalastudios/og-image-generator',
    description:
      'Astro integration to generate Social Images from Astro Content Collections with custom blurry background that can be loaded via frontmatter.',
    category: ['Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @cyberkoalastudios/og-image-generator',
      },
    ],
  },
  {
    name: '@urami/astro',
    description: 'Astro integration for automatic image optimization',
    category: ['Images + Media'],
    icon: 'https://astro.build/assets/integrations/@urami/astro.svg',
    installation: [
      {
        type: 'npm',
        command: 'npm install @urami/astro',
      },
    ],
  },
  {
    name: 'astro-cloudinary-image',
    description: 'Adds a Cloudinary image component to Astro',
    category: ['Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-cloudinary-image',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-cloudinary-image',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-cloudinary-image',
      },
    ],
  },
  {
    name: '@otterstack/sanity-img-astro',
    description:
      'An Astro component for rendering a responsive <img> element for an image fetched from Sanity',
    category: ['Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @otterstack/sanity-img-astro',
      },
    ],
  },
  {
    name: 'astro-sprite',
    description:
      'Sprite generation (png, webp, avif...) dedicated to Astro framework',
    category: ['Images + Media'],
    icon: 'https://astro.build/assets/integrations/astro-sprite.png',
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-sprite',
      },
    ],
  },
  {
    name: 'astro-sanity-assets',
    description: 'Download Sanity File Assets to your Astro site',
    category: ['Images + Media'],
    icon: 'https://astro.build/assets/integrations/astro-sanity-assets.png',
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-sanity-assets',
      },
    ],
  },
  {
    name: 'responsive-image-astro',
    description:
      "Experimental package - Please refer to source code if you don't feel comfortable using it.",
    category: ['Images + Media'],
    installation: [
      {
        type: 'npm',
        command: 'npm install responsive-image-astro sharp',
      },
      {
        type: 'yarn',
        command: 'yarn add responsive-image-astro sharp',
      },
      {
        type: 'pnpm',
        command: 'pnpm add responsive-image-astro sharp',
      },
    ],
  },
  {
    name: 'astro-vtbot',
    description: "The 👜 Bag of Tricks ✨ for Astro's View Transitions",
    category: ['Dev Toolbar'],
    icon: 'https://astro.build/assets/integrations/bag-of-tricks.svg',
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-vtbot',
      },
    ],
  },
  {
    name: '@storyblok/astro',
    description: 'Official Astro integration for the Storyblok Headless CMS',
    category: ['Dev Toolbar'],
    icon: 'https://astro.build/assets/integrations/storyblok.svg',
    installation: [
      {
        type: 'npm',
        command: 'npm install @storyblok/astro',
      },
      {
        type: 'yarn',
        command: 'yarn add @storyblok/astro',
      },
    ],
  },
  {
    name: 'astro-meta-tags',
    description:
      'A Dev Toolbar extension to debug meta tags in your Astro website',
    category: ['Dev Toolbar'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-meta-tags',
      },
    ],
  },
  {
    name: '@spotlightjs/astro',
    description: 'Add spotlight to your Astro toolbar, for better debugging.',
    category: ['Dev Toolbar'],
    icon: 'https://astro.build/assets/integrations/spotlightjs.svg',
    installation: [
      {
        type: 'npm',
        command: 'npx astro add @sentry/astro @spotlightjs/astro',
      },
    ],
  },
  {
    name: 'astro-tailwind-config-viewer',
    description:
      'Explore your Tailwind config visually directly in your browser while developing.',
    category: ['Dev Toolbar'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-tailwind-config-viewer',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-tailwind-config-viewer',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-tailwind-config-viewer',
      },
    ],
  },
  {
    name: '@grantcodes/footprint-astro',
    description:
      'An Astro integration to show your websites CO2 output in the dev toolbar',
    category: ['Dev Toolbar'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @grantcodes/footprint-astro --save-dev',
      },
    ],
  },
  {
    name: '@binz/visor',
    description: 'Full-coverage <head> gear for your Astro app.',
    category: ['Dev Toolbar', 'Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @binz/visor sharp sharp-ico',
      },
      {
        type: 'yarn',
        command: 'yarn add @binz/visor sharp sharp-ico',
      },
      {
        type: 'pnpm',
        command: 'pnpm add @binz/visor sharp sharp-ico',
      },
    ],
  },
  {
    name: 'astro-content-devtools',
    description:
      'Browse Astro Content Collections, schemas and entry files in your browser',
    category: ['Dev Toolbar'],
    installation: [
      {
        type: 'pnpm',
        command:
          'pnpm add -D astro-content-devtools @astrojs/solid-js solid-js',
      },
    ],
  },
  {
    name: 'astro-integration-kit',
    description:
      'A package that contains utilities to help you build Astro integrations.',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-integration-kit',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-integration-kit',
      },
      {
        type: 'pnpm',
        command: 'pnpm add astro-integration-kit',
      },
    ],
  },
  {
    name: 'astro-auto-import',
    description: 'Auto-import components in Astro projects',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-auto-import',
      },
    ],
  },
  {
    name: '@inox-tools/request-state',
    description: 'Shared request state between server and client',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @inox-tools/request-state',
      },
    ],
  },
  {
    name: '@inox-tools/request-nanostores',
    description:
      'Make your Nanostores concurrent safe and shared from server to client',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @inox-tools/request-nanostores',
      },
    ],
  },
  {
    name: '@lorenzo_lewis/starlight-utils',
    description: 'Utilities to use with your 🌟 Starlight site.',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @lorenzo_lewis/starlight-utils',
      },
      {
        type: 'yarn',
        command: 'yarn add @lorenzo_lewis/starlight-utils',
      },
      {
        type: 'pnpm',
        command: 'pnpm add @lorenzo_lewis/starlight-utils',
      },
    ],
  },
  {
    name: '@inox-tools/modular-station',
    description:
      'Simplifying Astro integrations with a flexible docking system.',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @inox-tools/modular-station',
      },
    ],
  },
  {
    name: 'astro-assert',
    description: 'Proper Assertions for Astro Endpoints',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-assert',
      },
      {
        type: 'yarn',
        command: 'yarn add astro-assert',
      },
      {
        type: 'pnpm',
        command: 'pnpm install astro-assert',
      },
      {
        type: 'bun',
        command: 'bun install astro-assert',
      },
    ],
  },
  {
    name: '@inox-tools/astro-tests',
    description:
      "Utilities for testing your own Astro integrations and libraries based on Astro's own testing tools",
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @inox-tools/astro-tests',
      },
    ],
  },
  {
    name: '@inox-tools/content-utils',
    description:
      'Utilities to work with content collections on an Astro project from an integration or library.',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @inox-tools/content-utils',
      },
    ],
  },
  {
    name: '@inox-tools/runtime-logger',
    description:
      'Expose Astro Integration Logger at runtime for consistent output',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @inox-tools/runtime-logger',
      },
    ],
  },
  {
    name: 'astro-layers',
    description:
      'Multi-layer file overrides from local directory, git or npm package. Works similarly to Nuxt Layers.',
    category: ['Utilities'],
    installation: [
      {
        type: 'pnpm',
        command: 'pnpm install astro-layers',
      },
    ],
  },
  {
    name: 'astro-collection-search',
    description: 'Collection search for Astro using minisearch',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-collection-search',
      },
    ],
  },
  {
    name: 'astro-globals',
    description: 'Stores data in a global virtual module',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-globals',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-globals',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-globals',
      },
    ],
  },
  {
    name: '@inox-tools/star-warp',
    description: 'Warp-drive search for Astro sites using Pagefind',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @inox-tools/star-warp',
      },
    ],
  },
  {
    name: 'astro-mail-obfuscation',
    description:
      'Protect email addresses, phone numbers and other sensitive data from bots scraping the source code of your Astro app.',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-mail-obfuscation',
      },
    ],
  },
  {
    name: '@inox-tools/portal-gun',
    description:
      'Transport HTML elements through your page during rendering using Portals.',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @inox-tools/portal-gun',
      },
    ],
  },
  {
    name: '@inox-tools/cut-short',
    description:
      'Immediately halt request processing and return custom responses effortlessly.',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install @inox-tools/cut-short',
      },
    ],
  },
  {
    name: 'astro-typed-ids',
    description:
      'An Astro integration to get typed ids for Content Layer entries, matching Astro 4 behavior.',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npx astro add astro-typed-ids',
      },
      {
        type: 'yarn',
        command: 'yarn astro add astro-typed-ids',
      },
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-typed-ids',
      },
    ],
  },
  {
    name: 'astro-sidecar',
    description:
      'Watch and execute TypeScript processes alongside your Astro development server.',
    category: ['Utilities'],
    installation: [
      {
        type: 'pnpm',
        command: 'pnpm astro add astro-sidecar',
      },
    ],
  },
  {
    name: 'astro-custom-embeds',
    description:
      'Astro integration to easily add your own embeds (that replace matching URLs in mdx files)',
    category: ['Utilities'],
    installation: [
      {
        type: 'npm',
        command: 'npm install astro-custom-embeds',
      },
    ],
  },
];
