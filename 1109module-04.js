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
 const every = function (arr, callback){
     console.log(callback(arr));
};
every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)

function callback(array){
    for (let element of array){    
      if (element < 10){
       continue
       } else {
           return false
       }
    } 
    return true
}
// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================
