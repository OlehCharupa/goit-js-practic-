// =============================================================
//  ================== ПОВТОРЕНИЕ ==============================
//  ============================================================
// const getMeEven = function (...n) {
//   for (let i = 1; i < n.length; i++) {
//     if (0 === n[i] % 2) {
//       console.log(n[i]);
//     }
//   }
// };
// getMeEven(1, 2, 3, 4, 5, 6, 7, 8);
// ===============================================================
// ===============================================================
// ===============================================================
// Сделайте функцию isNumberInRange, которая параметром принимает
// число и проверяет, что оно
// больше нуля и меньше 10. Если это так - пусть функция возвращает true,
// если не так - false.

// const isNumberInRange = function (n) {
//   console.log(n < 10 ? true : false);
// };
// isNumberInRange(1);
// isNumberInRange(12);
// isNumberInRange(5);
// isNumberInRange(10);

// ==============================================================
// ==============================================================
// ==============================================================
// Сделайте функцию inArray, которая определяет, есть в массиве элемент
// с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента,
// а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false
// var str = ‘яблоbко‘;
// var arr = [‘банан‘, ‘яблоко‘, ‘персик’];
// let str = "яблоко";
// let arr = ["банан", "яблоко", "персик"];
// const inArray = (str, arr) => {
//   return arr.includes(str)
// };
// console.log(inArray(str, arr));
// ===============================================================
// ===============================================================
// ===============================================================
// Есть массив уникальных чисел uniqueNumbers.
// Написать функцию, addUniqueNumbers(...),
// которая получает произвольное кол-во чисел как аргументы,
// и добавляет в массив uniqueNumbers только уникальные,
// а те которые в массиве уже есть игнорирует.

// let uniqueNumbers = [1, 2, 3, 4, 5, 6, 94];
// const addUniqueNumbers = function (...args) {
//   for (let i = 0; i < args.length; i++) {
//     if (!uniqueNumbers.includes(args[i])) {
//       uniqueNumbers.push(args[i]);
//     }
//   }
//   console.log(uniqueNumbers);
// };
//   ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==
// ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==  ==
// function addUniqueNumbers(...nums) {
//   for (let i = 0; i < uniqueNumbers.length; i++) {
//     if (
//       uniqueNumbers[i] !== nums[i] &&
//       uniqueNumbers[i] !== undefined &&
//       nums[i] !== undefined
//     ) {
//       uniqueNumbers.push(nums[i]);
//     }
//   }
//   console.log(uniqueNumbers);
// }
// addUniqueNumbers(1, 2, 3, 88, 97);

// //   uniqueNumbers.push(...args);
// let newArr = [...uniqueNumbers];
// if (newArr == args) {
//   newArt.push();
// }
// console.log(newArr);
// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================
// ===================================================================
// Напиши функцию logItems(array), которая получает массив и использует
// цикл for, который для каждого элемента массива будет выводить в
// консоль сообщение в формате[номер элемента]-[значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента
// массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено
// '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

//=====const logItems = function (array) {
//=====  for (let i = 0; i < array.length; i++) {
//=====    console.log(`${[i + 1]} - ${array[i]}`);
//=====  }
//=====};
//=====
//=====logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
//=====
//=====logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку(в строке будут только слова и пробелы)
// и цену гравировки одного слова, и возвращающую цену гравировки
// всех слов в строке.
// const calculateEngravingPrice = function (message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// };
// const calculateEngravingPrice = (message, pricePerWord) => message.split(" ").length * pricePerWord;

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================