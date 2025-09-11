import { defineStore } from 'pinia';
import doughJSON from '@/mocks/dough.json';
import ingredientsJSON from '@/mocks/ingredients.json';
import saucesJSON from '@/mocks/sauces.json';
import sizesJSON from '@/mocks/sizes.json';
import miscJSON from '@/mocks/misc.json';
import {
  normalizeDough,
  normalizeIngredients,
  normalizeSauces,
  normalizeSize,
} from '@/common/helpers/normalize';
import { Dough, NormalizedDough } from '@/common/types/dough';
import { Ingredient, NormalizedIngredient } from '@/common/types/ingredients';
import { Sauce, NormalizedSauce } from '@/common/types/sauces';
import { Size, NormalizedSize } from '@/common/types/size';
import { Misc } from '@/common/types/misc';

export const useDataStore = defineStore('data', {
  state: (): {
    doughs: NormalizedDough[];
    ingredients: NormalizedIngredient[];
    sauces: NormalizedSauce[];
    sizes: NormalizedSize[];
    misc: Misc[];
  } => ({
    doughs: (doughJSON as Dough[]).map(normalizeDough),
    ingredients: (ingredientsJSON as Ingredient[]).map(normalizeIngredients),
    sauces: (saucesJSON as Sauce[]).map(normalizeSauces),
    sizes: (sizesJSON as Size[]).map(normalizeSize),
    misc: miscJSON,
  }),
  getters: {},
  actions: {},
});
