// const CarCreator = function (
//   name = "defaul",
//   age = "defaul",
//   color = "defaul",
//   fueltype = "defaul",
//   weight = "defaul",
//   speed = "defaul"
// ) {
//   this.name = name;
//   this.age = age;
//   this.color = color;
//   this.fueltype = fueltype;
//   this.weight = weight;
//   this.speed = speed;
//   this.checkAcceleration = function () {
//     this.acceleration = this.weight * this.speed;
//     // console.log(this.weight * this.speed);
//   };
// };

// const ferrari = new CarCreator("Ferrari", 5, "red", "gas", 1200, 320);

// console.log(ferrari);
// ferrari.checkAcceleration();
// =======================================================================
// ==========================   ==========================================
// ==========================   ==========================================
// ==========================   ==========================================
// =======================         =======================================
// =========================     =========================================
// =========================== ===========================================
// =======================================================================
// const Telephone = function (
//   model = "defaul",
//   weight = "defaul",
//   battery = "defaul",
//   height = "default",
//   width = "default"
// ) {
//   this.model = model;
//   this.weight = weight;
//   this.battery = battery;
//   this.height = height;
//   this.width = width;
//   this.CalculateInch = function () {
//     this.inch = Math.floor(
//       Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2)) / 2.54
//     );
//   };
// };

// const samsung = new Telephone("Samsung Note 10+", 100, 6000, 16, 8);
// console.log(samsung);
// samsung.CalculateInch();

// const iphone = new Telephone("Iphone X", 80, 2400, 10, 4);
// console.log(iphone);
// iphone.CalculateInch();
// =======================================================================
// ==========================   ==========================================
// ==========================   ==========================================
// ==========================   ==========================================
// =======================         =======================================
// =========================     =========================================
// =========================== ===========================================
// =======================================================================
/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)
  Имя, возраст и кол-во друзей, 
  будут переданы при вызове конструктора User.
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

// const User = function (name, age, friends) {
//   this.name = name;
//   this.age = age;
//   this.friends = friends;
// };

// User.prototype.getInfo = function () {
//   console.log(
//     `User ${this.name} is ${this.age} years old and has ${this.friends} friends`
//   );
// };
// // console.log(User.prototype.getInfo);

// const oleh = new User({
//   name: "Oleh",
//   age: 27,
//   friends: 100,
// });
// console.log(oleh);
// oleh.getInfo();

// =======================================================================
// ========================  +++  ========================================
// ========================  +++  ========================================
// ========================  +++  ========================================
// =====================  +++++++++  =====================================
// =======================  +++++  =======================================
// =========================  +  =========================================
// =======================================================================

// const House = function (doors, windows, roof, color) {
//   this.ground = 50;
//   this.doors = doors;
//   this.windows = windows;
//   this.roof = roof;
//   this.silences = "";
//   this.color = color;
// };
// House.prototype.changeColor = function (newColor) {
//   this.color = newColor;
// };
// House.prototype.changeDoors = function (value) {
//   this.doors = value;
// };
// House.prototype.changeWindows = function (value) {
//   this.windows = value;
// };

// const newHouse = new House(2, 10, 2, "red");
// console.log(newHouse);

// newHouse.changeColor("blue");
// console.log(newHouse);

// newHouse.changeDoors(4);
// console.log(newHouse);

// newHouse.changeWindows(4);
// console.log(newHouse);

// const windowsLalala = [
//   { name: "1", count: 4 },
//   { name: "2", count: 4 },
//   { name: "3", count: 4 },
//   { name: "4", count: 4 },
// ];

// const myHouse = new House(1, windowsLalala, 1, "green");
// console.log(myHouse);

// House.prototype.upgradeWindows = function (name, num) {
//   //   console.log(this.windows);
//   for (let elem of this.windows) {
//     if (name === elem.name) {
//       elem.count = num;
//     }
//     // console.log(elem);
//   }
// };
// myHouse.upgradeWindows("1", 10);
// console.log(myHouse);

// myHouse.upgradeWindows("4", 0);
// console.log(myHouse);

// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================

const Bouquet = function (
  flowers = "",
  bottles = 0,
  octopus = 0,
  fruits = "",
  sweets = "",
  vegatables = "",
  sausages = 0
) {
  this.flowers = flowers;
  this.bottles = bottles;
  this.octopus = octopus;
  this.fruits = fruits;
  this.sweets = sweets;
  this.vegatables = vegatables;
  this.sausages = sausages;
  this.isDelivery = false;
};

const myBouquet = new Bouquet(
  "roses",
  undefined,
  undefined,
  undefined,
  "sugar"
);

Bouquet.prototype.changeFlowers = function (value) {
  if (!this.isDelivery) {
    return (this.flowers = value);
  }
  return "Заказ отправлен!!!";
};

Bouquet.prototype.toggleProp = function () {
  if (this.isDelivery) return (this.isDelivery = false);
  if (!this.isDelivery) return (this.isDelivery = true);
};

// myBouquet.changeFlowers("pion");
// console.log(myBouquet);

// myBouquet.toggleProp();
// console.log(myBouquet);

// myBouquet.changeFlowers("cactus");
// console.log(myBouquet);
console.log(myBouquet.changeFlowers("pion"));
console.log(myBouquet);
// myBouquet.isDelivery = true;
console.log(myBouquet);
console.log(myBouquet.changeFlowers("cactus"));
myBouquet.toggleProp();
console.log(myBouquet);
console.log(myBouquet.changeFlowers("cactus"));
console.log(myBouquet);
myBouquet.toggleProp();
console.log(myBouquet);

// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================
