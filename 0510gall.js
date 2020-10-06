import gallery from "./photo.js"
// console.log(gallery);
const galleryList = document.querySelector(".photo-gallery")
const overlay = document.querySelector(".js-lightbox")
const overlayImage = document.querySelector(".lightbox__image")


const cart = gallery.map((el, index) => {
    const title = document.createElement("h2")
    title.setAttribute("class", "title")
    title.textContent = el.title
    // 
    const picture = document.createElement("img")
    picture.setAttribute("class", "picture")
    picture.setAttribute("src", el.image)
    picture.setAttribute("alt", el.category)
    picture.setAttribute("width", "450px")
    picture.setAttribute("data-index", index)
    // 
    const description = document.createElement("p")
    description.setAttribute("class", "description")
    description.textContent = el.description
    // 
    const subtitle = document.createElement("h3")
    subtitle.setAttribute("class", "subtitle")
    subtitle.innerHTML = `<span>категория: </span> ${el.category}`
    // 
    const seria = document.createElement("p")
    seria.setAttribute("class", "seria")
    seria.innerHTML = `<span>серия: </span> ${el.seria}`
    // 
    const photographer = document.createElement("p")
    photographer.setAttribute("class", "photographer")
    photographer.innerHTML = `<span>фотограф: </span> ${el.author.name}`
    // 
    const country = document.createElement("p")
    country.setAttribute("class", "country")
    country.innerHTML = `(${el.author.country}<span> - ${el.author.city}</span>)`
    // 
    const galleryItem = document.createElement("li")
    galleryItem.setAttribute("class", "galleryItem")
    // 
    galleryItem.append(title, picture, description, subtitle, seria, photographer, country)
    // 
    galleryList.append(galleryItem)
})

galleryList.addEventListener("click", (e) => {
    if (e.target.nodeName === "IMG") {
        overlay.classList.add("is-open")
        overlayImage.src = e.target.src
        overlayImage.dataset.index = e.target.dataset.index
    }
})
overlay.addEventListener("click", clearImg)
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        clearImg()
    }
    if (e.key === "ArrowLeft") {
        arrowLeft()
    }
    if (e.key === "ArrowRight") {
        arrowRight()
    }

})
function clearImg() {
    overlay.classList.remove("is-open")
    overlayImage.src = ""
}
function setNewSrc(step, index) {
    overlayImage.dataset.index = `${index + step}`
    overlayImage.src = gallery[index + step].image
}
function arrowLeft() {
    let index = +overlayImage.dataset.index
    if (index === 0) {
        setNewSrc(0, gallery.length - 1)
        return
    }
    console.log(index);
    setNewSrc(-1, index)
}
function arrowRight() {
    let index = +overlayImage.dataset.index
    if (index === gallery.length - 1) {
        setNewSrc(0, 0)
        return
    }
    console.log(index);
    setNewSrc(1, index)
}
