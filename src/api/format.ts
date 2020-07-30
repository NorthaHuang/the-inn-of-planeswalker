/*----- Enum -----*/
/* Cards */
// Search
/** enum 卡牌重複之模式 */
export enum UNIQUE {
  CARDS = 'cards',
  ART = 'art',
  PRINTS = 'prints',
}
/** enum 排序 */
export enum ORDER {
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
/** enum 排序方向 */
export enum DIR {
  Auto = 'auto',
  ASC = 'asc',
  DESC = 'desc',
}

/*----- Interface -----*/
/* Cards */
// Search
export interface ICardsSearchParams {
  q: string;
  unique?: UNIQUE;
  order?: ORDER;
  dir?: DIR;
  include_extras?: boolean;
  include_multilingual?: boolean;
  include_variations?: boolean;
  page?: number;
  format?: string;
  pretty?: boolean;
}

// Autocomplete: 字串長度須 >= 2
export interface ICardsAutocompleteParams {
  q: string;
  format?: 'json';
  pretty?: boolean;
  include_extras?: boolean;
}

/* Symbols */
export interface ISymbols {
  object: string;
  symbol: string;
  svg_uri: string;
  loose_variant: string | null;
  english: string;
  transposable: boolean;
  represents_mana: boolean;
  cmc?: number;
  appears_in_mana_costs: boolean;
  funny: boolean;
  colors: string[];
  gatherer_alternates?: string[];
}
