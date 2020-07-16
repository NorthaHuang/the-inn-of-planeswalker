import axios, { AxiosPromise } from 'axios';

// API 來源網址
const API_URL = 'https://api.scryfall.com';
// API Headers
const headers = {
  'Content-Type': 'application/json',
};

/*----- Cards -----*/
/* Instance */
const cardsRequest = axios.create({
  baseURL: `${API_URL}/cards`,
  headers,
});

/* Types Setting */
// Enum
enum Unique {
  CARDS = 'cards',
  ART = 'art',
  PRINTS = 'prints',
}
enum Order {
  NAME = 'name',
  SET = 'set',
  RELEASED = 'released',
  RARITY = 'rarity',
  COLOR = 'color',
  USD = 'usd',
  TIX = 'tix',
  EUR = 'eur',
  CMC = 'cmc',
  POWER = 'power',
  TOUGHNESS = 'toughness',
  EDHREC = 'edhrec',
  ARTIST = 'artist',
}
enum Dir {
  Auto = 'auto',
  ASC = 'asc',
  DESC = 'desc',
}

// Search
interface CardsSearchParams {
  q: string;
  unique?: Unique;
  order?: Order;
  dir?: Dir;
  include_extras?: boolean;
  include_multilingual?: boolean;
  include_variations?: boolean;
  page?: number;
  format?: string;
  pretty?: boolean;
}
export const apiCardsSearch = (params: CardsSearchParams): AxiosPromise =>
  cardsRequest.get('/search', { params });

// Autocomplete: 字串長度須 >= 2
interface CardsAutocompleteParams {
  q: string;
  format?: 'json';
  pretty?: boolean;
  include_extras?: boolean;
}
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
