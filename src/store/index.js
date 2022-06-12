import { reactive, readonly } from 'vue';
import { isValidMove } from '../grid.js';

const positionToIndex = (r, c) => {
  return r * 9 + c;
};

const _ = undefined;
const testStore = [
  1, _, 9, _, _, _, _, 4, 5,
  _, _, _, _, 5, _, 1, 6, _,
  _, 6, _, _, _, 2, _, _, _,
  _, _, _, 3, 2, _, _, _, 9,
  _, 5, 1, 6, 8, _, 4, 7, 2,
  2, 9, 8, 5, 7, _, 3, 1, _,
  _, 1, 3, _, 9, 7, _, _, _,
  _, _, _, _, 1, _, _, _, 4,
  6, _, 2, _, _, 5, 7, _, _
];

const useStore = () => {
  const state = reactive({
    values: testStore,
    selectedCell: { r: 0, c: 0 },
    hasError: false
  });

  const selectCell = (r, c) => state.selectedCell = { r, c };
  const updateCell = (r, c, value) => {
    if (isValidMove(state.values, r, c, value)) {
      state.values[positionToIndex(r, c)] = value; 
    } else {
      state.hasError = true;
    }
  }
  const updateCells = values => state.values = values;
  const setHasError = hasError => state.hasError = hasError;
  const value = (r, c) => state.values[positionToIndex(r, c)];

  return {
    state: readonly(state),
    actions: { selectCell, updateCell, setHasError, updateCells },
    getters: { value }
  };
}

export default useStore();
