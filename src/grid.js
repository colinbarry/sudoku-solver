const positionToIndex = (r, c) => {
  return r * 9 + c;
};

export const isValidMove = (values, r, c, num) => {
  if (num == undefined) {
    return true;
  }

  for (let i = 0; i < 9; ++i) {
    if (i !== c && values[positionToIndex(r, i)] === num) {
      return false;
    }
  }

  for (let i = 0; i < 9; ++i) {
    if (i !== r && values[positionToIndex(i, c)] === num) {
      return false;
    }
  }

  const rBlock = 3 * Math.floor(r / 3);
  const cBlock = 3 * Math.floor(c / 3);

  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      const rCell = rBlock + i;
      const cCell = cBlock + j;
      if (rCell !== r && cCell !== c && values[positionToIndex(rCell, cCell)] === num) {
        return false;
      }
    }
  }

  return true;
}

