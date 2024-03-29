---
title: Общие правила написания javascript
---

import Link from '@docusaurus/Link';

### Именование переменных
Не допускается писать переменные i,j,k,idx,clx,cls. Не допускается писать переменные менее 3х букв кроме работы с библиотекой classnames.
Не допускается писать переменные через _ префиксом или целиком
Полезно опираться при именовании на <Link to='https://ymatuhin.ru/front-end/how-to-name-variables/'>статью</Link>.

```javascript
import React, { memo, useMemo } from 'react';
import classnames from 'classnames/bind';

// good enough
const cn = classnames.bind(styles);

// best
const test = someArray.map((item,index) =>index)

// bad
const test = someArray.map((i,idx) =>idx)

// bad
const test = someArray.map((_,index) =>index)

// bad
const test = someArray.map((_item,index) =>index)
```

### Классы
Классы допустимы к написанию в классовых компонентах и нежелательны к написанию в утилитах, форматтерах и других обычных функциях. 
- У классов плохой three-shake
- Классы чуть сложнее читаются чем стрелочные функции

### Чистота функций
Форматтеры, преобразователи, получатели значений и остальные функции обязаны быть чистыми насколько это возможно. Допускается внутри функции использовать функции библиотек, которые также будут чистыми

### Используем только стрелочные функции
Запрещается использовать function declaration. Пишем все функции стрелочными для единообразия.

### Используем async/await вместо .then
Не пишем в старом стиле промисы с .then. Пишем в стиле async/await.

### Пишем вспомогательные комментарии к коду
При нетривиальных логических операциях, непонятных при отстутвии контекста - желательно писать комментарии к коду - дабы любой другой разработчик мог понять мысль данного куска кода. 

### Не используем генераторы, кроме как для библиотек
Кроме случаев redux-saga, генераторы в проектах не используются в целях упрощения написания функций и их читаемости.

### Стараемся не использовать Map и Set
Как правило, Map/Set/WeakMap/WeakSet будут транспилированы (текущая настройка - es5) в обычный объект . Более того, большинство кода, написанного с помощью данных операторов можно в более читаемом виде написать через Object 

### Следим за тем, чтобы весь написанный код работал во всех основных браузерах
Необходимо следить за стилями и за кодом, отлаживая его в текущих таргетных браузерах:

Desktop
- Chrome
- Safari
- Firefox
- Opera
- Yandex Browser
- Edge

Mobile
- Chrome
- Safari


### Именование сущностей (форматтеры, утилиты)
Необходимо в именах функций-форматтерах респонса писать постфикс либо в части названия formatter(formatted) для более точного понимания кода.
Необходимо в фукциях-получателях значений писать префикс get. Кроме селекторов redux.
Полезно опираться при именовании на <Link to='https://ymatuhin.ru/front-end/how-to-name-variables/'>статью</Link>.



### Функциональная декомпозиция
При написании кода - необходимо его делить на много функций, отвечающий за свои функциональности. Например если в функции выполняется несколько логических- или бизнес-преобразований - нужно вынести преобразования в отдельные утилиты. Это позволит проще тестировать код, его читать и понимать поведение верхнеуровневых компонентов, безболезненно маштабируя низкоуровневые.
Другой пример - компонент React:

```javascript
import React, { memo, useMemo } from 'react';
import classnames from 'classnames/bind';
import { WithScreenResizePropsType } from '@wildberries/ui-kit';
import { noop } from '@/_utils/noop';
import { SellerBonusStorageDataType } from '../../_redux/seller-bonus-module';
import { getUpdatedDateString } from '../../../_utils/get-updated-date-string';
import { BonusInfo } from './_components/bonus-info';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Seller-bonus-content';

type PropsType = {
  refreshData?: () => void;
  isLoading: boolean;
  data: SellerBonusStorageDataType;
} & WithScreenResizePropsType;

export const WrappedComponent = memo(
  ({
    refreshData,
    isLoading,
    data: { updatedAt, startDate, finishDate, stats, wholeList },
  }: PropsType) => {
    // 1) получение значения инкапсулировано в getUpdatedDateString
    // 2) функция мемоизирована на случай перерисовок компонента
    const { lastUpdatedFullString } = useMemo(
      () => getUpdatedDateString(updatedAt),
      [updatedAt],
    );

    return (
      <div className={cn(BLOCK_NAME)}>
        <BonusInfo
          chartData={wholeList}
          finishDate={finishDate}
          isLoading={isLoading}
          lastUpdatedFullString={lastUpdatedFullString}
          onNavigateToBonus={noop} // just mock
          refreshData={refreshData}
          screenType="mobile" // just mock
          startDate={startDate}
          stats={stats}
        />
      </div>
    );
  },
);

```

### Декомпозиция
 - Все функции должны быть декомпозированы и соответствовать принципу единственной ответственности.
 - Если хоть одна функция в файле импортирует другую, то такие функции должны быть разнесены по раздельным файлам. Это нужно для написания тестов. в тестах функции нужно будет замокать все импортируемые в нее функции для изоляции ее поведения и тестирования независимо от кода в импортируемых функциях

### Деструктуризация
- При импортах не нужно писать React.memo а нужно деструктурировать из импорта нужную величину
```javascript
import React, { memo } from 'react';
```

### Передача аргументов в функцию
- При вызове с несколькими аргументами - необходимо их передавать через объект
- При вызове с одним аргументом - необходимо его передавать как он есть.

```javascript
export const foo = ({param1, param2}: ParamsType) => {...}


export const bar = (param1: string) => {...}
```


### Операторы преобразования
- Используем Boolean(param) вместо  !!param
- Используем `${param}` вместо String(param)
- Используем Number(param) вместо +param
- Не используем сравнение с undefined - заменяем на оператор отрицания или на проверку свойства в объекте оператором in ().
Исключение касается только для потребностей сторонних библиотек - например функций валидации для react-final-form


### Операторы работы с массивами
- Используем es6 операторы (forEach,map,reduce) вместо es5 (for,while,do) кроме вотчер-саг


### Основные паттерны работы с кодом
- Функциональная декомпозиция

```javascript
// Абстрагируясь от типов и реальной логики в жизни

// Описываем высокоуровневую функцию и по шагам описываем этапы
// Далее реализуем эти функции

// src/_utils/some-function/index.ts
export const getFormattedUsers = () => {...}

// src/_utils/some-function/get-users-tickets-full-price.ts
export const getUsersTicketsFullPrice = () => {...}

// src/_utils/some-function/get-comission.ts
export const getComission = () => {...}

// src/_utils/some-function/get-result-sum.ts
export const getResultSum = () => {...}

// src/_utils/some-function/index.ts
export const someFunction = (users: ParamsType): OutputType => {
  // получам форматтированных юзеров
  const formattedUsers = getFormattedUsers(users);

  // получаем полную сумму по билетам
  const usersTicketsFullPrice = getUsersTicketsFullPrice(formattedUsers)response;

  // получаем посчитанную комиссию
  const comission = getComission({
    formattedUsers,
    usersTicketsFullPrice,
  });

  // выполняем доп преобразования и вычисления
  const resultSum = getResultSum({
    formattedUsers,
    usersTicketsFullPrice,
    comission
  });

  return resultSum;
}
```