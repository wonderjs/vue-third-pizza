<template>
  <div class="counter" :class="{ 'counter--orange': accent }">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="value === min"
      @click="decrementValue()"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="value"
      @input="inputValue($event.target.value)"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :disabled="value === max"
      @click="incrementValue()"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  accent: {
    type: Boolean,
    default: false,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
});

const emit = defineEmits(['update']);

const decrementValue = () => emit('update', props.value - 1);
const incrementValue = () => emit('update', props.value + 1);

const inputValue = (count) => {
  emit('update', Math.min(props.max, Number(count)));
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ds-system/ds.scss';
@use '@/assets/scss/mixins/mixins';

.counter {
  display: flex;

  justify-content: space-between;
  align-items: center;
}

.counter__button {
  $el: &;
  $size_icon: 50%;

  position: relative;

  display: block;

  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  transition: 0.3s;

  border: none;
  border-radius: 50%;
  outline: none;

  &--minus {
    background-color: ds.$purple-100;

    &::before {
      @include mixins.p_center-all;

      width: $size_icon;
      height: 2px;

      content: '';

      border-radius: 2px;
      background-color: ds.$black;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: ds.$purple-200;
    }

    &:active:not(:disabled) {
      background-color: ds.$purple-300;
    }

    &:focus:not(:disabled) {
      box-shadow: ds.$shadow-regular;
    }

    &:disabled {
      cursor: default;

      &::before {
        opacity: 0.1;
      }
    }
  }

  &--plus {
    background-color: ds.$green-500;

    &::before {
      @include mixins.p_center-all;

      width: $size_icon;
      height: 2px;

      content: '';

      border-radius: 2px;
      background-color: ds.$white;
    }

    &::after {
      @include mixins.p_center-all;

      width: $size_icon;
      height: 2px;

      content: '';
      transform: translate(-50%, -50%) rotate(90deg);

      border-radius: 2px;
      background-color: ds.$white;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: ds.$green-400;
    }

    &:active:not(:disabled) {
      background-color: ds.$green-600;
    }

    &:focus:not(:disabled) {
      box-shadow: ds.$shadow-regular;
    }

    &:disabled {
      cursor: default;

      opacity: 0.3;
    }
  }

  &--orange {
    background-color: ds.$orange-200;

    &:hover:not(:active):not(:disabled) {
      background-color: ds.$orange-100;
    }

    &:active:not(:disabled) {
      background-color: ds.$orange-300;
    }
  }
}

.counter__input {
  @include ds.r-s14-h16;

  box-sizing: border-box;
  width: 22px;
  margin: 0;
  padding: 0 3px;

  text-align: center;

  color: ds.$black;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: transparent;

  &:focus {
    box-shadow: inset ds.$shadow-regular;
  }
}
</style>
