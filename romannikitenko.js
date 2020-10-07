import gallery from './photo.js'
console.log(gallery);
const galleryList = document.querySelector('.photo-gallery')
const overlay = document.querySelector('.js-lightbox')
const overlayImg = document.querySelector('.lightbox__image')
const cart = gallery.map((el, index) => {
    const title = document.createElement('h2')
    title.setAttribute('class', 'title')
    title.textContent = el.title

    const picture = document.createElement('img')
    picture.setAttribute('class', 'picture')
    picture.setAttribute('src', el.image)
    picture.setAttribute('alt', el.category)
    picture.setAttribute('width', '450px')
    picture.setAttribute('data-index', index)

    const description = document.createElement('p')
    description.textContent = el.description

    const subtitle = document.createElement('h3')
    subtitle.setAttribute('class', 'subtitle')
    subtitle.innerHTML = `<span>категория: </span> ${el.category}`

    const seria = document.createElement('p')
    seria.innerHTML = `<span>серия: </span> ${el.seria}`

    const photographer = document.createElement('p')
    photographer.innerHTML = `< span > фотограф: </span > ${el.author.name} `;

    const country = document.createElement('p')
    country.innerHTML = `(${el.author.country} < span > - ${el.author.city}</span >)`;

    const galleryItem = document.createElement('li')
    galleryItem.setAttribute('class', 'gallery-Item')
    galleryItem.append(title, picture, description, subtitle, seria, photographer, country)
    galleryList.append(galleryItem)
})
// {
//      "id": "13",z
//      "image": "https://www.dw.com/image/53739842_303.jpg",
//      "title": "Природа и ее защитники",
//      "seria": "Семена сопротивления",
//      "category": "Креатив",
//      "description": "Эта серия, которую автор назвал 'Семена сопротивления', состоит из снимков, на которых показаны защитники природы Южной Америки, и та природа, которую они защищают. На этой фотографии - Нанту из Эквадора и тропический лес. Первое место.",
//      "author": {
//        "name": "Пабло Альбаренга",
//        "country": "Уругвай",
//        "city": ""
//      }
galleryList.addEventListener('click', (event) => {
    if (event.target.nodeName === 'IMG') {
        // элемент на котором произошол клик
        overlay.classList.add('is-open')
        overlayImg.src = event.target.src
        overlayImg.dataset.index = event.target.dataset.index
    }
})
overlay.addEventListener("click", clearOverlay)

// overlay.addEventListener('click', () => {
//      overlay.classList.remove('is-open')
//      overlayImg.src = '';
// })

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        clearOverlay()
    }
    if (event.key === 'ArrowLeft') {
        arrowLeft()
    }
    if (event.key === 'ArrowRight') {
        arrowRight()
    }
})

function clearOverlay() {
    overlay.classList.remove('is-open')
    overlayImg.src = '';
}

function setNewSrc(step, index) {
    overlayImg.dataset.index = `${index + step}`
    overlayImg.src = gallery[index + step].image
}

function arrowLeft() {
    // let index = Number(overlayImg.dataset.index)
    let index = +overlayImg.dataset.index
    if (index === 0) {
        setNewSrc(0, gallery.length - 1)
        return
    }
    setNewSrc(-1, index)
}

function arrowRight() {
    // let index = Number(overlayImg.dataset.index)
    let index = +overlayImg.dataset.index
    if (index == gallery.length - 1) {
        setNewSrc(0, 0)
        return
    }
    setNewSrc(1, index)
}