import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

/* Interface */
interface ProviderProps {
  children: JSX.Element;
}

interface Pagination {
  nowPage: number;
  isLocked: boolean;
}

interface States {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
}

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

  // States Object
  const states = {
    // 搜索之字串
    searchText,
    setSearchText,
    pagination,
    setPagination,
  };

  return <context.Provider value={states}>{children}</context.Provider>;
};

export default context;
export { Provider };
