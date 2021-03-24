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