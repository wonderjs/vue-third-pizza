<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <label
          v-for="sizeType in sizeItems"
          :key="sizeType.id"
          class="diameter__input"
          :class="`diameter__input--${sizeType.value}`"
        >
          <input
            type="radio"
            name="diameter"
            :value="sizeType.value"
            class="visually-hidden"
          />
          <span>{{ sizeType.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { normalizeSize } from '@/common/helpers/normalize';
import sizesJSON from '@/mocks/sizes.json';

const sizeItems = sizesJSON.map(normalizeSize);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ds-system/ds';
@use '@/assets/scss/mixins/mixins';
</style>
