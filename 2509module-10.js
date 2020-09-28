const body = document.querySelector("body");
const checkBox = document.getElementById("checkbox");

checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
        body.classList.add("blue_background");
        body.classList.remove("yellow_background");
        localStorage.setItem("class", "blue_background");
    } else {
        body.classList.remove("blue_background");
        body.classList.add("yellow_background");
        localStorage.removeItem("class", "");
    }
});

if (localStorage.getItem("class", "blue_background")) {
    body.classList.add("blue_background");
    checkBox.checked = true;
} else {
    body.classList.add("yellow_background");
    checkBox.checked = false;
}

import poke from "./poke.js";
const list = document.createElement("ul")
body.append(list)
poke.map((el) => {
    const item = document.createElement("li")
    item.style.width = "200px",
        item.style.textAlign = "center"
    item.style.fontSize = "22px"
    list.append(item)
    item.insertAdjacentHTML("beforeend", `<h2>${el.name}</h2>`);
    item.insertAdjacentHTML("beforeend", `<img width='200px' src='${el.sprites.front_shiny}'>`);
    const item_move = el.moves.map(elem => elem.move.name)
    item_move.map((ix) => {
        item.innerHTML += `<li>${ix}</li>`
    });
});
