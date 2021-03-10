//Что выведет этот скрипт?
let name = "Ilya";
alert( `hello ${1}` ); // "hello 1"
alert( `hello ${"name"}` ); // "hello name"
alert( `hello ${name}` ); // "hello Ilya"

//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let input = prompt("пожалуйста, введите два числа, разделённые пробелом, например: 2 2");
input = input.split(" ")
alert(+input[0] + +input[1]);

/* Напишите функцию random(min, max), которая генерирует случайное число 
с плавающей точкой от min до max (но не включая max). */
function random (minNum, maxNum) {
    if (minNum - maxNum > 0 || minNum === maxNum) {
      return "неверный ввод";
    }
    return Math.random() * (maxNum - minNum) + minNum;
}