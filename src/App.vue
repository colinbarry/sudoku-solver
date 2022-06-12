<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Grid from './components/Grid.vue'
import Buttons from './components/Buttons.vue'
import store from './store';
import { ref, onMounted } from 'vue';

const handleKeydown = e => {
  let { r, c } = store.state.selectedCell;

  if (e.key === 'ArrowUp' && r > 0) {
    e.preventDefault();
    r = r - 1;
    store.actions.selectCell(r, c);
  } else if (e.key === 'ArrowDown' && r < 8) {
    e.preventDefault();
    r = r + 1;
    store.actions.selectCell(r, c);
  } else if (e.key === 'ArrowLeft' && c > 0) {
    e.preventDefault();
    c = c - 1;
    store.actions.selectCell(r, c);
  } else if (e.key === 'ArrowRight' && c < 8) {
    e.preventDefault();
    c = c + 1;
    store.actions.selectCell(r, c);
  } else if (e.key === 'Backspace') {
      store.actions.updateCell(r, c, undefined);
  } else {
    const num = parseInt(e.key);
    if (num >= 1 && num <= 9) {
      store.actions.updateCell(r, c, num);
    }
  }
}

</script>

<template>
  <main class="main" @keydown="handleKeydown">
    <Grid />
    <Buttons />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
background: #f8f8f8;
}

#app {
  --main-colour: #1976D2;
  --selected-cell: RGBA(244, 162, 74, 0.5);
  --focus: var(--main-colour);
  font-family: 'Lexend Deca', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  --grid-colour: #ffffff;
  --grid-outline: #b0b0b0;
  --grid-outline--accent: #808080;
  --btn-colour: #ffffff;
  --btn-colour--hover: #f8f8f8;
  --btn-text-colour: var(--main-colour);
  --btn-colour-primary: var(--main-colour);
  --btn-text-colour-primary: #f8f8f8;
  --btn-colour-primary--hover: #198de2;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 23rem;
}

</style>
