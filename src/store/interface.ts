import { Dispatch, SetStateAction } from 'react';
import { ISymbols, UNIQUE, ORDER, DIR } from '../api/format';

/* Interface */
export interface IProviderProps {
  children: JSX.Element;
}

export interface IPagination {
  nowPage: number;
  isLocked: boolean;
}

/** TODO: 這樣寫感覺哪裡怪怪的 */
export interface IDisplayFilter {
  [propertynName: string]: string | number;
  uniqueMode: UNIQUE;
  order: ORDER;
  orderDirection: DIR;
}

export interface ILightbox {
  isShow: boolean;
  content: JSX.Element | null;
}

export interface IStates {
  symbolsData: ISymbols[];
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  pagination: IPagination;
  setPagination: React.Dispatch<React.SetStateAction<IPagination>>;
  displayFilterValue: IDisplayFilter;
  setDisplayFilterValue: React.Dispatch<React.SetStateAction<IDisplayFilter>>;
  lightbox: ILightbox;
  setLightbox: React.Dispatch<React.SetStateAction<ILightbox>>;
  isInputFocus: boolean;
  setIsInputFocus: React.Dispatch<React.SetStateAction<boolean>>;
}
