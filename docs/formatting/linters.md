---
title: Eslint & Stylelint
---

import Link from '@docusaurus/Link';

В проектах используются настройки eslint из пакета <Link to='https://www.npmjs.com/package/@wildberries/eslint-config'>@wildberries/eslint-config</Link>.
Также в проектах используются настройки stylelint из пакета <Link to='https://www.npmjs.com/package/@wildberries/stylelint-config'>@wildberries/stylelint-config</Link>

Крайне не рекомендуется расширять в проектах локально линт конфиг. Нужно согласованно улучшать на всех проектах. В распространении новых настроек помогает автоформаттирование.

Также в проектах используется кэширование результатов предыдущих запусков eslint и stylelint.
(файлы .eslintinfo,.stylelintinfo)
Данные кэш-файлы игнорируются гитом и на CICD происходит линтинг всего кода. Будьте аккуратны. При обновлении версий линтера обязательно нужно удалить кэш-файлы. Позднее они будут сгенерированы заново.

Для того, чтобы было возможным удобно обновлять зависимости, и из-за внутренних зависимостей CRA - было принято решение в devDependencies вынести пакеты, которые принимают участие в формировании пакета @wildberries/eslint-config.


```
"@typescript-eslint/eslint-plugin": "5.3.0",
"@typescript-eslint/parser": "5.3.0",
"eslint": "8.18.0",
"eslint-config-airbnb": "19.0.4",
"eslint-config-prettier": "8.5.0",
"eslint-config-react-app": "7.0.1",
"eslint-import-resolver-alias": "1.1.2",
"eslint-import-resolver-typescript": "3.1.0",
"eslint-loader": "4.0.2",
"eslint-plugin-css-modules": "2.11.0",
"eslint-plugin-flowtype": "8.0.3",
"eslint-plugin-import": "2.26.0",
"eslint-plugin-jsx-a11y": "6.6.0",
"eslint-plugin-prettier": "4.0.0",
"eslint-plugin-react": "7.30.1",
"eslint-plugin-react-hooks": "4.6.0",
"eslint-plugin-security": "1.5.0",
"eslint-plugin-unused-imports": "2.0.0",
"postcss": "8.3.11",
"prettier": "2.4.1"
```