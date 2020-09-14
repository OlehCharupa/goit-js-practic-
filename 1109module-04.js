// const print = function (n) {
//     for ( let i = 0; i < n; i++)
//     console.log(i);

// }
// print(11);
// ============================================
// ============================================
// ============================================
// const animals = function (str, n){
//     let i = 0;
//     while ( i < n){
//         i = i + 1;
//         console.log(`name ${str}, quantity ${i}`);
//  }
// }

// animals("cat", 5)
// ===========================================================
// ===========================================================
// ===========================================================
// const printValue = function(value) {
//     console.log(value);
//   };

//   const prettyPrint = function(value) {
//     console.log('Logging value: ', value);
//   };

//   const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   };

//   // Передаем printValue как callback-функцию
//   repeat(3, printValue);
//   // 0
//   // 1
//   // 2

//   // Передаем prettyPrint как callback-функцию
//   repeat(3, prettyPrint);
//   // Logging value: 0
//   // Logging value: 1
//   // Logging value: 2
// ============================================================
// ============================================================
// ============================================================
// const filter = function(array, test) {
//     const filteredElements = [];

//     for (const element of array) {
//       const passed = test(element);

//       if (passed) {
//         filteredElements.push(element);
//       }
//     }

//     return filteredElements;
//   };

//   const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];

//   const freshFruits = filter(fruits, fruit => fruit.isFresh);
//   console.log(freshFruits); // массив с объектами apples и bananas

//   const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
//   console.log(fruitsWithQuantity); // массив с объектами apples и grapes

//   const fruitsName = filter(fruits, fruit => fruit.name === 'bananas' );
//   console.log(fruitsName);
// =================================================================================
// =================================================================================
// =================================================================================
// =================================================================================

// const filter = function (community, test){
//     let badEmployee = [];
//     for ( let employee of community){
//         if (!test(employee))
//         badEmployee.push(employee)
//     }
//     return badEmployee

// }
// const community = [
//     { name: 'John', salary: 200, isActiveWorker: true },
//     { name: 'Derek', salary: 150, isActiveWorker: false },
//     { name: 'Anna', salary: 100, isActiveWorker: true },
//     { name: 'Mariia', salary: 50, isActiveWorker: false },
//     { name: 'Tony', salary: 100, isActiveWorker: true },
//   ];

//   const communityNameSalary = filter(community, employee =>  employee.salary > 100 && employee.isActiveWorker)
// console.log(communityNameSalary);
// ===============================================
// ===============================================
// ===============================================
// ===============================================
// ===============================================

// const counter = function (n){
//     let count = 0;

//     const onIncrement = function(n){
//         count++;
//         console.log(count);
//     };
//     const onDecrement = function (n){
//         count--;
//         console.log(count);
//     };
//     return {onIncrement, onDecrement}

// }

// let counter1 = counter();
// counter1.onIncrement();
// counter1.onIncrement();
// counter1.onIncrement();
// counter1.onIncrement();

// let counter2 = counter();
// counter2.onDecrement();
// counter2.onDecrement();
// counter2.onDecrement();
// counter2.onDecrement();
// ======================================================================
// ======================================================================
// ======================================================================
// ======================================================================
// ======================================================================
// Напиши фукцнию findLongestWord(string), которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//     let arrString = string.split(" ");
//     let defaultWord = arrString[0];
//     let defaultLength = arrString[0].length;
//     for ( let i = 1; i < arrString.length; i++){
//         if (defaultLength < arrString[i].length){
//             defaultLength = arrString[i].length;
//             defaultWord = arrString[i]
//         }
//     }
//     return defaultWord
//   };

//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

//   console.log(findLongestWord('Google do a roll')); // 'Google'

//   console.log(findLongestWord('May the force be with you')); // 'force'
// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение
// используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// for (const content in user) {
//     console.log(`${content}: ${user[content]}`);
// }

// ===================== ADDITIONAL ========================== //
// == == == == == == = == task-1 == == == == == == == == == == //
//  Написати метод every який приймає масив і ф-ю callback
//  (в якій ми будемо робити різні перевірки) Цей метод повертає true
//  якщо кожен елемент масиву пройшов перевірку з callback.
//  Якщо хоча б один елемент не проходить перевірку то повертає false,
//  callback приймає елемент масиву
//  const every = function (arr, callback){
//      console.log(callback(arr));
// };
// every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
// every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)

// function callback(array){
//     for (let element of array){
//       if (element < 10){
//        continue
//        } else {
//            return false
//        }
//     }
//     return true
// }
// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================
// _____________ РАБОТА ДОМА ________________________________________
// ______________ЗАДАЧИ ДЛЯ ДЕТЕЙ __________________________________
// __________________01______________________________________________
// let user = prompt("Введите свое Имя!");
// let greeting = "добро пожаловать!";
// console.log(`${user}, ${greeting}`);
// ==========================================
// ___________________02__________________________________________________
// let var2 = 0;
// let var3 = true;
// let var1 = 1;

// console.log(var1 > var2); //true
// console.log(var1 == var3); //true
// console.log(var1 === var3); //false
// console.log(var1 != var3); // false
// console.log(var2 != var3); // true
// console.log(var1 > var2 == var3); //true
// console.log(var1 > var2 > var3); // false
// ===================================================
// ___________________03______________________________________________
// let val1;
// console.log(typeof val1); // undefined

// let val2 = "river";
// console.log(typeof val2); // srting

// let val3 = " mountain";
// console.log(typeof val3); //srting

// let val4 = 232;
// console.log(typeof val4); //number

// let val5 = true;
// console.log(typeof val5); //boolean

// let val6 = null;
// console.log(typeof val6); // object
//===================================================
//===================================================
// __________________ 04 ___________________________
// let tetra = "12px, 13.34em";
// console.log(tetra); // результат строка с записью 12px, 13.34em
// ====================================================
// ====================================================
// __________________ 05 _______________________________

// console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));
// console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

// ======================================================
// ======================================================
// __________________ 06 _________________________________
// --------******--------********--------***********------

// let random = Math.floor(Math.random() * (19 - 3 + 1)) + 3;
// console.log(random);

// ==========================================================
// ==========================================================
// ==========================================================
// let fruits = ["яблоки", "бананы", "апельсины"];
// console.log(fruits);
// console.log(fruits[1]);
// fruits.splice(1, 1, "киви");
// console.log(fruits);
// fruits.push("груши", "виноград", "персики");
// console.log(fruits);
//============================================================
//============================================================
//============================================================
// ____________________ 07 _______________________
// let test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// let bestResult = [];
// for (let i = 0; i < test1.length; i = i + 1) {
//   bestResult.push(test1[i] > 12);
// }
// console.log(test1);
// console.log(bestResult);

// let test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// for (let bestResult of test1) {
//     bestResult.splice(...test1);
//     console.log(bestResult);
// }

// console.log(test1);

// ============================================================
// ============================================================
// ============= HW-04 TASK-01 ================================
// ============================================================
// ============================================================
// ============================================================
// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     showOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost;
//       this.orders.push(order);
//     },
//   };

//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15

//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

//   account.addOrder(5000, 'order-4');
//   console.log(account.balance); // 19000
//   console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// ============================================================
// ============================================================
// ============= HW-04 TASK-02 ================================
// ============================================================
// ============================================================
// ============================================================
// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     inventory.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     inventory.items = inventory.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// ======================================================================
// ======================================================================
// ======================================================================
// ======================================================================
// ======================================================================
const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    inventory.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    inventory.items = inventory.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction("Medkit", inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction("Gas mask", inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
