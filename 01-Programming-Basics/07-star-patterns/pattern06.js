// pattren6
for (let i = 0; i < 5; i++) {
  let row = "";
  for (k = 0; k < 5 - i; k++) {
    row = row + "-";
  }
  for (let j = 0; j < i + 1; j++){
    row= row+"*"
  }
  console.log(row);

}
