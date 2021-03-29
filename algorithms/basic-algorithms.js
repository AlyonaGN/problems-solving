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

/*Факториал натурального числа – это число, умноженное на "себя минус один", 
затем на "себя минус два", и так далее до 1. 
Факториал n обозначается как n!*/

const factorial = (num) => {
  if (num === 1) {
    return num;
  }
  else {
    return num * (factorial(num - 1));
  }
}

/* Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.
 */

const printListRecursive = (list) => {
  console.log(list.value);
  if (list.next) {
    return printList(list.next);
  }
}

const printListCyclic = (list) => {
  while (list) {
    console.log(list.next);
    list = list.next;
  }
}

/* Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию.*/

const printReversedListRecursive = (list) => {
  if (list.next) {
    printList(list.next)
  }
  console.log(list.value);
}

const printReversedListCyclic = (list) => {
  let arr = [];
  while (list) {
    arr.push(list.value);
    list = list.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}