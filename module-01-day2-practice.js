// === task-02 =========
// const total = 100;
// let ordered = 50;
// // ordered = 200;
// if (total >= ordered) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоваров!");
// }
// === task-02 =========
// const total = 100;
// let ordered = prompt("Введите количество желаемого товара!!!");
// if (total >= ordered) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоваров!");
// }

// task-03 ==================== с помощью тернарного сравнения
// const ADMIN_PASSWORD = "11";
// let message = prompt("Введите пароль");

// if (message) {
//   message === ADMIN_PASSWORD
//     ? console.log("Добро пожаловать!")
//     : console.log("Доступ запрещен, неверный пароль!");
// } else {
//   console.log("Отменено пользователем!");
// }

// =============== task-04 ==========
// let credits = 23580;
// const pricePerDroid = 3000;
// let quantity = Number(prompt("Какое количество дроидов Вы хотите купить"));
// if (quantity == 0) {
//   console.log("Отменено пользователем!");
// } else {
//   let totalPrice = pricePerDroid * quantity;
//   if (totalPrice > credits) {
//     console.log("Недостаточно средств на счету!");
//   } else {
//     let credits = 23580;
//     console.log(
//         `Вы купили ${quantity} дроидов, на счету осталось
//       ${credits - totalPrice} кредитов.`
//     );
//   }
// }
//  task-04 тернарник
// let credits = 23580;
// const pricePerDroid = 3000;
// let quantity = Number(prompt("Какое количество дроидов Вы хотите купить"));
// if (quantity == 0) {
//   console.log("Отменено пользователем!");
// } else {
//   let totalPrice = pricePerDroid * quantity;
//   totalPrice > credits
//     ? console.log("Недостаточно средств на счету!")
//     : console.log(
//         `Вы купили ${quantity} дроидов, на счету осталось
//       ${credits - totalPrice} кредитов.`
//       );
// }

// ======= task-05 ===================================
// ===================================================
// let userAnswer = prompt("Введите страну");
// let userСountry = (userAnswer + "").toLowerCase();

// const china = "китай";
// const chili = "чили";
// const australia = "австралия";
// const india = "индия";
// const jamaica = "ямайка";

// switch (userСountry) {
//   case china:
//     console.log(
//       `Доставка в ${
//         china[0].toUpperCase() + china.substr(1)
//       } будет стоить 100 кредитов.`
//     );
//     break;

//   case chili:
//     console.log(
//       `Доставка в ${
//         chili[0].toUpperCase() + chili.substr(1)
//       } будет стоить 250 кредитов.`
//     );
//     break;

//   case australia:
//     console.log(
//       `Доставка в ${
//         australia[0].toUpperCase() + australia.substr(1)
//       } будет стоить 170 кредитов.`
//     );
//     break;

//   case india:
//     console.log(
//       `Доставка в ${
//         india[0].toUpperCase() + india.substr(1)
//       } будет стоить 80 кредитов.`
//     );
//     break;

//   case jamaica:
//     console.log(
//       `Доставка в ${
//         jamaica[0].toUpperCase() + jamaica.substr(1)
//       } будет стоить 120 кредитов.`
//     );
//     break;

//   default:
//     alert("В вашей стране доставка не доступна!");
//     break;
// }

// ========== switch ==============

let day = prompt("Введите день недели!");

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Это будний день!!!");
    break;
  case "suturday":
  case "sunday":
    console.log("Это не будний день!!!");
    break;

  default:
    console.log("Укажите валидный день!!!");
    break;
}
