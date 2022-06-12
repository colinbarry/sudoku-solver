const positionToIndex = (r, c) => {
  return r * 9 + c;
};

const isValidMove = (values, r, c, num) => {
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

const place = (values, n) => {
  if (n === 81) {
    return values;
  }
  else if (values[n]) {
    return place([...values], n + 1);
  } else {
    const r = Math.floor(n / 9);
    const c = n % 9;
    for (let i = 1; i <= 9; ++i) {
      if (isValidMove(values, r, c, i)) {
        const next = place([...values.slice(0, n), i, ...values.slice(n + 1)], n + 1);
        if (next) {
          return next;
        }
      }
    }
  }
}

const solveFor = values => {
  return place(values, 0);
}

self.addEventListener('message', e => {
  const result = solveFor(e.data);
  self.postMessage(result);
});
