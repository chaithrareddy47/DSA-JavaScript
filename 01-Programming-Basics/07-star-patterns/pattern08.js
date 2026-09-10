for (let i = 0; i < 5; i++) {
  let row = "";
  let switchBtn = 1;
  for (j = 0; j < i + 1; j++) {
    row = row + switchBtn;
    if (switchBtn === 1) {
      switchBtn = 0;
    } else {
      switchBtn = 1;
    }
  }
  console.log(row);
}
