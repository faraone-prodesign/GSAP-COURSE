// let x = 11;

// if (x > 10) {
//     console.log('Условие верно')
// } else {
//     console.log('Условие не верно')
// }

// let a = 5;
// let b = '10';
// let res = a +  +b
// console.log(a.toString())

// console.log(res)

// console.log(typeof a);
// console.log(typeof b);

// console.log(a+b);

// alert('Hello')

// let age = prompt('Укажите возраст') 
// let a = 10
// let res = +age + a

// console.log(res)

let titleProject = prompt('Название проекта?');
let screensValue = prompt('Какой тип экрана вас интересует: шаблонные, с уникальным дизайном, с анимациями');
let responsive = confirm('нужен ли респонсивный сайт?');
let screenPrice = 10000;

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой ещё сервис нужен?');
let servicePrice2 = prompt('Сколько будет стоить дополнительный сервис?');
let fullPrice = screenPrice + +servicePrice1 + +servicePrice2;

let percent = fullPrice / 100 * 15
let servicePercentPrice = fullPrice - percent
console.log(servicePercentPrice.toString())

let x = fullPrice

if (x > 50000) {
    console.log('Ваша скидка 10%');
} else if (x > 20000 || x < 50000) {
    console.log('Ваша скидка 5%');
} else if (x < 20000 || x > 0) {
    console.log('Спасибо за покупку!)');
} else if (x < 0) {
    console.log('Что то пошло не так');
}

console.log(titleProject, screensValue, responsive, servicePercentPrice);