// ======= условия если =========
// let vova = {
//     age: 16,

// };

// if (vova.age >= 18) {
//   alert("Prohodi paren");
// } else {
//   alert("izvini brat");
// }

// =========условия если - если=========
// let vova = {
//   age: 16,
//   dad: "deputat",
// };

// if (vova.age >= 18) {
//   alert("Prohodi paren");
// } else if (vova.dad === "deputat") {
//   alert("prohodi brat");
// } else {
//   alert("izvini brat");
// }

//  условия если с помощью сравнения или
// let vova = {
//   age: 16,
//   dad: "deputat",
// };

// if (vova.age >= 18 || vova.dad === "deputat") {
//   alert("Prohodi paren");
// } else {
//   alert("izvini brat");
// }

// условие если, но запись через тремор
// let vova = {
//   age: 16,
//   dad: "mechanic",
// };
// vova.age >= 18 || vova.dad === "deputat"
//   ? alert("prohodi brat")
//   : alert("izvini brat");

// условия через prompt, обязательно введи пароль который у нас задан,
// если введешь правильный пароль тебя пуслит на сайт true
// если введешь не верный пароль будет отображен вражеский пароль false
// если не ввести пароль получишь предупреждерние что нету пароля,

// const PASSWORD = "ilovejs";

// let prompt1 = prompt("input password");

// if (prompt1) {
//   prompt1 === PASSWORD
//     ? console.log("you're in")
//     : console.log("wrong password");
// } else {
//   alert("you have to enter the password");
// }

// ===== проверка на подписку ===
// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 700;
//     break;

//   case "premium":
//     cost = 5000;
//     break;
// }
// console.log(cost);

//  вложености
// let a = 1;
// let b = 2;
// let c = 3;

// if (true) {
//   c = 4;
// }
// console.log(c);

//  =============== циклы ==========
// let q ;
// while (q !== null && q !== "") {
//   q = prompt("enter youre number: ");

//   console.log(q);
// }

// let q = 1;
// let salaryArr = [];
// while (q) {
//   q = prompt("enter youre number: ");
//   q ? salaryArr.push(q) : "";
//   console.log(q);
// }
// console.log(salaryArr);
//  ====== do ... while
// let a = 0;
// do {
//   // a = a + 1;
//   // a += 1;
//   a++; // все выше записаные выражения означают тоже
//   console.log(a);
// } while (a < 10);

//  ==== цикл for =============
// for (let i = 0; i < 10; ++i) {
//   console.log("i", i);
// }
// for (let r = 0; r < 10; ) {
//   console.log("r", ++r);
// }
// for (let i = 0; i < 10; i += 1) {
//   i % 2 ? console.log("не чет", i) : "";
// }

// for (let i = 0; i < 10; i += 1) {
//   i % 2 == 0 ? console.log("чет", i) : "";
// }

// for (let i = 0; i < 10; i++) {
//     if(i%2==0&&i!==)

// let ageOleh = 27;
// let ageIhor = 39;
// let ageTotal = ageOleh + ageIhor;
// console.log(ageTotal);

// let radius = 10;
// const PI = 3.14;
// console.log(PI * Math.pow(radius, 2));

const name = "Oleh";
let age = 27;
const group = 24;
console.log(`Я ${name}, мне ${age} лет, я учусь на ${group} буткемпе!!!`);

//  я валерий мне 25 и я учусь на 24 буткемпе
