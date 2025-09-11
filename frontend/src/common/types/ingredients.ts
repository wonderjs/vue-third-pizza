import type { Range } from './range';

export type IngredientId = Range<1, 15>;
export type IngredientValue =
  | 'mushrooms'
  | 'cheddar'
  | 'salami'
  | 'ham'
  | 'ananas'
  | 'bacon'
  | 'onion'
  | 'chile'
  | 'jalapeno'
  | 'olives'
  | 'tomatoes'
  | 'salmon'
  | 'mozzarella'
  | 'parmesan'
  | 'blue_cheese';

export interface Ingredient {
  id: IngredientId;
  name: string;
  image: string;
  price: number;
}

export interface NormalizedIngredient extends Ingredient {
  value: IngredientValue;
}

export interface PizzaIngredient {
  ingredientId: IngredientId;
  quantity: number;
}
