/* Напишите функцию, которая будет принимать объект и строку вида 'a.b.c.d' и возвращать
значение, которое лежит во вложенный во входящий объект объекте в соответствии с переданной строкой*/
function findProp(obj, path) {
  const props = path.split('.');
  let res = obj;
  props.forEach((prop) => {
    res = res[prop];
  })
  return res;
}

/* Напишите функцию isEmpty(obj), которая возвращает true, 
если у объекта нет свойств, иначе false.*/
const isEmpty = (obj) => {
    for (let key in obj) {
      return false;
    }
    return true;
}

/*Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств. */
function Calculator(){
  this.read = () => {
    this.first = +prompt('first');
    this.second = +prompt('second');
  }
  this.sum = () => {
    return this.first + this.second;
  }
  this.mul = () => {
    return this.first * this.second;
  }
}
