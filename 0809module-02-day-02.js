// ===============================================================
// ==== найти максимальное значение ==============================
// let a = [1, 3, 44, 9, 6, 150, 250];

// const maxNumber = function (numbers) {
//   return Math.max(...numbers);
// };
// console.log(maxNumber(a));
// ======================================================================
// =================== что такое функция, как её обьявить и вызвать =====
// ======================================================================
// ======================= создание нового человека =====================
// ======================================================================
// const newMan = function (age, sex, height) {
//   return `Создан новый человек. Пол ${sex}, возраст ${age}, рост ${height}`;
// };
// console.log(newMan(18, "woman", 170));

// ====== стрелочная функция => таже задача, но в одну строку ===========
// const newMan2 = (age, sex, height) => `Создан новый человек. Пол ${sex}, возраст ${age}, рост ${height}`;

// console.log(newMan2(20, "woman", 150));

// =======================================================================
// _______________________________ привет пользователь ___________________
// =======================================================================
// #2
// Напишите функцию hello(), которая при вызове будет принимать переменную name (например, «Василий») и
// выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»
// const greeting = function(name = "user"){
// console.log(`Hello, ${name}`);
// }
// greeting("Nik");

// ================================ стрелочная ===========================

// const greeting2 = (name = "user") => `Hello, ${name}`;
// console.log(greeting2("Vasilii"));
// =======================================================================
// _______________________________________________________________________
// =======================================================================
// #3
// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из
//  n повторений строки str. n — по умолчанию 2, str — пустая строка
//  const repeat = function(str, n) {
//      let result = " ";
//       for (let i = 0; i < n; i++){
//           result += str;
//         }
//         console.log(result);
//  }
//  repeat("Слово", 2)
//  =======================================================================
// ========================================================================
// ========================================================================
// #4
// здайте функцию avg() , которая будет находить среднее значение по всем своим аргументам
// (аргументы величины числовые).
//  --------- добавил округление до целого числа
// const avg = function(...mean){
//     let sum = 0;
//     for (let i = 0; i < mean.length; i++){
//         sum += mean[i]
//     }
//     console.log(Math.round(sum/mean.length));
// }
// avg(12, 36, 25, 69, 14, 20, 58, 23, 82)

// ==============================================================
// ==============================================================
// ==============================================================
// ________________ ПРАКТИКА ___________________________________

// const toShowNames = function(firstName, lastName){
//     console.log(`Мое имя ${firstName}, фамилия ${lastName}!!!`);
// }
// toShowNames("Oleh", "Charupa")
// ==================================================
// ==================================================
// == == == == == == task-1 == == == == == == == ==//
// Написати ф-ю capitalize яка буде приймати строку і
// буде вертати нову строку де кожне слово буде починатися
// з великої літери.
// const capitalize = function (string) {
//   let str = string.split(" ");
//   let arrCapitalize = [];
//   for (let element of str) {
//     let wordCapitalize = element[0].toUpperCase() + element.substring(1);
//     arrCapitalize.push(wordCapitalize);
//   }
//   return arrCapitalize.join(" ");
// };
// console.log(capitalize('the quick brown fox'));
// ====================================================
// == = == == = == task-2 == == = = = === == == == =  //
// Написати ф-ю countVowels яка буде приймати строку і буде вертати
// кількість голосних літер.
// aeiouAEIOU - рядок з голосними в англ алфавіті
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// let quantity = [];
// const countVowels = function (string) {
//   let arr = string.split("");
//   for (let element of arr) {
//     if (vowels.includes(element)) {
//       quantity.push(element);
//     }
//   }
//   return quantity.length;
// };
// console.log(countVowels("the quick brown fox")); // 5
// =======================================================
// == == == == == == = task-3 == == == == == == == //
// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem)
// і велечину базового шрифта("20px") і вертає конвертований розмір
// в пікселях
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
// ===============================================================
