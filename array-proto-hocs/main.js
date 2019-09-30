'use strict';
function compareArrays(arr1, arr2){
  return (arr1.length === arr2.length) && (arr1.every(item => arr1.indexOf(item) === arr2.indexOf(item)));
}

const sum = (a) => {
  let sums = 0;
  for(let i of a) {
    sums += i;
  }
  return sums;
}

function memoize(fn, limit) {
  let results = [];
  return (...argument) => {
    const searchMemo = results.find(itemR => compareArrays(itemR.args, Array.from(argument)));

    if (searchMemo) {
      return `From memo - ${searchMemo.result}`;
    } else {
      let result = fn(argument);
      results.push({
        args: Array.from(argument),
        result: result
      });
      if (results.length > limit) results.shift();
      return `New - ${result}`;
    }
  }
}

let ca = memoize(sum, 10);

console.log(ca(1, 2, 3));
console.log(ca(2, 2, 3));
console.log(ca(1, 2, 3));
console.log(ca(2, 2, 3));
console.log(ca(3, 2, 3));
console.log(ca(4, 2, 3));
console.log(ca(5, 2, 3));
console.log(ca(6, 2, 3));
console.log(ca(7, 2, 3));
console.log(ca(8, 2, 3));
console.log(ca(9, 2, 3));
console.log(ca(10, 2, 3));
console.log(ca(11, 2, 3));
console.log(ca(12, 2, 3));
