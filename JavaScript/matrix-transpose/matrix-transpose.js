var transpose = (grid) => {
  var newArray = grid[0].map((num, i) => {
    return grid.map((row) => row[i]);
  });
  return newArray;
}





//logging the answer on the terminal on save
console.log(transpose([
  [1,2,3,4],
  [9,9,9,9],
  ['a','b','c','d']
]));
