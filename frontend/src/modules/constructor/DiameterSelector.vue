<template>
  <app-sheet title="Выберите размер" content-class="diameter">
    <label
      v-for="sizeType in items"
      :key="sizeType.id"
      class="diameter__input"
      :class="`diameter__input--${sizeType.value}`"
    >
      <input
        type="radio"
        name="diameter"
        :value="sizeType.id"
        :checked="sizeType.id === modelValue"
        class="visually-hidden"
        @input="emit('update:modelValue', sizeType.id)"
      />
      <span>{{ sizeType.name }}</span>
    </label>
  </app-sheet>
</template>

<script lang="ts" setup>
import AppSheet from '@/common/components/AppSheet.vue';

defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    default: () => {},
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ds-system/ds';
@use '@/assets/scss/mixins/mixins';

.diameter__input {
  margin-right: 8.7%;
  margin-bottom: 20px;
  padding-top: 7px;
  padding-bottom: 6px;

  cursor: pointer;

  span {
    @include ds.r-s16-h19;

    position: relative;

    padding-left: 46px;

    &::before {
      @include mixins.p_center_v;

      width: 36px;
      height: 36px;

      content: '';
      transition: 0.3s;

      border-radius: 50%;
      background-color: ds.$green-100;
      background-image: url('@/assets/img/diameter.svg');
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &--small {
    span::before {
      background-size: 18px;
    }
  }

  &--normal {
    span::before {
      background-size: 29px;
    }
  }

  &--big {
    span::before {
      background-size: 100%;
    }
  }

  &:hover {
    span::before {
      box-shadow: ds.$shadow-regular;
    }
  }

  input {
    &:checked + span::before {
      box-shadow: ds.$shadow-large;
    }
  }
}
</style>
