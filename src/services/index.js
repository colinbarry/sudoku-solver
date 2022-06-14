import store from '../store';

const worker = new Worker(new URL('../workers/solver.js', import.meta.url));

export default function solve(values) {
  worker.postMessage([...values]);
}

worker.addEventListener('message', e => {
  const values = e.data;
  if (values) {
    store.actions.updateCells(values);
  } else {
    store.actions.setHasError(true);
  }
});
