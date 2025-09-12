const add = async function (a, b) {
  delay(10);

  if (a < 0) throw new Error("not supported");

  return a + b;
};

const result = await add(-2, 3);
console.log(result);
// 1

console.log(1);

// todo
// todo
// * important
// ! deprecant
