---
title: Типизация основных кейсов javascript
---

### Вся кодовая база проекта должна быть на typescript
- Необходимо регулярно обновлять зависимость typescript
- При необходимости изменять файл настроек tsconfig.json
- Директиву игнорирования типов использовать запрещается. Кроме случаев ошибок в типах библиотек или в исключительных случаях.
- Директива any не запрещена. Но должна использоваться строго по месту. Бывают случае когда тип нам не известен и может быть описан не иначе как через any и в последствии каким либо форматтером преобразован на выходе в корректный тип. Данный тип является нежелательным. Но допустим с комментариями требуемого рефакторинга (//todo fix any в коде)
- Директива unknown не запрещена по той же причине с any.
- Типы Object/Function запрещены
- Generic использовать допускается, но необходимо соблюдать читаемость кода
- Директива as не запрещена по той же причине с any.

### Почему на проектах не использован strict режим
Строгий режим будет постепенно внедряться. Но как необходимый инструмент он себя не проявил - лишь усложнил типизацию кода из библиотек, у которых с типизацией проблемы.

- Все что пишется через type - должно иметь постфикс Type
- Все что пишется через interface (или имеет смысл интерфейса) - должно иметь префикс I

```typescript
type UserType = {...}
```

- каждая функция должна быть типизирована на входные параметры и на выходные (кроме примитивных типов/типов которые определы выше по проекту)

```typescript
import { WithScreenResizePropsType } from '@wildberries/ui-kit';

export const getPerPageCards = ({
  screenType,
  windowWidth,
}: WithScreenResizePropsType): number => {
  if (screenType === 'mobile') {
    return 2;
  }

  if (windowWidth > 480 && windowWidth < 619) {
    return 3;
  }

  if (windowWidth > 620 && windowWidth < 767) {
    return 4;
  }

  if (windowWidth > 768 && windowWidth < 925) {
    return 5;
  }

  if (windowWidth > 926 && windowWidth < 1023) {
    return 6;
  }

  if (windowWidth > 1024 && windowWidth < 1060) {
    return 4;
  }

  if (windowWidth > 1059 && windowWidth < 1280) {
    return 5;
  }

  return 6;
};
```

```typescript
import { StatDiffDataType, StatType } from '@/pages/home/_types';
import { PureStatType } from './_types';
import { getFormattedListItem } from './_utils/get-formatted-list-item';

type ParamsType = {
  weekly: {
    orderedList: Array<PureStatType>;
    buyoutList: Array<PureStatType>;
  };
  today: {
    orderedDiffData: StatDiffDataType;
    buyoutDiffData: StatDiffDataType;
  };
  updatedAt: Date;
};

type OutputType = {
  updatedAt: Date;
  chartData: {
    orderedList: Array<StatType>;
    buyoutList: Array<StatType>;
  };
  statsData: {
    orderedDiffData: StatDiffDataType;
    buyoutDiffData: StatDiffDataType;
  };
};

export const statsResponseFormatter = ({
  weekly: { orderedList, buyoutList },
  today,
  updatedAt,
}: ParamsType): OutputType => {
  try {
    return {
      chartData: {
        orderedList: orderedList.map(getFormattedListItem),
        buyoutList: buyoutList.map(getFormattedListItem),
      },
      statsData: today,
      updatedAt: new Date(updatedAt),
    };
  } catch (error) {
    console.error('error in statsResponseFormatter', error);

    throw new Error(error);
  }
};
```

Входные параметры именуются ParamsType, кроме случаев когда тип должен быть экспортирован - тогда нужно придерживаться имени сущности 

```typescript
export type UserFormatterParamsType = {...}
```

Выходные параметры именуются OutputType, кроме случаев когда тип должен быть экспортирован - тогда нужно придерживаться имени сущности 

```typescript
export type UserFormatterOutputType = {...}
```

Типы массивов пишем через Array

```typescript

// good
export type TestsType = Array<TestType>

// bad
export type TestsType = TestType[]
```

Типы объектов пишем через Record, но допускается типизация базовыми средствами. Но не Object.

```typescript
// best
export type TestType = Record<string,number>

// good enough
export type TestType = {
[key:string]: number
}

// mixing
export type TestType = {
  foo: number;
  [key:string]: number
}

// bad
export type TestType = Object
```