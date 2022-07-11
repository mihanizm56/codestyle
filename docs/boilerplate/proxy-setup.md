---
title: Проксирование запросов
---

import Link from '@docusaurus/Link';

Данный файл позволяет настроить локальных реверс-прокси на проекте. Можно перехватить запрос и перенаправить его на моковый сервер.

``` javascript
// eslint-disable-next-line
const proxy = require('http-proxy-middleware');

const headersDev = {
  cookie: 'x-supplier-id=fb25c9e9-cae8-52db-b68e-736c1466a3f5',
  'X-User-Id': 23508737,
};

module.exports = (app) => {
  app.use(
    // перехватываем сопоставимые запросы с подстрокой /api/v1 и начинающиеся обязательно с /
    '/api/v1',
    proxy({
      target: 'http://127.0.0.1:8081', // направляем
      changeOrigin: true,
      headers: headersDev,
    }),
  );
};

```

<Link to='https://create-react-app.dev/docs/proxying-api-requests-in-development'>Тут представлена документация по проксированию запросов</Link>.