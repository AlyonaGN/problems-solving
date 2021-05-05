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