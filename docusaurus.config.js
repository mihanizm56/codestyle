const dotenv = require('dotenv');
dotenv.config();

const algoliaParams = {
  apiKey: process.env.ALGOLIA_API_KEY || '',
  indexName: process.env.ALGOLIA_INDEX_NAME || '',
  contextualSearch: true,
  inputSelector:'.DocSearch',
  searchParameters: {
    facetFilters: [
      `type:${process.env.ALGOLIA_FACET_FILTERS_TYPE || ''}`, 
      `version:${process.env.ALGOLIA_FACET_FILTERS_VERSION || ''}`, 
      `language:${process.env.ALGOLIA_FACET_FILTERS_LANGUAGE || ''}`, 
      `docusaurus_tag:${process.env.ALGOLIA_FACET_FILTERS_DOCUSAURUS_TAG || ''}`
    ]
  },
}

module.exports = {
  title: 'Codestyle',
  tagline: 'Документация по написанию проектов',
  url: 'https://mihanizm56.github.io',
  baseUrl: '/codestyle/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/like.svg',
  organizationName: 'mihanizm56',
  projectName: 'Codestyle',
  themeConfig: {
    theme: require('prism-react-renderer/themes/github'),
    hideableSidebar: true,
    // algolia: algoliaParams,
    navbar: {
      logo: {
        alt: 'Codestyle Logo',
        src: 'img/like.svg',
      },
      items: [
        {
          type: 'doc',
          label: 'Документация',
          position: 'left',
          docId: 'overview',
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
        excludeNextVersionDocs: true,
      },
    ],
  ],
};
