// class Cats {
//   constructor(
//     whiskers = "default",
//     teeth = "default",
//     tail = "default",
//     claws = "default"
//   ) {
//     this.whiskers = whiskers;
//     this.teeth = teeth;
//     this.tail = tail;
//     this.claws = claws;
//   }
//   static catsInfo() {
//     console.log(`Every one in Cats class has mrrrrr-engine`);
//   }
// }

// class Lions extends Cats {
//   constructor(whiskers, teeth, tail, claws, mane) {
//     super(whiskers, teeth, tail, claws, mane);
//     this.mane = mane;
//   }
//   get showMeRoar() {
//     console.log(`Roar!!!`);
//   }
//   set nameLions(name) {
//     console.log((this.name = name));
//   }
// }

// let jack = new Lions(true, true, true, true, true);
// console.log(jack);

// jack.showMeRoar;
// jack.nameLions = "Jack";

// class HouseCat extends Cats {
//   constructor(whiskers, teeth, tail, claws, color = "default") {
//     super(whiskers, teeth, tail, claws);
//     this.color = color;
//   }
//   get scratch() {
//     console.log(`Все кошки царапают обои!!!`);
//   }
//   set nameHouseCat(name) {
//     this.name = name;
//   }
//   get;
// }
// let kuzya = new HouseCat(true, true, true, true, "white");
// console.log(kuzya);

// kuzya.scratch;
// kuzya.nameHouseCat = "Кузя";
// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================

// =====   module - 06 быстрый проход================================

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// arr.forEach((elem) => console.log((elem = elem * 2)));

// const a = arr.map((elem) => elem * 2);
// console.log(a);

// const fn = function (elem) {
//   return elem * 5;
// };

// const b = arr.map(fn);
// console.log(b);

// const users = [
//   { name: "Mango", isActive: true, salary: 100 },
//   { name: "Poly", isActive: false, salary: 50 },
//   { name: "Ajax", isActive: true, salary: 20 },
// ];

// const name = users.map((elem) => `${elem.name} isActive: ${elem.isActive}`);
// console.log(name);

// const active = users.filter((elem) => elem.isActive);
// console.log(active);

// const active50 = users.filter((elem) => elem.salary < 50);
// console.log(active50);

// const poly = users.find((elem) => elem.name === "Poly");
// console.log(poly);

// const some = users.some((elem) => elem.salary > 100);
// console.log(some);

// const every = users.every((elem) => elem.salary > 50);
// console.log(every);

// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================
// _________________ hw-05_______ task-01________________________
// Напиши функцию-конструктор Account, которая создает объект
// со свойствами login и email.В prototype функции
// - конструктора добавь метод getInfo(), который выводит
// в консоль значения полей login и email объекта который
// его вызвал.
// const Account = function ({ login, email }) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };
// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com
// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================
// _________________ hw-05_______ task-02________________________
// Напиши класс User для создания пользователя со следующим свойствами:
//        - name - строка
//        - age - число
//        - followers - число
// Добавь метод getInfo(), который, выводит строку:
// User ${ имя } is ${ возраст } years old and has
// ${ кол - во фоловеров } followers

// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo = function () {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   };
// }

// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers
// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================
// _________________ hw-05_______ task-03________________________
/*   Напиши класс Storage, который будет создавать объекты для управления
     складом товаров. При вызове будет получать один аргумент - начальный
     массив товаров, и записывать его в свойство items.

     Добавь методы класса:

    - getItems() - возвращает массив текущих товаров
    - addItem(item) - получает новый товар и добавляет его к текущим
    - removeItem(item) - получет товар и, если он есть, удаляет его из текущих */
// class Storage {
//   constructor([...items]) {
//     this.items = items;
//   }
//   getItems = function () {
//     return this.items;
//   };
//   addItem = function (newElem) {
//     this.items.push(newElem);
//   };
//   removeItem = function (value) {
//     for (let el of this.items) {
//       if (el === value) {
//         return this.items.splice(el === value, 1);
//       }
//     }
//   };
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================
// _________________ hw-05_______ task-04________________________
/* Напиши класс StringBuilder. На вход он получает один параметр - строку,
   которую записывает в свойство _value.

   Добавь классу следующий функционал:

     - Геттер value - возвращает текущее значение поля _value
     
     - Метод append(str) - получает парметр str (строку) и добавляет ее 
                           в конец _value
     - Метод prepend(str) - получает парметр str (строку) и добавляет ее 
                           в начало value
     - Метод pad(str) - получает парметр str (строку) и добавляет ее  
                            в начало и в конец _value 
*/
// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }
//   get currentValue() {
//     console.log(`Текущее состояние value: ${this.value}`);
//   }
//   append(str) {
//     return (this.value = this.value + str);
//   }
//   prepend(str) {
//     return (this.value = str + this.value);
//   }
//   pad(str) {
//     return (this.value = str + this.value + str);
//   }
// }
// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='
// builder.currentValue;
// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================
// _________________ hw-05_______ task-05________________________
/*
Напиши класс Car с указанными свойствами и методами.
 */
// class Car {
//   static getSpecs({ maxSpeed, _price, speed, isOn, distance }) {
//     console.log(
//       `maxSpeed: ${maxSpeed}, price: ${_price}, speed: ${speed}, isOn: ${isOn}, distance: ${distance} `
//     );
//   }
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor({
//     maxSpeed = 0,
//     price = 0,
//     speed = 0,
//     isOn = false,
//     distance = 0,
//   }) {
//     this.maxSpeed = maxSpeed;
//     this._price = price;
//     this.speed = speed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     return (this._price = value);
//   }
//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     let newSpeed = this.speed + value;
//     if (newSpeed < this.maxSpeed) {
//       this.speed = newSpeed;
//     } else {
//       console.log("Скорость превышает максимальое значение");
//     }
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     let newSpeed = this.speed - value;
//     if (newSpeed >= 0) {
//       this.speed = newSpeed;
//     } else {
//       console.log("Ты стоишь на месте");
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//     } else {
//       console.log("Заведи машину!");
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================
