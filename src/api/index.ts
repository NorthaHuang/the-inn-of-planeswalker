import axios, { AxiosPromise } from 'axios';
import {
  ICardsSearchParams,
  ICardsAutocompleteParams,
  ICardUrlParams,
  ICardParams,
} from './format';

// API 來源網址
const API_URL = 'https://api.scryfall.com';
// API Headers
const headers = {
  'Content-Type': 'application/json',
};

/*----- Cards -----*/
/* Base Instance */
const cardsRequest = axios.create({
  baseURL: `${API_URL}/cards`,
  headers,
});

/* Instance */
// Search
export const apiCardsSearch = (params: ICardsSearchParams): AxiosPromise =>
  cardsRequest.get('/search', { params });

// Autocomplete: 字串長度須 >= 2
export const apiCardsAutocomplete = (params: ICardsAutocompleteParams): AxiosPromise =>
  cardsRequest.get('/autocomplete', { params });
// Collection
// Card
export const apiCard = (urlParams: ICardUrlParams, params: ICardParams): AxiosPromise =>
  cardsRequest.get(`/${urlParams.code}/${urlParams.number}`, { params });

/*----- Sets -----*/
// export const setsRequest = axios.create({
//   baseURL: `${API_URL}/sets`,
//   headers,
// });

/*----- Catalogs -----*/
// export const catalogsRequest = axios.create({
//   baseURL: `${API_URL}/catalog`,
//   headers,
// });

/*----- Symbols -----*/
/* Base Instance */
const symbolsRequest = axios.create({
  baseURL: API_URL,
  headers,
});

// Get Symbols
export const apiGetSymbols = (): AxiosPromise => symbolsRequest.get('/symbology');
