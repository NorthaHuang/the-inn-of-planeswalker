import { Dispatch, SetStateAction } from 'react';

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
  uniqueMode: string;
  displayFormat: number;
  order: string;
  orderDirection: string;
}

export interface States {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  displayFilterValue: DisplayFilter;
  setDisplayFilterValue: React.Dispatch<React.SetStateAction<DisplayFilter>>;
}
