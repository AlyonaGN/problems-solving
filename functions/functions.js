/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" 
в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
Метод должен понимать плюс + и минус -.
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
*/

function Calculator() {
    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    }
    this.calculate = (string) => {
      let splited = string.split(' ');
      a = +splited[0];
      b = +splited[2];
      operation = splited[1];    
    if (!this.methods[operation] || isNaN(a) || isNaN(b)) {
        return NaN;
    }
    return this.methods[operation](a, b);
    };
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}

/* Напишите функцию sum, которая бы работала следующим образом:
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15 */

const sum = (num) => {
  let counter = num;
  function sumIt(nextNum) {
    counter +=nextNum;
    return sumIt;
  }
  sumIt.toString = function(){
    return counter;
  }
  return sumIt;
}

/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.
Используя setInterval.
Используя рекурсивный setTimeout. */

const printNumbers = (from, to) => {
  let i = from;
 const idInterval = setInterval(function(){
    console.log(i);
    if (i > to) {
      clearInterval(idInterval);
    }
    i++;
  }, 1000);
};

const printNumbers = (from, to) => {
  let i = from;
  const inner = () => {
    console.log(i);
    if (i > to) {
      return;
    }
    setTimeout(inner, 1000);
    i++;
  }
  const timer = setTimeout(inner, 1000);
}

printNumbers(1, 5);

/* Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. */

function toBeDecorated(x) {
  console.log(x);
}

function delay(func, delay) {
  
  return function f() {
    setTimeout(() => func.apply(this, arguments), delay);
  }
}

let f1000 = delay(toBeDecorated, 5000);
let f1500 = delay(toBeDecorated, 1500);

f1000("test"); // показывает "test" после 5000 мс
f1500("test1"); // показывает "test1" после 1500 мс

/* Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, 
это гарантирует, что все остальные вызовы будут игнорироваться в течение ms. */

let f = debounce(console.log, 1000);

function debounce(func, pause) {
  let shouldPause = false;
  return function inner(){
    if (shouldPause) {
      return;
    }
    func.apply(this, arguments);
    shouldPause = true;
    setTimeout(() => {
      shouldPause = false
    }, pause);
  }
}

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован
setTimeout( () => f(4), 1100); // выполняется