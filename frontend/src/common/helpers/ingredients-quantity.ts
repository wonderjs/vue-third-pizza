import { useDataStore } from '@/stores/data';
import { Pizza } from '@/common/types/pizza';
import {
  IngredientId,
  NormalizedIngredient,
  PizzaIngredient,
} from '@/common/types/ingredients';

type IngredientsQuantityMap = Record<IngredientId, number>;

/* Функция вернёт объект { ингредиент Id: количество } */
export const ingredientsQuantity = (pizza: Pizza): IngredientsQuantityMap => {
  const data = useDataStore();
  return data.ingredients.reduce((acc, ingredient: NormalizedIngredient) => {
    acc[ingredient.id] =
      pizza.ingredients.find(
        (item: PizzaIngredient) => item.ingredientId === ingredient.id
      )?.quantity ?? 0;
    return acc;
  }, {} as IngredientsQuantityMap);
};
