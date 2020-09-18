// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================

// const test = document.querySelector(".test");
// // test.hidden = true;
// console.log(test);

// const test1 = document.querySelector(".test1");
// console.log(test1.value);

// const test2 = document.querySelector(".test2");
// console.log(test2.value);

// const test3 = document.querySelector(".img");
// test3.style.width = "300px";
// test3.style.marginTop = "50px";
// test3.style.marginLeft = "30px";

// console.log(test3);

// const test4 = document.querySelector(".test4");
// test4.textContent += " !!!";
// test4.style.fontSize = "40px";

// console.log(test4);

// let body = document.querySelector("body");
// body.style.background = "tomato";
// console.log(body);

// let textH2 = document.querySelector(".text-h2");
// textH2.style.color = "white";
// textH2.classList.add("title"); // добавление класса
// textH2.classList.remove("title"); // удаляет класс
// textH2.classList.toggle("test4"); // удаляет если такой класс есть
// textH2.classList.toggle("test4"); // добавляет если такого класса нету

// console.log(textH2.classList); // проверка сколько классов на элементе

//_________    СОЗДАНИЕ ЭЛЕМЕНТА Гирлянда  ________________
// let body = document.querySelector("body");

// let arr = ["Bodya", "Sasha", "Alex", "Mark", "Oleh"];

// for (let index = 0; index < arr.length; index++) {
//   const title = document.createElement("h3");

//   title.textContent = arr[index];
//   title.setAttribute("id", `${index}`);
//   title.style.fontSize = "50px";
//   setInterval(() => {
//     title.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
//       Math.random() * 255
//     )}, ${Math.floor(Math.random() * 255)})`;
//     title.style.transform = `translate(${Math.floor(
//       Math.random() * 10
//     )}px, ${Math.floor(Math.random() * 10)}px)`;
//   }, 500);
//   body.append(title);
// }

// ==========================
// let body = document.querySelector("body");
// console.log(body);

// for (let index = 0; index < 6; index++) {
//   let img = document.createElement("img");
//   img.setAttribute(
//     "src",
//     "https://static3.depositphotos.com/1004996/226/i/450/depositphotos_2260019-stock-photo-glowing-font-shiny-letter-s.jpg"
//   );
//   img.setAttribute("width", "200");
//   body.prepend(img);
// }
