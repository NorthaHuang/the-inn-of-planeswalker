import React, { createContext, useState, useLayoutEffect } from 'react';
import { AxiosResponse } from 'axios';
import {
  IProviderProps,
  IPagination,
  IDisplayFilter,
  ILightbox,
  IStates,
} from './interface';
import { apiGetSymbols } from '../api';
import { ISymbols } from '../api/format';

/* API 格式 Enum */
import { UNIQUE, DISPLAY_FORMAT_VALUE, ORDER, DIR } from '../api/format';

/* Context */
const context = createContext({} as IStates);

/* Provider Component */
const Provider = ({ children }: IProviderProps): JSX.Element => {
  // TODO: 完成後記得刪除預設值
  const [symbolsData, setSymbolsData] = useState<ISymbols[]>([]);
  const [searchText, setSearchText] = useState<string>(() => 'set:lea');
  const [pagination, setPagination] = useState<IPagination>(() => ({
    nowPage: 1,
    isLocked: false,
  }));
  const [displayFilterValue, setDisplayFilterValue] = useState<IDisplayFilter>({
    uniqueMode: UNIQUE.CARDS,
    displayFormat: DISPLAY_FORMAT_VALUE.IMAGE,
    order: ORDER.NAME,
    orderDirection: DIR.Auto,
  });
  const [lightbox, setLightbox] = useState<ILightbox>({
    isShow: false,
    content: null,
  });

  useLayoutEffect(() => {
    console.log('store 的 uselayouteffect.');

    apiGetSymbols().then((response: AxiosResponse) => setSymbolsData(response.data.data));
  }, []);

  // States Object
  const states = {
    symbolsData, // Symbols 陣列資料
    searchText, // 搜索之字串
    setSearchText,
    pagination, // 分頁資訊
    setPagination,
    displayFilterValue, // 顯示過濾器參數
    setDisplayFilterValue,
    lightbox, // Lightbox 資料
    setLightbox,
  };

  return <context.Provider value={states}>{children}</context.Provider>;
};

export default context;
export { Provider };
