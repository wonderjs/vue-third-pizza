<template>
  <div class="popup">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/ds-system/ds';
@use '@/assets/scss/mixins/mixins';

.popup {
  @include mixins.pf_center-all;

  z-index: 10;

  display: block;

  box-sizing: border-box;
  width: 420px;
  padding: 64px 95px;

  background-color: ds.$white;
  box-shadow: ds.$shadow-light;

  &::before,
  &::after {
    position: absolute;

    width: 48px;
    height: 48px;

    content: '';

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &::before {
    top: 15px;
    left: 15px;

    background-image: url('@/assets/img/filling/ananas.svg');
  }

  &::after {
    right: 15px;
    bottom: 15px;

    background-image: url('@/assets/img/filling/tomatoes.svg');
  }

  p {
    margin-top: 24px;
    margin-bottom: 24px;

    text-align: center;
  }
}
</style>
