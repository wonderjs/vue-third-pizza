import { defineStore } from 'pinia';
import { ingredientsQuantity } from '@/common/helpers/ingredients-quantity';
import { pizzaPrice } from '@/common/helpers/pizza-price';
import { useDataStore } from '@/stores/data';
import { IngredientId, PizzaIngredient } from '@/common/types/ingredients';
import { SauceId } from '@/common/types/sauces';
import { DoughId } from '@/common/types/dough';
import { SizeId } from '@/common/types/size';
import { Pizza } from '@/common/types/pizza';

export const usePizzaStore = defineStore('pizza', {
  state: (): Pizza => ({
    index: null,
    name: '',
    sauceId: 1,
    doughId: 1,
    sizeId: 1,
    ingredients: [],
  }),
  getters: {
    sauce: (state) => {
      const data = useDataStore();
      return data.sauces.find((i) => i.id === state.sauceId) ?? data.sauces[0];
    },
    dough: (state) => {
      const data = useDataStore();
      return data.doughs.find((i) => i.id === state.doughId) ?? data.doughs[0];
    },
    size: (state) => {
      const data = useDataStore();
      return data.sizes.find((i) => i.id === state.sizeId) ?? data.sizes[0];
    },
    ingredientsExtended: (state) => {
      const data = useDataStore();
      const pizzaIngredientsIds = state.ingredients.map(
        (i: PizzaIngredient) => i.ingredientId
      );
      return data.ingredients
        .filter((i) => pizzaIngredientsIds.includes(i.id))
        .map((i) => {
          return {
            ...i,
            quantity:
              state.ingredients.find(
                (item: PizzaIngredient) => item.ingredientId === i.id
              )?.quantity ?? 0,
          };
        });
    },
    price: (state) => {
      return pizzaPrice(state);
    },
    ingredientQuantities: (state) => {
      return ingredientsQuantity(state);
    },
  },
  actions: {
    setIndex(index: number) {
      this.index = index;
    },
    setName(name: string) {
      this.name = name;
    },
    setSauce(sauceId: SauceId) {
      this.sauceId = sauceId;
    },
    setDough(doughId: DoughId) {
      this.doughId = doughId;
    },
    setSize(sizeId: SizeId) {
      this.sizeId = sizeId;
    },
    setIngredients(ingredients: PizzaIngredient[]) {
      this.ingredients = ingredients;
    },
    addIngredient(ingredientId: IngredientId) {
      this.ingredients.push({
        ingredientId,
        quantity: 1,
      });
    },
    incrementIngredientQuantity(ingredientId: IngredientId) {
      const ingredientIdx = this.ingredients.findIndex(
        (item: PizzaIngredient) => item.ingredientId === ingredientId
      );

      if (ingredientIdx === -1) {
        this.addIngredient(ingredientId);
        return;
      }

      (this.ingredients[ingredientIdx] as PizzaIngredient).quantity++;
    },
    setIngredientQuantity(ingredientId: IngredientId, count: number) {
      const ingredientIdx = this.ingredients.findIndex(
        (item: PizzaIngredient) => item.ingredientId === ingredientId
      );

      /*
       * Добавляем ингредиент, если его нет, а количество больше 0
       * Если ингредиента нет, а количество 0 или меньше, то ничего не делаем
       */
      if (ingredientIdx === -1 && count > 0) {
        this.addIngredient(ingredientId);
        return;
      } else if (ingredientIdx === -1) {
        return;
      }

      /* Удаляем ингредиент, если количество 0 */
      if (count === 0) {
        this.ingredients.splice(ingredientIdx, 1);
        return;
      }

      (this.ingredients[ingredientIdx] as PizzaIngredient).quantity = count;
    },
    loadPizza(pizza: Pizza) {
      this.index = pizza.index;
      this.name = pizza.name;
      this.sauceId = pizza.sauceId;
      this.doughId = pizza.doughId;
      this.sizeId = pizza.sizeId;
      this.ingredients = pizza.ingredients;
    },
  },
});
