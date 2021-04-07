/* Написать функцию add, которая будет вызвана таким способом add(2)(4)(). 
При этом, гарантирован вызов функции с аргументом как минимум один раз, а последний вызов
всегда происходит без аргумента. Программа должна возвращать сумму всех аргументов */

function add(int) {
    let sum = int;

    return function sumIt(nextInt) {
        if (nextInt) {
            sum = sum + nextInt;
            return sumIt;
        }
        else {
            return sum;
        }
    }
}

/* Сделайте «готовый к употреблению» фильтр, он должен использоваться таким образом:
arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно). */

const inBetween = (start, end) => {
    return (num) => {
        return num >= start && num <= end;
    }
}

/* Сделайте «готовый к употреблению» фильтр, он должен использоваться таким образом:
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива */

const inArray = (arr) => {
    return (num) => {
        return arr.includes(num);
    }
}

/* У нас есть массив объектов, который нужно отсортировать:
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
]; 
Сортировка должна вызываться таким образом - 
users.sort(byField('age') */

const byField = (prop) => {
    return (a,b) => a[prop] > b[prop] ? 1 : -1;
}