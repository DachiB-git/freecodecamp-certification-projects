function rot13(str) {
  return str
    .split("")
    .map((char) =>
      str.match(/\w/g).includes(char)
        ? String.fromCharCode(
            char.charCodeAt(0) - (char.charCodeAt(0) >= 78 ? 13 : -13)
          )
        : char
    )
    .join("");
}
