---
title: Redux
---

- Не типизируем саги как генераторы
- Не типизируем функцию connect из библиотеки redux
- Используем захват типов экшенов для использования по месту вызова и в редюсерах
- Типы из redux модуля не должны экспортироваться вне модуля
- Редюсеры, селекторы, экшены, утилиты redux необходимо типизировать в обязательном порядке
- В сагах необходимо типизировать получаемые значения из селекторов стора

```typescript
const membersPureValues: MembersFieldsPureType = yield select(
    membersPureValuesSelector,
);
```

- mapStateToProps типизируется с помощью тив стейтов из redux модулей 

```typescript
import {
  AddressesStatePartType,
  officesSelector
} from '@/pages/supplier-wb-bank/_redux/addresses-module';
import {
  recordDataSelector,
  RecordFormStatePartType,
} from '../../_redux/record-form-module';

const mapStateToProps = (
  state: AddressesStatePartType & RecordFormStatePartType,
): MapStateOutputType => ({
  offices: officesSelector(state),
  formValues: recordDataSelector(state),
});
```

- mapDispatchToProps

```typescript
import { setModalAction } from '@wildberries/notifications';

const mapDispatchToProps: MapDispatchType = {
  setNotification: setModalAction,
};
```