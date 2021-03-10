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

console.log(add(1)(3)(5)());