/*const number=5 
const string="строка"
let object={name:"Kate"}
const array=["string", 9, [{age:25}]]
const count=0
count+1
console.log(count)
count+1
console.log(count+1)
console.log(count)
console.log(count)
console.log(count)
let counter2=2
const counters=[{value:count},{value:counter2}]

console.log(counters)
const bulean=true
const newobject=object
object.name="notkate"
console.log(object.name)
console.log(newobject.name="notkate2")
console.log(object.name)
const spred={value:[...array]}
console.log(spred.name="notkate3")
console.log(object.name)
console.log(spred)*/

/*let number1=3
console.log(number1)
number1=7
console.log(number1)
number1=9
console.log(number1)

let str="hello"
console.log(str.toUpperCase())
console.log(number1+str)
console.log(number1*str)
console.log(number1-str)

const function1=(...another)=>{console.log(another)}
function1(1,2)
// function2()
function3()
// const function2=function(){while (true)
    alert("hello")}
function function3(arg1){return 22+arg1}

console.log(function3(5))

function function4(){
    console.log(this)
}


const function5=(...another)=>{function4();console.log(this)}
function5()

const array=[{age:25}, {age:28}]
const array2=array.map((el)=>{return el.age})
array2.push(3)

console.log(array)
console.log(array2) */

// array

/*let vegetables = ["avocado", "corn", "garlic", "onion", "spinach"];
vegetables.shift();
console.log(vegetables);

// не совсем поняла, как делать другие штуки
// let result = arr.map(function(item, index, array) {});
let lengths = vegetables.map((item) => item.length);
console.log(lengths);

let lengths2 = vegetables.map((item, index) => {
  return item.length;
  //   условия и переменные, return если хочу не полную копию массива
  //   индекс должен быть последним аргументом
  // встроенные методы
});

console.log(lengths2);

let fruits = [
  "apple",
  "banana",
  "peach",
  "orange",
  "coconut",
  "grape",
  "plump",
];
fruits.splice(2, 1);
console.log(fruits);
fruits.splice(-1, 0, "lemon", "mango", "fig");
console.log(fruits);
// вернет не копию, а оригинал массива

console.log(fruits.includes("lemon"));
console.log(fruits.includes("cat"));

// не понимаю, почему так работает
fruits.slice(0, 3);
console.log(fruits);
console.log(fruits.slice(0, 3));

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Миша" },
  { id: 5, name: "Саша" },
  { id: 6, name: "Аня" },
];

// не совсем поняла, как делать другие штуки
let user = users.find((item) => item.id == 4);
console.log(user);
let result = users.find((_, index) => {
  return index == 0;
});
console.log(result);

let users2 = [];

let result2 = users2.map((_, index) => {
  _.id;
  return _.id;
});
console.log(result2);
// обращаюсь к объекту поле которого не сущетсвует вопрос перед точкой (а точно нужно брать)

let wordLength = users.filter((word) => word.name.length < 4);
console.log(wordLength);

let numbers = [1, 12, 15, 32, 5];
let resultSum = numbers.reduce((sum, current) => sum + current, 0);
console.log(resultSum);

let str = numbers.join(".");
console.log(str);

// object

let john = {
  name: "John",
  age: 15,
  height: 160,
  weight: 50,
};

console.log(Object.keys(john));
console.log(Object.values(john));
console.log(Object.entries(john));

for (let value of Object.values(john)) {
  console.log(value);
}

for (let key of Object.keys(john)) {
  console.log(key);
}

let doubleKey = Object.fromEntries(
  Object.entries(john).map(([key, value]) => [value, key * 2])
);
console.log(doubleKey);

let doubleValue = Object.fromEntries(
  Object.entries(john).map(([key, value]) => [key, value * 2])
);
console.log(doubleValue);

let basket = {
  apple: 3,
  banana: 6,
  peach: 4,
  orange: 9,
  coconut: 3,
};

let doubleQuantity = Object.fromEntries(
  Object.entries(basket).map(([key, value]) => [key, value * 2])
);
console.log(doubleQuantity.coconut);
// взять индекс у мапа, обратиться к объекту в его ...

// function

function sum(a, b) {
  a = 12;
  b = 4;
  return a * b;
}
console.log(sum());
// почему не работает без ""

// Function Declaration
function sayHi(name) {
  console.log("Привет, " + name);
}
sayHi("Kate");

/*let age = prompt("Сколько тебе лет?", 1);

console.log(`Тебе ${age} лет!`);*/

// Function Expression
/*let age = prompt("Сколько тебе лет?");

let sayHiAge =
  age >= 18
    ? function () {
        alert("Просмотр разрешен!");
      }
    : function () {
        alert("Просмотр запрещен");
      };

sayHiAge();*/

/*
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "закрыть окно?",
  function () {
    console.log("вы закрыли окно");
  },
  function () {
    console.log("вы не закрыли окно");
  }
);
// ask();

console.log(sum1(50, 8));

function sum1(a, b) {
  return a + b;
}
console.log(sum1(1, 9));

let sum2 = function (a, b) {
  return a + b;
};
console.log(sum2(14, 9));

let sum3 = function sum3(a, b) {
  return a + b;
};
let f = function factorial(n) {
  return n ? n * f(n - 1) : 1;
};
console.log(f(2));

let g = f;
f = null;

let max = {
  name: "Max",
};

max.sayHi1 = function () {
  console.log("hello " + this.name);
};
max.sayHi1();

// замыкание
function sayBye(name) {
  name = prompt("Как тебя зовут");
  let phrase = "Bye, " + name;
  console.log(phrase);
}
sayBye();

console.log(sum4(1)(2));

sum4(1)(2);
function sum4(a) {
  return function (b) {
    return a + b;
  };
}

function makeCounter() {
  let currentCount = 1;

  return function () {
    return currentCount++;
  };
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log("aaaaaaaaaaaaaaaa");

let counter2 = makeCounter();
console.log(counter2());
*/
