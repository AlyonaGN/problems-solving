/* Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.
Return your answer as a number.
 */
const sumMix = x => x.reduce((acc, cur) => acc + +cur, 0);


/* The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0] */

function partsSums(ls) {
    let result = [];
    let totalSum = ls.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    result.push(totalSum);

    for (let i = 0; i < ls.length; i++) {
      totalSum = totalSum - ls[i];
      result.push(totalSum);
    }
    return result;
}

/* An ordered sequence of numbers from 1 to N is given. 
One number might have deleted from it, then the remaining numbers were mixed. 
Find the number that was deleted.
Example:
The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, 
your function should return the int 0.
Note: N may be 1 or less (in the latter case, the first array will be []). */
function findDeletedNumber(arr, mixArr) {
    if (arr.length === mixArr.length) return 0;
    let arrSum = arr.reduce((acc, cur) => acc + cur, 0);
    let mixSum = mixArr.reduce((acc, cur) => acc + cur, 0);
    let result = arrSum - mixSum;
    return result;
}

/*We need to sum big numbers and we require your help.
Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives */
function add(a, b) {
  a = a.split("").reverse();
  b = b.split("").reverse();
  const result = [];
  let surplus = 0;
  
  const longerArray = a.length >= b.length ? a : b;
  const shorterArray = a.length < b.length ? a : b;
  
  for (let i = 0; i < longerArray.length; i++) {
      let numb = +longerArray[i] + ~~shorterArray[i] + surplus;
      if (numb > 9) {
        numb = numb - 10;
        surplus = 1;
      }
      else {
        surplus = 0;
      }
      result.push(numb);
  }
  if (surplus) {
    result.push(surplus);
  }
  return result.reverse().join("");
}