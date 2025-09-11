import type { Dough, NormalizedDough } from '@/common/types/dough';
import type { Sauce, NormalizedSauce } from '@/common/types/sauces';
import type { Size, NormalizedSize } from '@/common/types/size';
import type {
  Ingredient,
  NormalizedIngredient,
} from '@/common/types/ingredients';
import doughs from '@/common/data/doughs';
import ingredients from '@/common/data/ingredients';
import sauces from '@/common/data/sauces';
import sizes from '@/common/data/sizes';

export const normalizeDough = (dough: Dough): NormalizedDough => {
  return {
    ...dough,
    value: doughs[dough.id],
  };
};

export const normalizeSize = (size: Size): NormalizedSize => {
  return {
    ...size,
    value: sizes[size.id],
  };
};

export const normalizeIngredients = (
  ingredient: Ingredient
): NormalizedIngredient => {
  return {
    ...ingredient,
    value: ingredients[ingredient.id],
  };
};

export const normalizeSauces = (sauce: Sauce): NormalizedSauce => {
  return {
    ...sauce,
    value: sauces[sauce.id],
  };
};
