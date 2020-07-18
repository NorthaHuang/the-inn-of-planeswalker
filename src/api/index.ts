import axios, { AxiosPromise } from 'axios';
import { CardsSearchParams, CardsAutocompleteParams } from './format';

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
export const apiCardsSearch = (params: CardsSearchParams): AxiosPromise =>
  cardsRequest.get('/search', { params });

// Autocomplete: 字串長度須 >= 2
export const apiCardsAutocomplete = (params: CardsAutocompleteParams): AxiosPromise =>
  cardsRequest.get('/autocomplete', { params });
// Collection
// One Card

/*----- Sets -----*/
// const setsRequest = axios.create({
//   baseURL: `${API_URL}/sets`,
//   headers,
// });

/*----- Symbols -----*/
// const symbolsRequest = axios.create({
//   baseURL: `${API_URL}/symbology`,
//   headers,
// });

/*----- Catalogs -----*/
// const catalogsRequest = axios.create({
//   baseURL: `${API_URL}/catalog`,
//   headers,
// });
