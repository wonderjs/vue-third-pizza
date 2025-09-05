<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <div class="content__dough">
          <dough-selector :v-model="pizza.dough" :items="doughItems" />
        </div>
        <div class="content__diameter">
          <diameter-selector :v-model="pizza.diameter" :items="sizeItems" />
        </div>

        <div class="content__ingredients">
          <app-sheet title="Выберите ингредиенты" content-class="ingredients">
            <sauce-selector :v-model="pizza.sauce" :items="sauceItems" />
            <ingredients-selector
              :values="pizza.ingredients"
              :items="ingredientItems"
              @update="updateIngredientAmount"
            />
          </app-sheet>
        </div>
        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>
          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>
          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import {
  normalizeDough,
  normalizeIngredients,
  normalizeSauces,
  normalizeSize,
} from '@/common/helpers/normalize';
import DoughSelector from '@/modules/constructor/DoughSelector.vue';

import doughJSON from '@/mocks/dough.json';
import ingredientsJSON from '@/mocks/ingredients.json';
import saucesJSON from '@/mocks/sauces.json';
import sizesJSON from '@/mocks/sizes.json';
import DiameterSelector from '@/modules/constructor/DiameterSelector.vue';
import SauceSelector from '@/modules/constructor/SauceSelector.vue';
import IngredientsSelector from '@/modules/constructor/IngredientsSelector.vue';
import AppSheet from '@/common/components/AppSheet.vue';

const doughItems = doughJSON.map(normalizeDough);
const ingredientItems = ingredientsJSON.map(normalizeIngredients);
const sauceItems = saucesJSON.map(normalizeSauces);
const sizeItems = sizesJSON.map(normalizeSize);

const pizza = reactive({
  dough: doughItems[0].value,
  diameter: sizeItems[0].value,
  sauce: sauceItems[0].value,
  ingredients: ingredientItems.reduce((acc, item) => {
    acc[item.value] = 0;
    return acc;
  }, {}),
});

const updateIngredientAmount = (ingredient, count) => {
  pizza.ingredients[ingredient] = count;
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ds-system/ds';
@use '@/assets/scss/mixins/mixins';

.content__dough {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

.content__diameter {
  width: 373px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.content__ingredients {
  width: 527px;
  margin-top: 15px;
  margin-right: auto;
  margin-bottom: 15px;
}

.content__pizza {
  width: 373px;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>

<style lang="scss" scoped>
@use '@/assets/scss/ds-system/ds';
@use '@/assets/scss/mixins/mixins';

.pizza {
  position: relative;

  display: block;

  box-sizing: border-box;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &--foundation--big-creamy {
    background-image: url('@/assets/img/foundation/big-creamy.svg');
  }

  &--foundation--big-tomato {
    background-image: url('@/assets/img/foundation/big-tomato.svg');
  }

  &--foundation--small-creamy {
    background-image: url('@/assets/img/foundation/small-creamy.svg');
  }

  &--foundation--small-tomato {
    background-image: url('@/assets/img/foundation/small-tomato.svg');
  }
}

.pizza__wrapper {
  width: 100%;
  padding-bottom: 100%;
}

.pizza__filling {
  $bl: &;
  position: absolute;
  top: 0;
  left: 0;

  display: block;

  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::before,
  &::after {
    display: none;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: '';

    background-image: inherit;
  }

  &--second {
    &::before {
      display: block;

      transform: rotate(45deg);
    }
  }

  &--third {
    &::before {
      display: block;

      transform: rotate(45deg);
    }

    &::after {
      display: block;

      transform: rotate(-45deg);
    }
  }

  &--ananas,
  &--ananas.pizza__filling--second::before,
  &--ananas.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/ananas.svg');
  }

  &--bacon,
  &--bacon.pizza__filling--second::before,
  &--bacon.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/bacon.svg');
  }

  &--blue_cheese,
  &--blue.pizza__filling--second::before,
  &--blue.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/blue_cheese.svg');
  }

  &--cheddar,
  &--cheddar.pizza__filling--second::before,
  &--cheddar.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/cheddar.svg');
  }

  &--chile,
  &--chile.pizza__filling--second::before,
  &--chile.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/chile.svg');
  }

  &--ham,
  &--ham.pizza__filling--second::before,
  &--ham.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/ham.svg');
  }

  &--jalapeno,
  &--jalapeno.pizza__filling--second::before,
  &--jalapeno.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/jalapeno.svg');
  }

  &--mozzarella,
  &--mozzarella.pizza__filling--second::before,
  &--mozzarella.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/mozzarella.svg');
  }

  &--mushrooms,
  &--mushrooms.pizza__filling--second::before,
  &--mushrooms.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/mushrooms.svg');
  }

  &--olives,
  &--olives.pizza__filling--second::before,
  &--olives.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/olives.svg');
  }

  &--onion,
  &--onion.pizza__filling--second::before,
  &--onion.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/onion.svg');
  }

  &--parmesan,
  &--parmesan.pizza__filling--second::before,
  &--parmesan.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/parmesan.svg');
  }

  &--salami,
  &---salami.pizza__filling--second::before,
  &---salami.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/salami.svg');
  }

  &--salmon,
  &--salmon.pizza__filling--second::before,
  &--salmon.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/salmon.svg');
  }

  &--tomatoes,
  &--tomatoes.pizza__filling--second::before,
  &--tomatoes.pizza__filling--third::after {
    background-image: url('@/assets/img/filling-big/tomatoes.svg');
  }
}
</style>
