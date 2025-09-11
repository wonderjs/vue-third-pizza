<template>
  <div class="sheet">
    <h2 class="title title--small sheet__title">{{ title }}</h2>
    <div class="sheet__content diameter" :class="contentClass">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: { type: String, default: '' },
  contentClass: { type: String, default: '' },
});
</script>

<style lang="scss">
@use '@/assets/scss/ds-system/ds';
@use '@/assets/scss/mixins/mixins';

.sheet {
  padding-top: 15px;

  border-radius: 8px;
  background-color: ds.$white;
  box-shadow: ds.$shadow-light;
}

.sheet__title {
  padding-right: 18px;
  padding-left: 18px;
}

.sheet__content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 8px;
  padding-top: 18px;
  padding-right: 18px;
  padding-left: 18px;

  border-top: 1px solid rgba(ds.$green-500, 0.1);
}
</style>
