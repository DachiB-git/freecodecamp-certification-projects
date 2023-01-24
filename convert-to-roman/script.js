function convertToRoman(num) {
  const numStr = num.toString();
  const numArr = numStr
    .split("")
    .map((num, i) => +num * 10 ** (numStr.length - 1 - i))
    .reverse();
  return numArr
    .map((num, i) => toRoman(num, i))
    .reverse()
    .join("");
}
function toRoman(num, digitCount) {
  const possibilities = [
    (num) =>
      num === 9
        ? "IX"
        : num === 4
        ? "IV"
        : `${num >= 5 ? "V" : ""}${"I".repeat(num % 5)}`,
    (num) =>
      num === 90
        ? "XC"
        : num >= 50
        ? `L${"X".repeat((num % 50) / 10)}`
        : num === 40
        ? "XL"
        : "X".repeat(num / 10),
    (num) =>
      num === 900
        ? "CM"
        : num >= 500
        ? `D${"C".repeat((num % 500) / 100)}`
        : num === 400
        ? "CD"
        : "C".repeat(num / 100),
    (num) => "M".repeat(num / 1000),
  ];

  return possibilities[digitCount < 3 ? digitCount : 3](num);
}
