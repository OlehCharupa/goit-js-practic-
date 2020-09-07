// =============================================
// ========== МАССИВЫ ==========================
// =============================================
// const arr = [1, 2, 3];

// if (arr) {
//   console.log(arr);
// }

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(`element #${i + 1}: ${arr[i]}`);
// }
// ==============================================
// const arr = ["mango", "poly", "ajex", 1, 2, 3, { a: 1, b: 2 }, false];

// for (let el of arr) {
//   console.log(el);
// }
// ==========================================
// const arr2 = [
//   [1, 2, 3],
//   [1, 2, 3],
//   [1, 2, 3],
// ];

// const arr3 = [];
// for (let el of arr2) {
//   for (let i = 0; i < el.length; i++) {
//     console.log(el[i]);

//     arr3.push(el[i]);
//   }
// }
// console.log(arr3);
// ==================================================

// let a = 1;
// let b = a;
// a = 2;
// console.log(b);
// b = a;
// console.log(b);
// ========================================================
// const obj = { name: "John", surname: "Vick" };
// console.log(obj);
// const objCopy = obj;
// console.log(objCopy);

// obj.name = "Vasilii";
// console.log(objCopy);
// ===============================================================
// let srt = "Hello world, I'm Johnny";
// console.log(srt.split(",").join("").split(" "));
// ============================================================

// const arr = ["mango", "poly", "ajax", 1, 2, 3, { a: 1, b: 2 }, false];
// console.log(arr.indexOf(false));

// let arr = [];
// arr.push("1");
// arr.push("2");
// console.log(arr);
// arr.pop("2");
// console.log(arr);
// arr.unshift("0");
// console.log(arr);
// arr.shift();
// console.log(arr);
// =========================================================
// =======полиндромное слово================================
// =========================================================
// let str = "AVA";
// let str2 = str.split("").reverse().join("");
// console.log(str === str2);
// =================================================
// ===================== slice()======================
// let arr = [1, 2, 3];
// let newArr = arr.slice();
// console.log(newArr);
// ===========================================
// ============== splice() ====================
// ===========================================
// let arr = [1, 2, 3];
// arr.splice(1, 0, "hello");
// console.log(arr);

// ===========================
// ========= task ============
// ===========================

// let styles = ["Джаз", "Блюз"];
// console.log(styles);

// styles.push("Рок-н-ролл");
// console.log(styles);

// let center = Math.round(styles.length / 2 - 1);
// console.log(center);

// styles.splice(center, 1, "Классика");
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// ==========================================
// ---------- функиции -----------------------
// ===========================================

// const fn = function (a, b, c, d) {
//   console.log(a, b, c, d);
// };
// fn(1);
// ===========================================

// console.log(add(1, 2, 3));

// function add(a, b, c) {
//   return a + b + c;
// }
// =====================================
//  ============ rest ===================
// =======================================
// const showMeArguments = function (...args) {
//   console.log(args);
// };
// showMeArguments("Thor", "Black Window", "Ant Man");
// ======================================
// -------- стрелочные функции -----------
// =====================================
// const add = (a, b, c) => a + b + c;
// console.log(add(1, 2, 3));

// const add = (...arg) => {
//   for (let el of arg) {
//     console.log(el);
//   }
// };
// console.log(add(1, 2, 3));
//
// =============================
// ======== task ===============
// =============================
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }
//   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//   Сделайте два варианта функции checkAge:
//   Используя оператор ?
//   Используя оператор ||

// function checkAge(age) {
//   age > 18 || confirm("Родители разрешили?");
//   console.log(age);
// }

// =========================================
// _________ hw-02___task-01________________

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ===========================================
// ____________HW-02___TASK-02______________

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let word = message.split(" ");
//   //   console.log(word);
//   let wordQuantity = word.length;
//   //   console.log(wordQuantity);
//   let totalPrice = pricePerWord * wordQuantity;
//   //   console.log(totalPrice);
//   return totalPrice;
// };

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

// ===============================================================
// _____________hw-02____task-03_________________________________

// const findLongestWord = function (string) {
//   let arrayWord = string.split(" ");
//   //   console.log(arrayWord);
//   let longestWord = arrayWord[0];
//   let wordLength = arrayWord[0].length;
//   for (let i = 1; i < arrayWord.length; i++) {
//     // console.log(arrayWord[i]);
//     // console.log(arrayWord[i].length);
//     if (wordLength < arrayWord[i].length) {
//       wordLength = arrayWord[i].length;
//       //   console.log(wordLength);
//       longestWord = arrayWord[i];
//       //   console.log(longestWord);
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
// ______________________________task-03______________________

// const findLongestWord = function (string) {
//   let arrayWord = string.split(" ");
//   let longestWord = "";

//   for (let word of arrayWord) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
// =================================================================
// __________________________hw-02___task-04________________________
// =================================================================
// const formatString = function (string) {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     return (string = string.slice(0, 40) + "...");
//   }
// };
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//     formatString(
//         "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//     )
// );

// ==============================================
// _____________________ task-04  _______________
// ==============================================
// const formatString = function (string) {
//   if (string.length <= 40) return string;
//   return `${string.substr(0, 40)}...`;
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка

// =================================================
// _________________ task-05 _______________________
// =================================================
// const checkForSpam = function (message) {
//   message = message.toLowerCase();
//   if (message.includes("spam") || message.includes("sale")) return true;
//   return false;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
// ======================== вариант-2 ======
// const checkForSpam = function (message) {
//   message = message.toLowerCase;
//   if (message.indexOf("spam") >= 0 || message.indexOf("sale") >= 0) return true;
//   return false;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ==============================================
// _________________task-06_________________

// let input = " ";
// const numbers = [];
// let total = 0;

// while (input) {
//   input = prompt("Введите число!");
//   if (input == null) {
//     alert("Отменено пользователем");
//   } else {
//     input = Number(input);
//     if (!isNaN(input)) {
//       numbers.push(input);
//     }
//   }
// }
// // for (let number of numbers) {
// //   total += number;
// // }
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }

// console.log(numbers);
// console.log(`Общая сумма чисел равна ${total}`);
// _________________________________________

// let input = prompt("Введите число");
// const numbers = [];
// let total = 0;
// for (let i = 0; input !== null || input == false; i++) {
//   if (i < 10) {
//     console.log(+input);
//     break;
//   }
//   input = +input;
//   if (!isNaN(input)) {
//     numbers.push(input);
//     total += input;
//   } else {
//     console.log("ВВЕДИ С..А ЧИСЛО");
//   }
// }
// console.log(numbers);
// console.log(total);

// ========================================================
// ______________________task-07___________________________
// ========================================================
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   if (login.length >= 4 && login.length <= 16) return true;
//   return false;
// };

// const isLoginUnique = function (allLogins, login) {
//   for (let loginElem of allLogins) {
//     if (loginElem === login) return false;
//   }
//   return true;
// };

// const addLogin = function (allLogins, login) {
//   if (!isLoginValid(login))
//     return "Ошибка! Логин должен быть от 4 до 16 символов";

//   if (!isLoginUnique(login)) return "Такой логин уже используется!";

//   allLogins.push(login);
//   return "Логин успешно добавлен!";
// };

// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// =====================

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) return true;
  return false;
};

const isLoginUnique = function (allLogins, login) {
  for (let loginElem of allLogins) {
    if (loginElem === login) return false;
  }
  return true;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login))
    return "Ошибка! Логин должен быть от 4 до 16 символов";

  if (!isLoginUnique(login)) return "Такой логин уже используется!";

  allLogins.push(login);
  return "Логин успешно добавлен!";
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
