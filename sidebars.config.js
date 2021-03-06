module.exports = {
  someSidebar: [
    {
      type: 'doc',
      id: 'overview'
    },
    {
      type: 'doc',
      id: 'javascript'
    },
    {
      type: 'category',
      label: 'Работа с Git',
      items: [
        'git/branches-names',
        'git/features-hotfixes',
        'git/releases-tags',
      ]
    },
    {
      type: 'category',
      label: 'Файловая структура',
      items: [
        'project-sctructure/scheme',
        'project-sctructure/description'
      ]
    },
    {
      type: 'category',
      label: 'Работа с библиотеками',
      items: [
        'libraries/project-libs',
        'libraries/rules'
      ]
    },
    {
      type: 'category',
      label: 'Typescript',
      items: [
        'typescript/patterns',
        'typescript/naming',
        'typescript/javascript',
        'typescript/react',
        'typescript/redux'
      ]
    },
    {
      type: 'category',
      label: 'React',
      items: [
        'react/hooks',
        'react/patterns',
        'react/forms',
        'react/ui-kit'
      ]
    },
    {
      type: 'category',
      label: 'Redux',
      items: [
        'redux/patterns',
        'redux/naming',
        'redux/types',
        'redux/ducks',
        'redux/mapstate-mapdispatch',
        'redux/redux-core',
        'redux/redux-magic',
        'redux/api',
      ]
    },
    {
      type: 'category',
      label: 'Форматирование',
      items: [
        'formatting/eslint',
        'formatting/stylelint',
        'formatting/autoformatting',
        'formatting/precommit',
      ]
    },
    {
      type: 'category',
      label: 'Boileplate v2',
      items: [
        'boilerplate/install',
        'boilerplate/npm-npx',
        'boilerplate/cli',
        'boilerplate/prepare',
        'boilerplate/configs',
        'boilerplate/proxysetup',
        'boilerplate/mock-server',
        'boilerplate/versions-update',
        'boilerplate/npm-install',
      ]
    },
  ]
};

