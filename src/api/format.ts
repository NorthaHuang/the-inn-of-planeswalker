/*----- Enum -----*/
/* Cards */
// Search
/** enum 卡牌重複之模式 */
export enum UNIQUE {
  CARDS = 'cards',
  ART = 'art',
  PRINTS = 'prints',
}
/** enum 顯示之格式: Local 使用，故使用預設數字 */
export enum DISPLAY_FORMAT_VALUE {
  IMAGE,
  CHECK_LIST,
  TEXT_ONLY,
  FULL,
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
export interface CardsSearchParams {
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
export interface CardsAutocompleteParams {
  q: string;
  format?: 'json';
  pretty?: boolean;
  include_extras?: boolean;
}
