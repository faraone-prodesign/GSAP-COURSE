let screenPrice = 10000;

let titleProject = prompt('Название проекта?');
let screensValue = prompt('Какой тип экрана вас интересует: шаблонные, с уникальным дизайном, с анимациями');
let responsive = confirm('нужен ли респонсивный сайт?');
let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой ещё сервис нужен?');
let servicePrice2 = prompt('Сколько будет стоить дополнительный сервис?');

function initCalc() {

    let getAllServicePrices = function() {
        return +servicePrice1 + +servicePrice2;
    };
    let allServicePrices = getAllServicePrices();

    function getFullPrice() {
        return allServicePrices + screenPrice;
    }
    let fullPrice = getFullPrice();

    function getTitle() {
        return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
    };

    titleProject = getTitle();

    function getServicePercentPrices() {
        let percent = fullPrice / 100 * 15;
        return fullPrice - percent;
    };
    
    let servicePercentPrice = getServicePercentPrices();
    console.log(servicePercentPrice);

    function getRollbackMessage() {
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
    
    getRollbackMessage()
}

initCalc()