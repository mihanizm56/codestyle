---
title: Работа с запросами и fetch-api
---

import Link from '@docusaurus/Link';


 - Запросы выполняются только в сагах с помощью библиотеки <Link to='https://mihanizm56.github.io/fetch-api/ru/'>@mihanizm56/fetch-api</Link> 
 - Принято делить запрос на составные части - тип запроса, схема, конфигурация
 - Эндпоинты могут быть переиспользованы между запросами - поэтому существуют независимо и могут содержать в индексовм файле экспорт нескольких эндпоинтов если они базируются на одном (/api/users/getUser, /api/users/setUser)
 - В обязательном порядке используем валидацию респонсов по схемам Joi. Допускается не использовать схемы там, где тип данных респонса будет не важен для клиента (например просто успешный запрос)

├── api
|    ├── requests
|    |   └── fetch-user-data
|    |       ├── index.ts - определение типа запроса
|    |       ├── make-request-config.ts - оепределение конфигурации запроса
|    |       └── response-schema.ts - оепределение схемы запроса    └── requests - описание запросов
|    └── endpoints
|       └── user-data - определение 
|           ├── index.ts - экспорт функции получения эндоинта
|           └── urls.ts - описание dev/prod эндпоинта (dev-фиксированная строка, prod-берется динамически из окружения)
└── ...

```typescript
 // src/api/requests/fetch-user-data/index.ts

import { IResponse, JSONRPCRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig, RequestParamsType } from './make-request-config';

export const fetchUserDataRequest = (
  params: RequestParamsType,
): Promise<IResponse> =>
  new JSONRPCRequest().makeRequest(makeRequestConfig(params));
```

```typescript
 // src/api/requests/fetch-user-data/make-request-config.ts

import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { getUserDataEndpoint } from '@/api/endpoints/user-data';
import { responseSchema } from './response-schema';

export type RequestParamsType = {
  inn: string;
  abortRequestId: string;
};

export const makeRequestConfig = ({
  inn,
  abortRequestId,
}: RequestParamsType): IRequestParams => ({
  endpoint: getUserDataEndpoint(),
  translateFunction: requestTranslateFunction,
  responseSchema,
  body: {
    params: { inn },
  },
  abortRequestId,
});
```

```typescript
 // src/api/requests/fetch-user-data/response-schema.ts
import Joi from 'joi';

export const responseSchema = Joi.object({
  fnsError: Joi.object({
    inn: Joi.string().allow('').required(),
    ogrn: Joi.string().allow('').required(),
    type: Joi.string().allow('').required(),
  })
    .allow(null)
    .required(),
});
```

```typescript
 // src/api/endpoints/user-data/urls.ts

export const ENDPOINT_USER_DATA_DEV = '/api/v1/user-data';
export const ENDPOINT_USER_DATA_PROD = window.ENDPOINT_USER_DATA;
```

```typescript
 // src/api/endpoints/user-data/index.ts

 import {
  ENDPOINT_USER_DATA_DEV,
  ENDPOINT_USER_DATA_PROD,
} from './urls';

export const getUserDataEndpoint = () =>
  process.env.NODE_ENV !== 'production'
    ? ENDPOINT_USER_DATA_DEV
    : ENDPOINT_USER_DATA_PROD;


export const getUserCreditEndpoint = (id: string) => `${getUserDataEndpoint}/credits/${id}`
```

