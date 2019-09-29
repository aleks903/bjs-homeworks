'use strict';
function compareArrays(arr1, arr2){
  if (arr1.length === arr2.length) {

    if (arr1.every(item => arr1.indexOf(item) === arr2.indexOf(item))) {
      //console.log(`${arr1} and ${arr2} равны - true`);
      return true;
    } else {
      let str = arr1.every(item => arr2.includes(item)) ? ', разные индексы, хотя и одинаковые значения' : ', разные значения';
      //console.log(`${arr1} and ${arr2} равны - false ${str}`);
      return false;
    }
  }
  //console.log(`${arr1} and ${arr2} равны - false , разные значения`);
  return false;
}

compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true
// function sum () {
//   return Array.from(arguments).reduce((a, b) => a + b);
// }

function memoize(fn, limit) {
  let results = [];
  return (...argument) => {
        let searchMemo = false;
if(results.length !== 0) {
    searchMemo = results.some(itemR => {
      if(argument.every((itemA, index) =>  compareArrays(itemA, itemR.args[index]))) {
        console.log(`From memoize ${itemR.result}`);
        return true;
      }
    }
    );
}

    if (!searchMemo) {
      let result = fn(argument[0], argument[1]);
      results.push({args: argument, result: result});
      console.log(`From new ${result}`);
      
      console.log(results.length);
      if (results.length > 10) {
        results.shift();
        console.log('shift');
      }
    }
  }
}

let ca = memoize(compareArrays,2);

console.log(ca([8, 1, 2], [8, 1, 2]));
console.log(ca([8, 1, 2], [8, 1, 3]));
console.log(ca([8, 1, 2], [8, 1, 13]));
console.log(ca([8, 1, 2], [8, 1, 12]));
console.log(ca([8, 1, 2], [8, 1, 11]));
console.log(ca([8, 1, 2], [8, 1, 10]));
console.log(ca([8, 1, 2], [8, 1, 9]));
console.log(ca([8, 1, 2], [8, 1, 8]));
console.log(ca([8, 1, 2], [8, 1, 7]));
console.log(ca([8, 1, 2], [8, 1, 6]));
console.log(ca([8, 1, 2], [8, 1, 5]));
console.log(ca([8, 1, 2], [8, 1, 4]));
console.log(ca([8, 1, 2], [8, 1, 1]));
console.log(ca([8, 1, 2], [8, 1, 3]));
console.log(ca([8, 1, 2], [8, 1, 23]));
console.log(ca([8, 1, 2], [8, 1, 32]));
