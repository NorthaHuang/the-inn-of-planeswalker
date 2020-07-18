import React, { createContext, useState } from 'react';
import { ProviderProps, Pagination, DisplayFilter, States } from './interface';

/* API 格式 Enum */
import { UNIQUE, DISPLAY_FORMAT_VALUE, ORDER, DIR } from '../api/format';

/* Context */
const context = createContext({} as States);

/* Provider Component */
const Provider = ({ children }: ProviderProps): JSX.Element => {
  // TODO: 完成後記得刪除預設值
  const [searchText, setSearchText] = useState<string>(() => 'b');
  const [pagination, setPagination] = useState<Pagination>(() => ({
    nowPage: 1,
    isLocked: false,
  }));
  const [displayFilterValue, setDisplayFilterValue] = useState<DisplayFilter>({
    uniqueMode: UNIQUE.CARDS,
    displayFormat: DISPLAY_FORMAT_VALUE.IMAGE,
    order: ORDER.NAME,
    orderDirection: DIR.Auto,
  });

  // States Object
  const states = {
    // 搜索之字串
    searchText,
    setSearchText,
    pagination,
    setPagination,
    displayFilterValue,
    setDisplayFilterValue,
  };

  return <context.Provider value={states}>{children}</context.Provider>;
};

export default context;
export { Provider };
