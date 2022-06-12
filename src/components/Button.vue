<template>
<button :class="{ btn: true, 'btn--primary': props.primary }">
  <slot />
</button>
</template>

<script setup>

const props = defineProps({
  primary: Boolean
});

</script>

<style scoped>

.btn {
  color: var(--btn-text-colour);
  background: var(--btn-colour);
  border-radius: 0.4rem;
  width: calc(20% - 0.5rem);
  padding: 0.5rem;
  font-size: 1.1rem;
  outline: none;
  margin: 0.25rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.8), 0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  position: relative;
  top: 0;
  transition: top 20ms ease-in-out, box-shadow 20ms ease-in-out, outline-offset 100ms ease-in-out;
  outline-offset: 0;
  border: 0;
}

.btn:hover {
  background: var(--btn--colour--hover);
}

.btn:active {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px;
  top: 0.05rem;
}

.btn:focus-visible {
  outline: 2px solid var(--main-colour);
  outline-offset: 3px;
}

.btn.btn--primary {
  align-self: flex-start;
  color: var(--btn-text-colour-primary);
  background: var(--btn-colour-primary);
  width: 40%;
  border-color: #555;
}
.btn--primary:hover {
  background: var(--btn-colour-primary--hover);
}
</style>

