// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================
/* сделать 3 элемента разных цветов, повесить слушателя и при нажатии на этот элемент 
менялся цвет body на тот же цвет что и у кнопки*/
// const body = document.querySelector("body");
// console.log(body);

// for (let index = 0; index < 3; index++) {
//   const button = document.createElement("button");
//   button.textContent = "Click";
//   button.setAttribute("class", "button");
//   button.style.width = "100px";
//   button.style.height = "100px";
//   button.style.margin = "50px";
//   button.style.borderRadius = "50%";
//   button.style.border = "5px solid red";

//   const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
//     Math.random() * 255
//   )}, ${Math.floor(Math.random() * 255)})`;
//   button.style.background = randomColor;
//   body.append(button);
// }

// const buttonArray = document.querySelectorAll(".button");
// const btn1 = buttonArray[0];
// const btn2 = buttonArray[1];
// const btn3 = buttonArray[2];

// btn1.addEventListener(
//   "click",
//   (e) => (body.style.background = e.target.style.background)
// );
// btn2.addEventListener(
//   "click",
//   (e) => (body.style.background = e.target.style.background)
// );
// btn3.addEventListener(
//   "click",
//   (e) => (body.style.background = e.target.style.background)
// );

// const body = document.querySelector("body");

// for (let i = 1; i < 10; i++) {
//   const cube = document.createElement("div");
//   cube.classList.add("cube");
//   cube.textContent = i;
//   body.append(cube);
//   //   cube.addEventListener("click", () => {
//   //     alert(cube.textContent);
//   //   });
// }

// body.addEventListener("click", (e) => {
//   alert(e.target.textContent);
// });

// window.addEventListener("scroll", () =>
//   window.scrollY > 0 && window.scrollY < 100
//     ? (body.style.background = "green")
//     : window.scrollY > 150 && window.scrollY < 350
//     ? (body.style.background = "tomato")
//     : window.scrollY > 351
//     ? (body.style.background = "teal")
//     : ""
// );
const body = document.querySelector("body");

body.addEventListener("click", (e) => {
  body.innerHTML += `<div class="circule" style="top: ${e.clientY}px; left:${e.clientX}px"></div>`;
});
