---
title: Redux ducks
---

import Link from '@docusaurus/Link';


В проектах используется подход <Link to='https://github.com/erikras/ducks-modular-redux'>redux-ducks</Link>

Он подразумевает деление стора на домены(модули, разделенные по соответствующим смыслу данных).
Каждый модуль может содержать помимо расшаренных папок и файлов (_utils, _constants,...)

Модули должны находиться в разных папках

```
├── _redux    
│   ├── users-module
|   └── ...
│   ├── basket-module
|   └── ...
│   ├── suppliers-module
|   └── ...
└── ...
```

```
├── actions.ts - Экшены модуля
├── reducer.ts – Редюсер
├── selectors.ts – Селекторы
├── index.ts – ре-экспорт сущностей
├── _types.ts – типы модуля
├── _constants.ts – константы модуля
├── sagas – папка с сагами    
│   ├── some-name – папка с сагами
|   |   ├── some-name-worker-saga.ts – вотчер сага    
|   |   ├── some-name-watcher-saga.ts – воркер сага     
|   |   └── index.ts – ре-экспорт вотчер саги
|   └── index.ts – ре-экспорт вотчер саг
└── ...
```

