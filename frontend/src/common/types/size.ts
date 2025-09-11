import type { Range } from './range';

export type SizeId = Range<1, 3>;
export type SizeValue = 'small' | 'normal' | 'big';

export interface Size {
  id: SizeId;
  name: string;
  image: string;
  multiplier: number;
}

export interface NormalizedSize extends Size {
  value: SizeValue;
}
