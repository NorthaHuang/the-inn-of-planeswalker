import { Dispatch, SetStateAction } from 'react';
import { UNIQUE, DISPLAY_FORMAT_VALUE, ORDER, DIR } from '../api/format';

/* Interface */
export interface ProviderProps {
  children: JSX.Element;
}

export interface Pagination {
  nowPage: number;
  isLocked: boolean;
}

/** TODO: 這樣寫感覺哪裡怪怪的 */
export interface DisplayFilter {
  [propertynName: string]: string | number;
  uniqueMode: UNIQUE;
  displayFormat: DISPLAY_FORMAT_VALUE;
  order: ORDER;
  orderDirection: DIR;
}

export interface States {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  displayFilterValue: DisplayFilter;
  setDisplayFilterValue: React.Dispatch<React.SetStateAction<DisplayFilter>>;
}
