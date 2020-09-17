// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================
// let word = "OKKO";

// let result = word.toLowerCase().split("").reverse().join("");
// console.log(word.toLowerCase() === result);

// const isPalindrom = function (word) {
//   return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
// };
// console.log(isPalindrom("OKKO"));

// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================
const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// создать массив с именами пользователей .forEach
let userName2 = [];
users.forEach((user) => userName2.push(user.name));
console.log(userName2);

// создать массив с именами пользователей .map
const userName = users.map((user) => user.name);
console.log(userName);

// найти пользователей по цвету глаз .filter
const eyeColor1 = function (user, color) {
  return user.filter((elem) => elem.eyeColor === color);
};
console.log(eyeColor1(users, "brown"));

// найти пользователь по его email .find
const userEmail = function (user, email) {
  return user.find((elem) => elem.email === email);
};
console.log(userEmail(users, "elmahead@omatom.com"));

// найти пользователей возраст которых от 30 до 40 .filter
const ageUser = function (user, minAge, maxAge) {
  return user.filter((elem) => elem.age >= minAge && elem.age <= maxAge);
};
console.log(ageUser(users, 30, 40));

// найти сумму баланса всех пользователей .reduce
const sumBalance = function (users) {
  return users.reduce((acc, elem) => acc + elem.balance, 0);
};
console.log(sumBalance(users));

// найти всех пользователей у которых есть в друзьях "Briana Decker"
const findByFriend = function (users, friend) {
  return users.filter((elem) => elem.friends.includes(friend));
};
console.log(findByFriend(users, "Briana Decker"));

//  собрать уникальные скилы всех пользователей в отдельный массив

const getSkills = (users) =>
  users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);

    return allSkills;
  }, []);

const unicSkills = function (getSkills) {
  let result = getSkills.filter((elem, i) => getSkills.indexOf(elem) == i);
  return result;
};
console.log(unicSkills(getSkills(users)));
