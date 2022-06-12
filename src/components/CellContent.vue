<template>

<div
  :class="{ number: true, 'number--selected': props.isSelected }"
  tabindex="-1"
  @focus="props.onFocus"
>
  <div :class="{ inner: true, 'inner--populated': Boolean(value) }">
      {{ value }}
  </div>
</div>

</template>

<script setup>

const props = defineProps({
  value: Number,
  isSelected: Boolean,
  onFocus: Function
});


</script>

<style scoped>
.number {
  border: none;
  width: 1rem;
  height: 1rem;
  outline: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  user-select: none;
  padding: 1.3rem;
  color: #202060;
}

.inner {
  transform: scale(0);
  transition: transform 75ms cubic-bezier(.29,-0.25,.76,1.39);
}

.inner.inner--populated {
  transform: scale(1);
}

.number--selected {
  background: var(--selected-cell);
}
</style>
