function checkCashRegister(price, cash, cid) {
  let dif = cash - price;
  const change = [];
  const cidTotal = +cid.reduce((a, b) => a + b[1], 0).toFixed(2);
  const coinValueArr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  const possibleChangeValues = coinValueArr
    .filter((item) => item <= dif)
    .reverse();
  possibleChangeValues.forEach((value) => {
    let difChange = 0;
    if (cid[coinValueArr.indexOf(value)][1] <= dif) {
      change.push(cid[coinValueArr.indexOf(value)]);
      difChange = cid[coinValueArr.indexOf(value)][1];
    } else {
      if (+(dif - (dif % value)).toFixed(2) != 0) {
        change.push([
          cid[coinValueArr.indexOf(value)][0],
          +(dif - (dif % value)).toFixed(2),
        ]);
      }

      difChange = +(dif - (dif % value)).toFixed(2);
    }
    dif = +(dif - difChange).toFixed(2);
  });
  const changeTotal = +change.reduce((a, b) => a + b[1], 0).toFixed(2);
  if (cidTotal < cash - price || changeTotal < cash - price) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cidTotal === changeTotal) {
    return { status: "CLOSED", change: cid };
  } else {
    return { status: "OPEN", change };
  }
}
