---
title: Что нужно делать после npm install
---

На CRA v3 после установки любого пакета (после любого запуска npm install) нужно выполять команду

```
npm run wb -> Открыть список дополнительных команд -> Запуск изменения package-lock.json в соответствии с "resolutions"
```

Проверить какая версия CRA установлена можно посмотрев на зависимость 

```
    "react-scripts": "x.x.x"

    мажорная версия и будет текущей
```