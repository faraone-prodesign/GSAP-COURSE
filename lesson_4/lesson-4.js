let screenPrice = 10000;

let titleProject = prompt('Название проекта?');
let screensValue = prompt('Какой тип экрана вас интересует: шаблонные, с уникальным дизайном, с анимациями');
let responsive = confirm('нужен ли респонсивный сайт?');
let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой ещё сервис нужен?');
let servicePrice2 = prompt('Сколько будет стоить дополнительный сервис?');
let fullPrice = screenPrice + +servicePrice1 + +servicePrice2;

// let percent = fullPrice / 100 * 15
// let servicePercentPrice = fullPrice - percent
// console.log(servicePercentPrice.toString())

// let x = fullPrice

// if (x > 50000) {
//     console.log('Ваша скидка 10%');
// } else if (x > 20000 && x < 50000) {
//     console.log('Ваша скидка 5%'); 
// } else if (x > 0 && x < 20000) {
//     console.log('Спасибо за покупку!'); 
// } else if (x < 0) {
//     console.log('Page not found');
// } else if (x === 0 || x === 20000 || x === 50000) {
//     console.log('Проверка на строгое равенство');
// }

// console.log(titleProject, screensValue, responsive, service1, servicePrice1, service2, servicePrice2, fullPrice, servicePercentPrice);

'use strict'

// let getAllServicePrices = function() {
//     allServicePrices = +servicePrice1 + +servicePrice2;
//     console.log(allServicePrices);
// };

// getAllServicePrices()

// function getFullPrice() {
//     let fullPrice = allServicePrices + screenPrice;
//     console.log(fullPrice);
// }

// getFullPrice()

// function getTitle() {
//     let result = titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
//     console.log(result);
// };

// getTitle()

// function getServicePercentPrices() {
//     let percent = fullPrice / 100 * 15;
//     let servicePercentPrice = fullPrice - percent;
//     console.log(servicePercentPrice.toString());
// };

// getServicePercentPrices()

// function costCalculator() {
//     let x = fullPrice

//     if (x > 50000) {
//         console.log('Ваша скидка 10%');
//     } else if (x > 20000 && x < 50000) {
//         console.log('Ваша скидка 5%'); 
//     } else if (x > 0 && x < 20000) {
//         console.log('Спасибо за покупку!'); 
//     } else if (x < 0) {
//         console.log('Page not found');
//     } else if (x === 0 || x === 20000 || x === 50000) {
//         console.log('Проверка на строгое равенство');
//     }

// }

// costCalculator()

function getRollbackMessage() {
    let getAllServicePrices = function() {
        allServicePrices = +servicePrice1 + +servicePrice2;
        console.log(allServicePrices);
    };
    
    getAllServicePrices()
    
    function getFullPrice() {
        let fullPrice = allServicePrices + screenPrice;
        console.log(fullPrice);
    }
    
    getFullPrice()
    
    function getTitle() {
        let result = titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
        console.log(result);
    };
    
    getTitle()
    
    function getServicePercentPrices() {
        let percent = fullPrice / 100 * 15;
        let servicePercentPrice = fullPrice - percent;
        console.log(servicePercentPrice.toString());
    };
    
    getServicePercentPrices()
    
    function costCalculator() {
        let x = fullPrice
    
        if (x > 50000) {
            console.log('Ваша скидка 10%');
        } else if (x > 20000 && x < 50000) {
            console.log('Ваша скидка 5%'); 
        } else if (x > 0 && x < 20000) {
            console.log('Спасибо за покупку!'); 
        } else if (x < 0) {
            console.log('Page not found');
        } else if (x === 0 || x === 20000 || x === 50000) {
            console.log('Проверка на строгое равенство');
        }
    
    }
    
    costCalculator()
}

getRollbackMessage()