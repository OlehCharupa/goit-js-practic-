// import gallery from "./2309-gallery.js";

// const body = document.querySelector("body");
// console.dir(body);
// gallery.map((el) => {
//   body.innerHTML += `<img width="300" src="${el.src}" data-src="${el.data}" class="imgs" id="${el.id}">`;
// });

// window.onload = () => {
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1,
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       entry.isIntersecting ? (entry.target.src = entry.target.dataset.src) : "";
//     });
//   }, options);

//   document.querySelectorAll(".imgs").forEach((el) => {
//     observer.observe(el);
//   });
// };
