---
title: Типизация
---

### Типизация actions

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
```

### Типизация reducers
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


### Типизация selectors
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

### Типизация connect

```typescript
import React, { Component } from 'react';
import {
  AddressesStatePartType,
  officesSelector
} from '@/pages/supplier-wb-bank/_redux/addresses-module';
import {
  recordDataSelector,
  RecordFormStatePartType,
} from '../../_redux/record-form-module';
import { setModalAction } from '@wildberries/notifications';

type MapStateOutputType = {
  offices:ReturnType<typeof officesSelector>;
  formValues:ReturnType<typeof recordDataSelector>;
}

type MapDispatchType = {
  setNotification: typeof setModalAction;
}

type PropsType = MapStateOutputType & MapDispatchType;

class WrappedContainer extends Component<PropsType, StateType> {
    ...
}

const mapStateToProps = (
  state: AddressesStatePartType & RecordFormStatePartType,
): MapStateOutputType => ({
  offices: officesSelector(state),
  formValues: recordDataSelector(state),
});

const mapDispatchToProps: MapDispatchType = {
  setNotification: setModalAction,
};


export const ConnectedOfficesMap = connect(mapStateToProps, mapDispatchToProps)(WrappedContainer);
```