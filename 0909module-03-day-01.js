//  =========================================================
// ________________ ОБЬЕКТЫ _________________________________
// ===========================================================

// const testObj = {
//     test: "123"
// };
// console.log(testObj);

// testObj.test = "test02"
// console.log(testObj);
// console.log(testObj.test);

// delete testObj.test;
// console.log(testObj);

// const obj = {
//   defaultValue: 0,
//   add: function () {
//     obj.defaultValue += 1;
//     const a = 10;
//     return a;
//   },
//   onDecrement: function () {
//     obj.defaultValue += 1;
//   },
// obj.mul = function (n) {
//   obj.defaultValue += n;
// };
// };

// let increment = obj.add;
// increment();

// console.log(obj.mul(3));
// ++++++++++++++++++++++++++++++++++++++++++++++
// _+++++++++++++++++++++++++++++++++++++++++++++
// const obj = {
//   defaultValue: 0,
//   add: function (n) {
//     obj.defaultValue += n;
//   },
//   take: function (n) {
//     obj.defaultValue -= n;
//   },
//   multiply: function (n) {
//     obj.defaultValue *= n;
//   },
//   division: function (n) {
//     obj.defaultValue /= n;
//   },
//   total: function () {
//     console.log(`Текущее значение ${obj.defaultValue}`);
//   },
// };
// obj.add(2);
// obj.take(1);
// obj.multiply(5);
// obj.division(2);
// obj.total();
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ========== отобразить все значения ключей,
// =========== а потом показать общую сумму всех значений
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// let total = 0;
// for (let key in obj) {
//   //   console.log(`${key} is equal to ${obj[key]}`);
//   total += obj[key];
// }
// console.log(total);

// ==============================================
// __________ ОПЕРАТОРЫ ______________________
// ==============================================
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.entries(obj)[1][1]);
// ===================================================
// _________ SPREAD & REST ___________________________
// ===================================================
// const obj1 = {
//   a: 1,
//   b: 2,
// };
// const obj2 = {
//   b: 5,
//   c: 4,
// };

// const obj3 = {
//   ...obj1,
//   ...obj2,
// };
// console.log(obj3);
// _________________________________________________

// ============== ДЕСТРУКТУРИЗАЦИЯ ==============

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const { name = hotelName, stars = 3, capacity = 0, status = "vip" } = hotel;

// console.log(name, stars, status);
// console.log(hotel);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ========================================================
// ___________________ HW-03 ______________________________
// ========================================================
// ________________ TASK-01 _______________________________
// ========================================================
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ: значение
// используя Object.keys() и for...of
// ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
// ========================================================
// ________________ TASK-02 _______________________________
// ========================================================
// Напиши функцию countProps(obj), считающую кол - во свойств в объекте.
// Функция возвращает число - количество свойств.
//   ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||
// const countProps = function (obj) {
//   console.log(Object.keys(obj).length);
// };
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
//
//
//
//
//
//
//
//
//
// ==========================================================
// ________________ TASK-03 _________________________________
// ==========================================================
// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников и возвращает имя самого
// продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как
// свойства объекта в формате "имя": "кол-во задач".
//    ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||
// const findBestEmployee = function (employees) {
//   let arrayEmployees = Object.entries(employees);
//   let bestName = arrayEmployees[0][0];
//   let bestScore = arrayEmployees[0][1];
//   for (let i = 1; i < arrayEmployees.length; i++) {
//     let innerArrayEmployees = arrayEmployees[i];
//     let name = innerArrayEmployees[0];
//     let score = innerArrayEmployees[1];

//     if (bestScore < score) {
//       bestScore = score;
//       bestName = name;
//     }
//     return bestName;
//   }
// };
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux
//
//
//
//
//
//
//
//
//
// =============================================================
// ___________________ TASK-04 _________________________________
// =============================================================
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".
// ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  ||
//
// const countTotalSalary = function (employees) {
//   let total = 0;
//   for (let salary in employees) {
//     total += employees[salary];
//   }
//   return total;
// };
// console.log(countTotalSalary({})); // 0
//
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400
//
//
//
//
//
//
//
//
//
//
//
// ===================================================================
// ______________________ TASK-05 ____________________________________
// ===================================================================
// Напиши функцию getAllPropValues(arr, prop), которая получает массив
// объектов и имя свойства.Возвращает массив значений определенного
// свойства prop из каждого объекта в массиве.
// ||  ||  ||  ||  ||  ||  ||  || ||  ||  ||  || ||  ||  ||  || || || |
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let array = [];
//   for (let obj of arr) {
//     for (let key in obj) {
//       if (key === prop) {
//         array.push(obj[key]);
//       }
//     }
//   }
//   return array;
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []
//
//
//
//
//
//
//
//
// ====================================================================
// _________________ TASK-06 __________________________________________
// ====================================================================
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена * количество).
//
// Вызовы функции для проверки работоспособности твоей реализации.
//   ||  ||  || ||  ||   ||   ||   ||   ||   ||   ||  ||   ||  ||
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   for (let obj of allProdcuts) {
//     for (let nameProd in obj) {
//       if (obj[nameProd] === productName) {
//         let totalPrice = obj.price * obj.quantity;
//         return totalPrice;
//       }
//     }
//   }
// };
// console.log(calculateTotalPrice(products, "Радар")); // 5200
// console.log(calculateTotalPrice(products, "Дроид")); // 2800
// =====================================================================
// =====================================================================
// =====================================================================
