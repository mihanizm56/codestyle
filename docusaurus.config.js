const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  title: 'Codestyle',
  tagline: 'Документация по написанию проектов',
  url: 'https://mihanizm56.github.io',
  baseUrl: '/codestyle/',
  // baseUrl: '/suppliers-portal-eu/ui/codestyle/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'mihanizm56',
  projectName: 'Codestyle',
  themeConfig: {
    theme: require('prism-react-renderer/themes/github'),
    hideableSidebar: true,
    navbar: {
      logo: {
        alt: 'Codestyle Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          label: 'Документация',
          position: 'left',
          docId: 'overview',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/mihanizm56/codestyle',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.config.js'),
          editUrl: 'https://github.com/mihanizm56/codestyle/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
