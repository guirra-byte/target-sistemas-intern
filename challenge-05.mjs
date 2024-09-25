const reverseString = (_str) => {
  let reverse = "";
  for (let index = _str.length - 1; index >= 0; index--) {
    reverse += _str[index];
  }

  console.log(reverse);
};

reverseString("target");
