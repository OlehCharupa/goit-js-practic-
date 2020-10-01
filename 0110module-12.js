// function delay(ms) {
//     return new Promise(function (res, rej) {
//         setTimeout(() => {
//             res()
//         }, ms)
//     })
// }
// delay(3000).then(() => alert('выполнилось через 3 секунды'));



// ____________________________________________________

// let ferrari = new Promise((res, rej) => {
//     const t = 600;
//     setTimeout(() => {
//         res({ car: "ferrari", t })
//     }, t);
// })

// let lambo = new Promise((res, rej) => {
//     const t = 600;
//     setTimeout(() => {
//         res({ car: "lambo", t })
//     }, t);
// })
// let bmw = new Promise((res, rej) => {
//     const t = 600;
//     setTimeout(() => {
//         res({ car: "bmw", t })
//     }, t);
// })

// const firstOnFinish = Promise.race([ferrari, lambo, bmw])

// console.log(firstOnFinish);

// _____________________________________________________

// let ferrari = new Promise((res, rej) => {
//     const t = 1100;
//     setTimeout(() => {
//         res({ car: "ferrari", t })
//         console.log("1");
//     }, t);
// })

// let lambo = new Promise((res, rej) => {
//     const t = 1600;
//     setTimeout(() => {
//         res({ car: "lambo", t })
//         console.log("2");
//     }, t);
// })
// let bmw = new Promise((res, rej) => {
//     const t = 2600;
//     setTimeout(() => {
//         res({ car: "bmw", t })
//         console.log("3");
//     }, t);
// })

// const firstOnFinish = Promise.all([ferrari, lambo, bmw])

// console.log(firstOnFinish);

// +++++++++++++++++++++++ FETCH ++++++++++++++++++++++++++++
// const getCurrencyInfo = function (str) {
//     document.querySelector('div').innerHTML = `<h1>Loding</h1>`;
//     fetch(str)
//         .then(data => data.json())
//         .then(data => data.map(e => {
//             document.body.innerHTML += `<p>Валюта ${e.ccy}. Национальная валюта ${e.base_ccy}</p><h3>Покупка ${e.buy}</h3><h3>Продажа ${e.sale}</h3>`
//         }))
//         .finally(() => document.querySelector("div").innerHTML = "")
// }
// getCurrencyInfo("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4")


// const getCurrencyInfo = function (str) {
//     document.querySelector('div').innerHTML = `<h1>Loding</h1>`;
//     fetch(str)
//         .then(data => data.json())
//         .then(data => data.map(e => {
//             document.body.innerHTML += `<p>Валюта ${e.ccy}. Национальная валюта ${e.base_ccy}</p><h3>Покупка ${e.buy}</h3><h3>Продажа ${e.sale}</h3>`
//         }))
//         .finally(() => document.querySelector("div").innerHTML = "")
// }
// getCurrencyInfo("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")


fetch("https://pokeapi.co/api/v2/pokemon")
    .then(data => data.json())
    // .then(data => console.log(data))
    .then(data => data.map(e => {
        document.body.innerHTML += `<h2>${next}</h2>`
    }))