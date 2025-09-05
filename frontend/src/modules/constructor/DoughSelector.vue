<template>
  <app-sheet title="Выберите тесто" content-class="dough">
    <label
      v-for="doughType in items"
      :key="doughType.id"
      class="dough__input"
      :class="`dough__input--${doughType.value}`"
    >
      <input
        class="visually-hidden"
        type="radio"
        name="dough"
        :value="doughType.value"
        :checked="doughType.value === modelValue"
        @input="emit('update:modelValue', doughType.value)"
      />
      <b>{{ doughType.name }}</b>
      <span>{{ doughType.description }}</span>
    </label>
  </app-sheet>
</template>

<script setup>
import AppSheet from '@/common/components/AppSheet.vue';

defineProps({
  modelValue: {
    type: String,
    default: '',
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

.dough__input {
  position: relative;

  margin-right: 8%;
  margin-bottom: 20px;
  padding-left: 50px;

  cursor: pointer;

  b {
    @include ds.r-s16-h19;

    &::before {
      @include mixins.p_center-v;

      width: 36px;
      height: 36px;

      content: '';
      transition: 0.3s;

      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  span {
    @include ds.l-s11-h13;

    display: block;
  }

  &--light {
    b {
      &::before {
        background-image: url('@/assets/img/dough-light.svg');
      }
    }
  }

  &--large {
    b {
      &::before {
        background-image: url('@/assets/img/dough-large.svg');
      }
    }
  }

  &:hover {
    b::before {
      box-shadow: ds.$shadow-regular;
    }
  }

  input {
    &:checked + b::before {
      box-shadow: ds.$shadow-large;
    }
  }
}
</style>
