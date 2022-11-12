import forEach, { forEachObject, unless } from "../lib/es8-functional";

const array = [1, 2, 3];

forEach(array, (data) => console.log(data));

const obj = { a: 4, b: 2 };

forEachObject(obj, (k, v) => console.log(`${k} : ${v}`));

forEach([1, 2, 3, 4, 5, 6, 7], (num) => {
  unless(num % 2, () => {
    console.log(`${num} is even`);
  });
});
