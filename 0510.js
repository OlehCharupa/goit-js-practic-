const body = document.querySelector("body")
const section = document.querySelector(".section")
const picture = document.querySelector("#wrapper-img")
const showButton = document.querySelector("[data-action='show']")
const showButton1 = document.getElementById("show-btn")
const sectionTitle = document.querySelector(".section-title")
const mainList = document.querySelector(".main-list")
const arrMainListItem1 = document.querySelectorAll(".main-list-item")
const arrMainListItem2 = mainList.querySelectorAll(".main-list-item")
const arrMainListItem3 = mainList.children
const arrMainListItem4 = document.getElementsByClassName("main-list-item")
const innerListTitle = document.querySelector(".main-list-item__title")
const eventsList = document.querySelector("#events")
const eventListItem1 = document.querySelectorAll("#events li")
const eventListItem2 = document.querySelectorAll("#events li")
const beautyImage = document.getElementById("beauty")

// --------------------------------------------------------------------
picture.setAttribute("width", "450px")


showButton.addEventListener("click", () => {
    // picture.classList.toggle("picture")
})
// ---------------------------------------------------------------------
sectionTitle.addEventListener("click", () => {
    sectionTitle.style.fontSize = "99px"
    sectionTitle.style.textAlign = "center";
    sectionTitle.style.color = "green";
    body.style.backgroundColor = "yellow"
})
// --------------------------------------------------------------------------------------------------------------------
const arrMethods = ["getElementsByClassName", "getElementById", "querySelector", "querySelectorAll"]
const methodList = document.createElement("ul")
const method = arrMethods.map(el => {
    const methodItem = document.createElement("li")
    methodItem.textContent = el
    methodList.append(methodItem)
})
// methodList.innerHTML = `<li>${methods[0]}</li><li>${methods[1]}</li ><li>${methods[2]}</li><li>${methods[3]}</li>`
mainList.firstElementChild.append(methodList)
// --------------------------------------------------------------
const url1 = "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
const url2 = "https://image.shutterstock.com/image-illustration/tropical-island-3d-illustration-260nw-743218933.jpg"
beautyImage.src = url1
showButton.addEventListener("click", () => {
    if (beautyImage.src === url1 && sectionTitle.style.color === "black") {
        beautyImage.src = url2;
        sectionTitle.style.color = "red"
    } else {
        beautyImage.src = url1;
        sectionTitle.style.color = "black"
    }
})
// ---------------------------------------------------------------------
