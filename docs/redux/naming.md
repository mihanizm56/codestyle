---
title: Именование сущностей redux (actions, reducers, selectors)
---

### Actions 
- Константы экшенов именуются в произвольном порядке согласно тому что делает экшен
- Имена экшенов, на которые подписываются саги должны заканчиваться на постфикс ActionSaga
- Имена экшенов, на которые НЕ подписываются саги должны заканчиваться на постфикс Action
- константы экшенов записываются в статическое свойство функции .type

```typescript
import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import { DocumentType } from '@/pages/supplier-wb-bank/_types';
import { TabsValidateValuesType } from '@/pages/supplier-wb-bank/children/questionnaire/_types/shared-types';

const UPLOAD_DOCUMENT = 'UPLOAD_DOCUMENT';
export const uploadMembersDocumentActionSaga: IReduxAction<
  {
    fieldName: string;
    documentItem: DocumentType;
    questionnaireType: TabsValidateValuesType;
  },
  typeof UPLOAD_DOCUMENT
> = (payload) => ({
  type: UPLOAD_DOCUMENT,
  payload,
});
uploadMembersDocumentActionSaga.type = UPLOAD_DOCUMENT;

const DELETE_DOCUMENT = 'DELETE_DOCUMENT';
export const deleteMembersDocumentActionSaga: IReduxAction<
  {
    id: string;
    fieldName: string;
  },
  typeof DELETE_DOCUMENT
> = (payload) => ({
  type: DELETE_DOCUMENT,
  payload,
});
deleteMembersDocumentActionSaga.type = DELETE_DOCUMENT;

const SET_MEMBERS_LIMIT = 'SET_MEMBERS_LIMIT';
export const setMembersLimitAction: IReduxAction<
  {
    min: number;
    max: number;
  },
  typeof SET_MEMBERS_LIMIT
> = (payload) => ({
  type: SET_MEMBERS_LIMIT,
  payload,
});
setMembersLimitAction.type = SET_MEMBERS_LIMIT;
```

### Reducers
- Экспортируется всегда дефолтным экспортом (для удобства и исторически)
- называется всегда одним именем - "reducer"
- константа редюсера называется с постфиксом _REDUCER_NAME и находится в файле _constants.ts
- редюсер это чистая функция которая не содержит ничего кроме входных состония и экшена.

```typescript
import {
  startLoadingMembersValuesAction,
  stopLoadingMembersValuesAction,
  setMembersInitialValuesAction,
  setMembersFormErrorsAction,
  resetMembersFormErrorsAction,
  resetMembersInitialValuesAction,
  setSelectedMemberIdAction,
  setEmptyStatusAction,
  resetEmptyStatusAction,
  startSavingMemberValueAction,
  stopSavingMemberValueAction,
} from './actions';
import { MembersFormStateType } from './_types';

export const initialState: MembersFormStateType = {
  data: {
    members: [],
    generalQuestions: null,
  },
  isLoading: true,
  externalFormErrors: {},
  selectedMemberId: '',
  emptyStatusText: '',
  isSavingField: false,
};

type ActionsType =
  | ReturnType<typeof startLoadingMembersValuesAction>
  | ReturnType<typeof stopLoadingMembersValuesAction>
  | ReturnType<typeof setMembersInitialValuesAction>
  | ReturnType<typeof setMembersFormErrorsAction>
  | ReturnType<typeof resetMembersInitialValuesAction>
  | ReturnType<typeof resetMembersFormErrorsAction>
  | ReturnType<typeof setSelectedMemberIdAction>
  | ReturnType<typeof setEmptyStatusAction>
  | ReturnType<typeof resetEmptyStatusAction>
  | ReturnType<typeof startSavingMemberValueAction>
  | ReturnType<typeof stopSavingMemberValueAction>;

const reducer = (
  state: MembersFormStateType = initialState,
  action: ActionsType,
): MembersFormStateType => {
  switch (action.type) {
    case startLoadingMembersValuesAction.type:
      return { ...state, isLoading: true };
    case stopLoadingMembersValuesAction.type:
      return { ...state, isLoading: false };

    case setMembersInitialValuesAction.type:
      return { ...state, data: action.payload };
    case resetMembersInitialValuesAction.type:
      return { ...state, data: initialState.data };

    case setMembersFormErrorsAction.type:
      return { ...state, externalFormErrors: action.payload };
    case resetMembersFormErrorsAction.type:
      return { ...state, externalFormErrors: initialState.externalFormErrors };

    case setSelectedMemberIdAction.type:
      return { ...state, selectedMemberId: action.payload };

    case setEmptyStatusAction.type:
      return { ...state, emptyStatusText: action.payload };
    case resetEmptyStatusAction.type:
      return { ...state, emptyStatusText: initialState.emptyStatusText };

    case startSavingMemberValueAction.type:
      return { ...state, isSavingField: false };
    case stopSavingMemberValueAction.type:
      return { ...state, isSavingField: true };

    default:
      return state;
  }
};

export default reducer;

```


### Selectors
- именуются с постфиксом Selector
- префикс get не нужен как с утилитами получения каких либо данных
- пишутся всегда с библиотекой reselect
- селектор верхнего уровня должен содержать защиту от возможного отстутствия редюсера в сторе (особенность ленивого подключения/отключения редюсеров)


```typescript
import { createSelector } from 'reselect';
import { MembersFormStateType, MembersFormStatePartType } from './_types';
import { initialState } from './reducer';
import { FORM_MEMBERS_REDUCER_NAME } from './_constants';

export const membersValuesStorageSelector = (store: MembersFormStatePartType) =>
  store[FORM_MEMBERS_REDUCER_NAME] || initialState;

export const membersFormIsLoadingSelector = createSelector(
  [membersValuesStorageSelector],
  ({ isLoading }: MembersFormStateType) => isLoading,
);
```

### Index.ts    
- Для удобства импортов из модуля - придерживаемся такой структуры ре-экспорта

```typescript
export * from './actions';
export * from './selectors';
export * from './_types';
export * from './_constants';
export * from './sagas';
export { default } from './reducer';
```


### _types.ts    
- Всегда должен содержать минимум два типа - кусок стора с константой редюсера и тип стейта<br/>
кусок стора с константой редюсера пойдет в mapStateToProps<br/>
тип стейта пойдет в редюсер и селекторы итд


```typescript
import {
  MembersFieldsPureType,
  MembersFormExternalErrorsType,
} from '../../_types/members-type';
import { FORM_MEMBERS_REDUCER_NAME } from './_constants';

export type MembersFormStateType = {
  isSavingField: boolean;
  isLoading: boolean;
  data: MembersFieldsPureType;
  selectedMemberId: string;
  externalFormErrors: MembersFormExternalErrorsType;
  emptyStatusText: string;
};

export type MembersFormStatePartType = {
  [FORM_MEMBERS_REDUCER_NAME]: MembersFormStateType;
};

```