---
title: Конфигурационные файлы
---


```
├── .husky/ – Папка с настройками husky
├── utils/ – Вспомогательные скрипты 
├── docs/ – Документация проекта
├── deploy/ – Деплой конфигурация проекта
├── .dockerignore – настройки игнора импортов докер образа 
├── .editorconfig – настройки editorconfig
├── .eslintignore – настройки игнора eslint
├── .gitignore – настройки игнора git
├── .gitlab-ci.yml – настройки gitlab
├── .stylelintignore – настройки игнора stylelint
├── tsconfig.json – настройки typescript
├── config
│   ├── editorconfig – Доп настройки editorconfig
│   ├── git/ – Настройки commitizen+commitlint
│   ├── jest/ – Настройки jest
│   ├── prepare-app-scripts/ – Скрипты предустановки (npm run setup)
│   ├── sdk-api/ – Настройки работы с sdk-api (пока во freeze)
│   ├── test-certs/ – Тестовые сертификаты https
│   ├── ts-externals/tsconfig.paths.json – Доп настройки typescript
│   ├── config.json – Деплой манифест проекта
│   ├── webpack – Настройки webpack
|   |   ├── platform/development/webpack-dev.config.js – Настройки webpack для локального окружения при запуске в режиме совместимости с каркасом
|   |   ├── platform/production/webpack-dev.config.js – Настройки webpack для продакшен окружения
│   │   └── rewired/config-overrides.js – Настройки webpack для локального окружения при запуске в режиме локальной разработки (CRA) 
└── ...
```
