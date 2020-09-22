// // JavaScript

// // BOM, browser object model
// // Navigator

// // DOM,

// // API

// console.log(document)

// let vova = {
//     name: 'Vova',
//     age: 30
// }

// console.log(vova.name)

// vova.name = 'Sara';
// console.log(vova.name)

// document.querySelector('p')
// document.querySelectorAll('.my-class')

{
  /* <h1 class="title" id="heading">Heading</h1> */
}
// let h1 = document.querySelector('h1')
// h1 = document.querySelector('#heading')
// h1 = document.querySelector('.title');
// console.log(h1)

{
  /* <p class="text">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
cum, iure vitae natus alias repellendus dolor soluta quae quam
exercitationem impedit laboriosam nostrum molestiae magnam ut? Quos
distinctio laudantium vero.
</p> */
}

// let p = document.querySelector('p');
// p = document.querySelector('.text');
// console.log(p)

{
  /* <ul class="list">
    <li class="list__item">Item_1</li>
    <li class="list__item">Item_2</li>
    <li class="list__item">Item_3</li>
    <li class="list__item">Item_4</li>
</ul> */
}
{
  /* <ul class="list">
<li class="list__item">Item_5</li>
<li class="list__item">Item_6</li>
<li class="list__item">Item_7</li>
<li class="list__item">Item_8</li>
</ul> */
}

// let ul = document.querySelectorAll('ul');
// let li = ul[0].querySelectorAll('li');
// console.log(ul[0])
// console.log(li)
// // console.log(ul[1])

{
  /* <p class="text">
Lorem ipsum dolor sit <span>box</span> amet consectetur adipisicing
elit. Ratione ex ab, nulla nemo molestiae incidunt placeat quo
mollitia illo rerum cupiditate magni. Totam explicabo quas illum,
soluta cumque mollitia non!
</p>
<p class="text">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
cum, iure vitae natus alias repellendus dolor soluta quae quam
exercitationem impedit laboriosam nostrum molestiae magnam ut? Quos
distinctio laudantium vero.
</p> */
}

// let p = document.querySelectorAll('p')[1].style.background = 'green';
// let p = document.querySelectorAll('p');
// p[1].style.background = 'blue';
// console.log(p);

// let heading = document.getElementById('heading');
// let paragraph = document.getElementsByClassName('text');  // HTML Collection
// let p = document.querySelectorAll('p'); // NodeLIst

// Array.from(paragraph).forEach((elem) => {
//     console.log(elem)

// }
// )

// let html = [...paragraph];
// html.forEach((elem) => {
//     console.log(elem)

// }
// )

// p.forEach((elem) => {
//     console.log(elem)

// })

// console.log(paragraph);
// console.log(p)

// Traversing dom

{
  /* <ul class="list">
<li class="list__item">Item_5</li>
<li class="list__item">Item_6</li>
<li class="list__item">Item_7</li>
<li class="list__item">Item_8</li>
</ul> */
}

// let list = document.querySelectorAll('ul');
// console.log(list[1]);

// Manipulating elements

// font-size: 30px;
// fontSize: 30

// 1. Style
// document.body.style.background = 'blue';
// document.querySelector('.text').style.background = 'green'
// document.querySelector('.text').style.fontSize = '26px'

// 2. Classes
// let list = document.querySelectorAll('ul');
// // list[1].className
// list[1].classList.add('js-hook-list')
// list[1].classList.remove('js-hook-list')
// console.log(list[1]);

// 3. setAttribute, remoweAttibute
{
  /* <ul class="list" id="my-list">
<li class="list__item">Item_5</li>
<li class="list__item">Item_6</li>
<li class="list__item">Item_7</li>
<li class="list__item">Item_8</li>
</ul> */
}

// let list = document.querySelectorAll('ul');
// // list[1].setAttribute('id', 'js-my-list');
// // list[1].removeAttribute('id');
// // list[1].id = 'new-way';

// let img = document.querySelector('img');
// // img.alt = 'cat'
// // img.width = '250';

// img.setAttribute('alt', 'dog');
// img.removeAttribute('alt');
// img.id = 'sdVfadrfgrgRgrdgdrh'
// console.log(img)

// let h2 = document.querySelector('h2');
// // h2.innerText = 'Vova';
// // h2.innerHTML = '<span>COPY</span>';

// console.log(h2.innerText);

// 4. Creating elements

// let catImg = document.createElement('img');
// // let body = document.querySelector('body');
// let list = document.querySelectorAll('ul');

// catImg.setAttribute('src', 'https://loremflickr.com/640/360');
// catImg.setAttribute('alt', 'cat-image');
// catImg.getAttribute('alt');

// // catImg.src = ''
// // catImg.alt = ''
// // body.appendChild(catImg);
// // list[1].append(catImg);
// // list[1].prepend(catImg);
// // list[1].after(catImg);
// list[1].before(catImg);

// Events
// let btn = document.querySelector('button');
// btn.addEventListener('click', (event) => {
//     // console.log('Click')
//     console.log(event.target);
//     // console.log(event.type);
//     // console.log(event);

//     console.log(this)

// })

// btn.addEventListener('focus', function (event) {
//     // console.log('Click')
//     // console.log(event.target);
//     console.log(event);
//     // console.log(event.type);
//     // console.log(event);

//     // console.log(this)

// })

// window.addEventListener('load', (e) => {
//     console.log(e);
// }
// );

// window.addEventListener('resize', (event) => {
//     console.log(event.target);
// }
// )

// let a = document.querySelector('a').addEventListener('click', (event) => {
//     console.log('click')
//     // event.preventDefault();

// }
// )
