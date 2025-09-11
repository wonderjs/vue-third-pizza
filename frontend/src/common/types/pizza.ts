import { SauceId } from '@/common/types/sauces';
import { DoughId } from '@/common/types/dough';
import { SizeId } from '@/common/types/size';
import { PizzaIngredient } from '@/common/types/ingredients';

export interface Pizza {
  index: number | null;
  name: string;
  sauceId: SauceId;
  doughId: DoughId;
  sizeId: SizeId;
  ingredients: PizzaIngredient[];
}
