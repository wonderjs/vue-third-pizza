import type { Range } from './range';

export type SauceId = Range<1, 2>;
export type SauceValue = 'tomato' | 'creamy';

export interface Sauce {
  id: SauceId;
  name: string;
  price: number;
}

export interface NormalizedSauce extends Sauce {
  value: SauceValue;
}
