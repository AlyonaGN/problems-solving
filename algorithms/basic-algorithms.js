/*Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.*/
//решение через рекурсию
const sumTo = (num) => {
    if (num === 1) {
      return num;
    }
    else {
      return num + sumTo(num - 1);
    }
}
//решение через арифметическую прогрессию
const sumTo = (num) => {
    return ((1 + 100) / 2) * 100;
}

//решение с циклом 
const sumTo = (num) => {
    let res = num; 
    for (let i = num - 1; i > 0; i--) {
      res = res + i;
    }
      return res;
}