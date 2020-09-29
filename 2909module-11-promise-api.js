// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => { resolve("done") }, 1000)
// })
// console.log(promise);

// let prom = new Promise(function (resolve, reject) {
//     return resolve("ура")
// })
// console.log(prom);


// let prom = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         reject(new Error("Wooops!!!"))
//     }, 1000);
// })

// console.log(prom);
// ========================================================
// =================== метод .then ========================
// =========================================================
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => { resolve("1234") }, 1000)
//     // reject(
//     //     new Error("Oooooooooopa")
//     // )
// })

// promise.then(
//     result => result + "56789",
//     error => alert(error)
// )
//     .then(
//         data => console.log(data),
//     )

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(0)
//     }, 1000)
// })
// promise.then(data => data + 2)
//     .then(data => data * 10)
//     .then(data => data * 5)
//     .then(data => console.log(data))
// ========================================================
// =================== метод .catch ========================
// =========================================================
// let isDone = true;


// let promise = new Promise((resolve, reject) => {
//     if (!isDone) {
//         setTimeout(() => {
//             resolve()
//         }, 1000);
//     } else {
//         setTimeout(() => {
//             reject(new Error(`<h1>Ошибка!</h1>`))
//         }, 1000);
//     }
// })
// promise
//     .then(date => document.querySelector("body").innerHTML = date)
//     .catch(err => document.querySelector("body").innerHTML = err)
// ========================================================
// =================== метод .finally ========================
// =========================================================
// new Promise((resolve, reject) => {

// })
//     .finally(() => остановить индикатор загрузки)
//     .then(result => показать результат,
//         err => показать ошибку)

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("lalalalalala")
//     }, 1000);
// })
//     .finally(() => alert("промис выполнен"))
//     .then(result => alert(result))

// new Promise((resolve, reject) => {
//     throw new Error("error")
// })
//     .then(date => date += 1)
//     .finally(() => alert("промис выполнен"))
// //     .then(result => alert(result))

// function loadImages(src) {
//     return new Promise(function (resolve, reject) {
//         let images = document.createElement("img");
//         images.src = src;

//         images.onload = () => resolve(images);
//         images.onerror = () => reject(new Error(`ошибка загрузки скрипта ${src}`));

//         document.body.append(images)
//     })
// }




// const promise = loadImages("https://www.nme.com/wp-content/uploads/2020/04/rick-and-morty-season-4.jpg")

// promise.then(
//     img => alert(`успешная загрузка ${img.src}`),
//     error => alert(`ошибка ${error.message}`)
// )
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction, onSuccess, onError) => {
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
        const canProcess = Math.random() > 0.3;

        if (canProcess) {
            onSuccess(transaction.id, delay);
        } else {
            onError(transaction.id);
        }
    }, delay);
};

const logSuccess = (id, time) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);