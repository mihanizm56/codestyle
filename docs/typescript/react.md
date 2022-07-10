---
title: React
---

- Рефы, стейт допускается автозахват типами

```typescript
    const [searchValue, setSearchValue] = useState('');
    const containerRef = useRef(null);
```

- Входные параметры именуются PropsType, кроме случаев когда тип должен быть экспортирован - тогда нужно придерживаться имени сущности 

```typescript
export type SelectOptionType = {...}
```

- Каждый компонент должен быть типизирован на входные параметры и на стейт, при их наличии
```typescript
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

