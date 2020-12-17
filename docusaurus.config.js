module.exports = {
  title: 'Puth',
  tagline: 'Puth is a nice browser testing framework with focus on stability, performance and extensive feedback.',
  url: 'https://puth.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SEUH',
  projectName: 'puth-docs',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    sidebarCollapsible: false,
    navbar: {
      title: 'Puth',
      logo: {
        alt: 'Puth Logo',
        src: 'img/puth-logo-white.png',
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
          docId: 'client-api',
          label: 'Api',
          position: 'left',
        },
        {
          href: 'https://github.com/SEUH/puth',
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
              to: 'docs/server-api',
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
          editUrl: 'https://github.com/SEUH/puth-docs/edit/master/docs/',
        },
        api: {
          path: 'server-api',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SEUH/puth-docs/edit/master/docs/',
        },
        plugins: {
          path: 'plugins',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SEUH/puth-docs/edit/master/docs/',
        },
        clients: {
          path: 'clients',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SEUH/puth-docs/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
