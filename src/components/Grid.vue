<template>
<table ref="el"
  :class="{ grid: true, 'grid--error': store.state.hasError }"
  @keydown="handleKeydown"
  @animationend="handleAnimationEnd"
  tabindex="-1"
>
  <tbody>
    <tr class="row" v-for="(_, r) in 9">
      <td class="cell" v-for="(_, c) in 9">
        <CellContent
          :value="store.getters.value(r, c)"
          :isSelected="isSelected(r, c)"
          :onFocus="() => handleFocus(r, c)"
        />
      </td>
    </tr>
  </tbody>
</table>


</template>

<script setup>

import CellContent from './CellContent.vue';
import store from '../store';
import { toRef, watch, onMounted, ref } from 'vue';

const isSelected = (r, c) => {
  const selectedCell = store.state.selectedCell;
  return r === selectedCell.r && c === selectedCell.c;
}

const handleFocus = (r, c) => {
  store.actions.selectCell(r, c);
}

const handleAnimationEnd  = () => {
  store.actions.setHasError(false)
}

const el = ref();
onMounted(() => el.value.focus());

</script>

<style scoped>

.grid {
  border-collapse: collapse;
  flex-grow: 0;
  flex-shrink: 0;
  outline: none;
  background: var(--grid-colour);
}

.grid--error {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-2px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(4px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-8px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(8px, 0, 0);
  }
}

.cell {
  border: 1px solid var(--grid-outline);
  padding: 0;
}

.cell:nth-child(3n):not(:last-child) {
  border-right: 2px solid var(--grid-outline--accent);
}

.row:nth-child(3n):not(:last-child) .cell {
  border-bottom: 2px solid var(--grid-outline--accent);
}

.is-selected {
  background: var(--focus);
}

</style>
