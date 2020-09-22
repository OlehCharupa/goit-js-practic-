// =======================================================================
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  =====  +++  ==========  +++  ==========  +++  ==========  +++  =====
//  ==  +++++++++  ====  +++++++++  ====  +++++++++  ====  +++++++++  ==
//  ====  +++++  ========  +++++  ========  +++++  ========  +++++  ====
//  ======  +  ============  +  ============  +  ============  +  ======
// =======================================================================

const form = document.querySelectorAll("form");

form[1].addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(`Добрый день ${e.target[0].value} из ${e.target[1].value}`);
});

// const input = document.querySelector(".name");
// input.addEventListener("focus", () => {
//   console.log("INPUT IS IN FOCUS");
// });

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });
// input.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });
let body = document.querySelector("body");
body.addEventListener("keypress", (e) => {
  console.log(e.key);
});

// let card = document.querySelector(".card");
// let cardChange = (e) => {
//   e.preventDefault();
//   e.target.nodeName === "IMG"
//     ? (e.target.src =
//         "https://static3.depositphotos.com/1004996/226/i/450/depositphotos_2260019-stock-photo-glowing-font-shiny-letter-s.jpg")
//     : e.target.nodeName === "LI"
//     ? (e.target.style.background = "tomato")
//     : e.target.nodeName === "H3"
//     ? (e.target.textContent = "dye-bye")
//     : "";
// };
// card.addEventListener("click", cardChange);
let list = document.querySelector(".list_card");
// let item = document.querySelector(".card-item");
// let text = document.querySelector(".text");

let itemChande = (e) => {
  e.preventDefault();
  e.target.nodeName === "IMG"
    ? (e.target.src = "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg")
    : e.target.nodeName === "H2"
    ? (e.target.textContent += " edit")
    : e.target.nodeName === "BUTTON"
    ? (e.target.previousElementSibling.style.whiteSpace = "normal")
    : "";
};

list.addEventListener("click", itemChande);

// let btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   e.target.text.classList.remove("text");
// });
// console.log();
