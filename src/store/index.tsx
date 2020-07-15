import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

/* Interface */
interface ProviderProps {
  children: JSX.Element;
}
interface States {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

/* Context */
const context = createContext({} as States);

/* Provider Component */
const Provider = ({ children }: ProviderProps): JSX.Element => {
  // TODO: 完成後記得刪除預設值
  const [searchText, setSearchText] = useState<string>('b');

  // States Object
  const states = {
    // 當前搜索之字串
    searchText,
    setSearchText,
  };

  return <context.Provider value={states}>{children}</context.Provider>;
};

export default context;
export { Provider };
