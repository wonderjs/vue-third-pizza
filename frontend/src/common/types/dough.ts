import type { Range } from './range';

export type DoughId = Range<1, 2>;
export type DoughValue = 'light' | 'large';

export interface Dough {
  id: DoughId;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface NormalizedDough extends Dough {
  value: DoughValue;
}
