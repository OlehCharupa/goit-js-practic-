// const date = new Date(1993, 6, 23, 17, 10)
// console.log(date);

// const date = Date.now()
// console.log(date);

// const date1 = new Date(date)
// console.log(date1);

// setInterval(() => {
//     let currentDate = Date.now()
//     let futureDate = new Date(2020, 8, 28, 12, 4)
//     let futureDateMs = futureDate.getTime()
//     currentDate > futureDateMs ? alert("время настало") : console.log("жди");
// }, 1000);
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// =====================================================
const clickStart = document.querySelector(".start")
const clickStop = document.querySelector(".stop")
let result = document.querySelector(".result")
let i = 0;
let timer;
let resept = 0;

clickStart.addEventListener("click", () => {
    clickStart.setAttribute("disabled", "disabled");
    timer = setInterval(() => {
        result.textContent = `${++i}`;
    }, 1000);
})
clickStop.addEventListener("click", (e) => {
    console.log(e.target);
    clearInterval(timer);
    console.log(clickStop);
    if (e.target === clickStop) {
        clickStart.removeAttribute("disabled");
        i = resept;
    }
})


// clickStop.addEventListener("click", () => {

//     if (result.textContent > 0) {
//     }
// })
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// let date = new Date('Sep 29 2020 00:00:00').getTime();
// let p = document.querySelector('#event-day');
// let currentTime = new Date().getTime();
// console.log(currentTime)
// let expirationDate = setInterval(() => {
//     let currentTime = new Date().getTime()
//     let distance = date - currentTime;
//     // console.log(distance);
//     let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
//     let seconds = Math.floor(distance % (1000 * 60) / (1000));
//     p.textContent = `${day}d, ${hours}h, ${minutes}m, ${seconds}s`;
//     if (distance < 0) {
//         clearInterval(expirationDate);
//         p.textContent = `Expired`;
//     }
// }, 1000);
// =====================================================
// =====================================================
// =====================================================
// class PromotionTimer {
//     constructor(date) {
//         this.date = new Date(date).getTime();
//         this.p = document.querySelector('#event-day')
//     }
//     expirationDate() {
//         setInterval(() => {
//             let currentTime = new Date().getTime()
//             let distance = this.date - currentTime;
//             let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//             let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//             let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
//             let seconds = Math.floor(distance % (1000 * 60) / (1000));
//             this.p.textContent = `${day}d ${hours}h ${minutes}m ${seconds}s`;
//             if (distance < 0) {
//                 clearInterval(this.expirationDate);
//                 this.p.textContent = `Expired`;
//             }
//         }, 1000);
//     }
// }
// new PromotionTimer('Sep 29 2020 00:00:00').expirationDate()

// =====================================================
// =====================================================
// =====================================================
// =====================================================
// =====================================================
// =====================================================

