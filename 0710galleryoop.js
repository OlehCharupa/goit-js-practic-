import gallery from './photo.js';

const refs = {
    photoGallery: document.querySelector('.photo-gallery'),
    overlay: document.querySelector('.js-lightbox'),
    overlayIMG: document.querySelector('.lightbox__image'),
    buttonClose: document.querySelector(".lightbox__button"),
    overlayBox: document.querySelector(".lightbox__overlay")
}

class Gallery {
    constructor({ photoGallery, overlay, overlayIMG, buttonClose, overlayBox }, array) {
        this.photoGallery = photoGallery;
        this.overlay = overlay;
        this.overlayIMG = overlayIMG;
        this.buttonClose = buttonClose;
        this.overlayBox = overlayBox;
        this.array = array;
    }
    createElement(obj, index) {
        // this.photoGallery = document.querySelector('.photo-gallery');
        // this.overlay = document.querySelector('.js-lightbox');
        // this.overlayIMG = document.querySelector('.lightbox__image');

        this.title = document.createElement('h2');
        this.title.textContent = obj.title;
        this.picture = document.createElement('img');
        this.picture.src = obj.image;
        this.picture.alt = obj.category;
        this.picture.width = '450';
        this.picture.classList.add('picture');
        this.picture.setAttribute('data-index', index);
        this.text = document.createElement('p');
        this.text.textContent = obj.description;
        this.subTitle = document.createElement('h3');
        this.subTitle.innerHTML = `<span>категория: </span>${obj.category}`;
        this.subText = document.createElement('p');
        this.subText.innerHTML = `<span>серия: </span>${obj.seria}`;
        this.photoGrapher = document.createElement('p');
        this.photoGrapher.innerHTML = `<span>фотограф: </span>${obj.author.name}`;
        this.country = document.createElement('p')
        this.country.innerHTML = `( ${obj.author.country}<span>  ${obj.author.city}</span>)`;
        this.galleryItem = document.createElement('li');
        this.galleryItem.classList.add('galleryItem');
        this.galleryItem.append(this.title, this.picture, this.text, this.subTitle, this.subText, this.photoGrapher, this.country);
        this.photoGallery.append(this.galleryItem);
    }
    galleryRey() {
        this.array.map((obj, index) => this.createElement(obj, index))
    }
    clearOverlay() {
        this.overlay.classList.remove('is-open');
        this.overlayIMG.src = '';
    }
    setNewSrc(step, index) {
        this.overlayIMG.dataset.index = `${index + step}`;
        this.overlayIMG.src = this.array[index + step].image;
    }
    arrowLeft() {
        let index = +this.overlayIMG.dataset.index;
        if (index === 0) {
            this.setNewSrc(0, this.array.length - 1)
            return
        }
        this.setNewSrc(-1, index)
    }
    arrowRight() {
        let index = +this.overlayIMG.dataset.index;
        if (index === this.array.length - 1) {
            this.setNewSrc(0, 0)
            return
        }
        this.setNewSrc(1, index)
    }
    allClick() {
        this.photoGallery.addEventListener('click', (e) => {
            if (e.target.nodeName === 'IMG') {
                this.overlay.classList.add('is-open');
                this.overlayIMG.src = e.target.src;
                this.overlayIMG.dataset.index = e.target.dataset.index;
            }
        });
        this.buttonClose.addEventListener('click', () => {
            this.clearOverlay()
        });

        this.overlayBox.addEventListener('click', () => {
            this.clearOverlay()
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' || e.code === 'Escape') {
                this.clearOverlay()
            }
            if (e.key === 'ArrowLeft' || e.code === 'ArrowLeft') {
                this.arrowLeft()
            }
            if (e.key === 'ArrowRight' || e.code === 'ArrowRight') {
                this.arrowRight()
            }
        });
    }
    init() {
        window.addEventListener('DOMContentLoaded', this.galleryRey(), this.allClick());

    }
}
new Gallery(refs, gallery).init()