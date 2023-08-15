export default function createGrid() {
  const grid = [];
  let box = [];

  for (let i = 1; i <= 9; i++) {
    for (let r = 1; r <= 3; r++) {
      let row = 0;

      if (i <= 3) {
        row = r;
      } else if (i >= 4 && i <= 6) {
        row = r + 3;
      } else {
        row = r + 6;
      }

      for (let c = 1; c <= 3; c++) {
        let col;

        if ([1, 4, 7].includes(i)) {
          col = c;
        } else if ([2, 5, 8].includes(i)) {
          col = c + 3;
        } else {
          col = c + 6;
        }

        box.push({
          row: row,
          col: col,
        });
      }
    }

    grid.push(box);
    box = [];
  }

  return grid;
}
