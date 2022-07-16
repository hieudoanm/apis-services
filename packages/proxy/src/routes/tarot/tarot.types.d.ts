type Value =
  | '00'
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | 'ace'
  | 'page'
  | 'knight'
  | 'queen'
  | 'king';

type Type = 'major' | 'minor';

type Suit = 'cups' | 'pentacles' | 'swords' | 'wands' | 'major';

export type Card = {
  id: `${Type}-${Suit}-${Value}`;
  name: string;
  value: Value;
  number: number;
  type: Type;
  suit: Suit;
  meaningUp: string;
  meaningReverse: string;
  description: string;
};
