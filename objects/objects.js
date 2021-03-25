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

/* Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
Например:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое. */

const aclean = (arr) => {
  let map = new Map();
  for (let word of arr) {
    let sorted = word
      .toLowerCase()
      .split('')
      .sort()
      .join('');
    map.set(sorted, word);
  }
  return Array.from(map.values());
}

/*Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат 
с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.*/

const sumSalaries = (salaries) => {
  let res = 0;
  for (salary of Object.values(salaries)) {
    res += salary;
  }
  return res;
}

/*Напишите функцию getWeekDay(date), показывающую день недели 
в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».*/

const getWeekDay = (date) => {
  const day = date.getDay();
  switch(day){
    case 0: 
      return 'ВС';
    case 1: 
      return 'ПН';
    case 2: 
      return 'ВТ';
    case 3: 
      return 'СР';
    case 4: 
      return 'ЧТ';   
    case 5: 
      return 'ПТ';
    case 6: 
      return 'СБ';
    default:
      return NaN;
  }
}