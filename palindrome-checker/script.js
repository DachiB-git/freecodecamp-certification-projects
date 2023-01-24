function palindrome(str) {
  const readyStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return readyStr.split("").reverse().join("") === readyStr;
}
