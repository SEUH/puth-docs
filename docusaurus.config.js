module.exports = {
  title: 'Puth',
  tagline: 'Puth is a nice browser testing framework with focus on stability, performance and extensive feedback.',
  url: 'https://seuh.github.io/',
  baseUrl: '/puth-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SEUH',
  projectName: 'puth-docs',
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Puth',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'javascript',
          label: 'Clients',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'plugins',
          label: 'Plugins',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'api',
          label: 'Api',
          position: 'left',
        },
        {
          href: 'https://github.com/puth/core',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Getting started',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Design principles',
              to: 'docs/design-principles',
            },
            {
              label: 'Installation',
              to: 'docs/installation',
            },
            {
              label: 'Write your own client',
              to: 'docs/write-your-own-client',
            },
          ],
        },
        {
          title: 'Clients',
          items: [
            {
              label: 'Javascript',
              to: 'docs/javascript',
            },
          ],
        },
        {
          title: 'Plugins',
          items: [
            {
              label: 'Plugins',
              to: 'docs/plugins',
            },
            {
              label: 'Create your own Plugin',
              to: 'docs/write-your-own-plugin',
            },
          ],
        },
        {
          title: 'Api',
          items: [
            {
              label: 'Puths Api',
              to: 'docs/api',
            },
            {
              label: 'CLI',
              to: 'docs/cli',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} puth.dev`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/puth/website/edit/master/website/',
        },
        api: {
          path: 'api',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/puth/website/edit/master/website/',
        },
        plugins: {
          path: 'plugins',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/puth/website/edit/master/website/',
        },
        clients: {
          path: 'clients',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/puth/website/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
