function telephoneCheck(str) {
  const reg =
    /^(1\s?)?((\(\d{3}\))|\d{3})(-|\s)?((\(\d{3}\))|\d{3})(-|\s)?((\(\d{4}\))|\d{4})$/;
  return reg.test(str);
}
