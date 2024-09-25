const fibonacciSequence = (_input) => {
  let previous = 0;
  let current = 1;
  let tmp;

  let inSequence = false;
  for (let index = 0; index < 50; index++) {
    tmp = current;
    current = previous + current;
    previous = tmp;

    if (current === _input) {
      inSequence = true;
      console.log("Faz parte da sequência;");
      break;
    }

    if (current > _input && !inSequence) {
      console.log("Não faz parte da sequência;");
      break;
    }
  }
};

fibonacciSequence(22);
