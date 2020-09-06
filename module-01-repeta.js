// const stars = 4;

// switch (stars) {
//   case 1:
//     console.log("1");
//     break;

//   case 2:
//     console.log("2");
//     break;

//   case 3:
//     console.log("3");
//     break;

//   case 4:
//     console.log("4");
//     break;

//   case 5:
//     console.log("5");
//     break;

//   default:
//     console.log("ytdthysq rjl");
// }

// for (let i = 0; i < 5; i += 1) {
//   console.log(`ввдетиде чило ${i} `);
// }

// const blabla = 3;
// let total = 0;

// for (let i = 1; i <= blabla; i += 1) {
//   total += i;
// }
// console.log(`total ${total}`);

// const number = 5;
// let total = 0;
// let i = 10;
// while (i <= number) {
//   total += i;

//   i += 1;
// }
// console.log(`total ${total}`);

// let userInput;

// do {
//   userInput = prompt("vvedi 5");

//   if (userInput === null) {
//     break;
//   }

//   userInput = Number(userInput);
// } while (userInput !== 5);

// for (let i = 0; i < 10; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }
// let input;
// do {
//   input = prompt("введите число");
//   input = Number(input);
// } while (input !== null);

// let total = 0;

// while (true) {
//   let input = prompt("введите число");

//   if (input === null) {
//     break;
//   }

//   input = Number(input);

//   const isANumber = Number.isNaN(input);

//   if (notANumber) {
//     continue;
//   }
//   total += input;
// }

// console.log(`Общая сумма ${total}`);
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log("Logging clients: ", clients[i]);
// }
// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log("numbers: ", numbers); // ['label-0', 'label-1', 'label-2']
// Итерация по массиву
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // Клиент с таким именем есть в базе данных!
/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5
// Создаем пустой массив
// const stack = [];

// // Добавляем элементы в конец массива
// stack.push(1);
// console.log(stack); // [1]

// stack.push(2);
// console.log(stack); // [1, 2]

// stack.push(3);
// console.log(stack); // [1, 2, 3]

// // Удаляем элементы из конца массива
// console.log(stack.pop()); //  3
// console.log(stack); // [1, 2]

// console.log(stack.pop()); //  2
// console.log(stack); // [1]

// console.log(stack.pop()); //  1
// console.log(stack); // []

// console.log(stack.pop()); //  undefined

// Предположим, у вас есть массив языков программирования из четырех элементов.
const languages = ["C", "C++", "Java", "JavaScript"];

// Следующая операция заменяет второй элемент на новый.
languages.splice(1, 1, "Python");

// В массиве языков теперь все еще четыре элемента,
// но второй элемент теперь «Python» вместо «C++».
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Вы можете заменить один элемент на несколько элементов,
// передав больше аргументов
languages.splice(2, 1, "C#", "Swift", "Go");

console.log(languages);
// ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
