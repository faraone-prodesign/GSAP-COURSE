let screenPrice; //Цена страницы
let titleProject; //Название проекта 
let screensValue; //Тип экрана
let responsive; //Респонсивный или нет
let serviceFirst; //Услуга 1
let serviceSecond; //Услуга 2
let allServicePrices; //Сумма дополнительных услуг
let fullPrice; //Общая сумма (цена экрана + доп.услуги)
let servicePercentPrices; //Сумма с учетом %
let rollbackMessage; //Рассчет скидки 

const getAsking = function() { //Задает общие вопросы
    titleProject = prompt('Название проекта');
    screensValue = prompt('Какой тип экрана вас интересует: шаблонные, с уникальным дизайном, с анимациями');
    responsive = confirm('Нужен ли респонсивный сайт?');

    screenPrice = prompt('Сколько это будет стоить?', 12000);

    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt('Сколько это будет стоить?', 12000);
    }
    screenPrice = Number(screenPrice);
}
getAsking(); 

function checkIsNumber(checkNumber) { //Проверяет на соответсвием Number
    return !isNaN(parseFloat(checkNumber)) && isFinite(checkNumber);
}

const getAllServicePrices = function() { //Считает сумму всех доп.услуг
    let sum = 0

    for (let i = 0; i < 2; i++) { //Переменная let i - ??
        if (i === 0) {
            serviceFirst = prompt('Какой дополнительный тип услуг нужен?', 'AMO CRM - Услуа 1');
        } else if (i === 1) {
            serviceSecond = prompt ('Какой дополнительный тип услуг нужен?', 'BITRIX CRM - Услуга 2');
        }

        let textFromPromt = '';

        while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить?');
        }
        sum += Number(textFromPromt); //sum += - ??

    }

    return sum
    
}
allServicePrices = getAllServicePrices();

function getFullPrice() { //Считает полную стоимость проекта
    return screenPrice + allServicePrices;
}
fullPrice = getFullPrice();

const getServicePercentPrices = function() { //Считает стоимость проекта с учетом %
    return fullPrice - (fullPrice / 100 * 15);
}
servicePercentPrices = getServicePercentPrices();

const getTitle = function() { //Переводит символы в необходимый регистр
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}
titleProject = getTitle();

function getRollbackMessage() { //Выводит сообщение о скидке
    let price = fullPrice

    if (price > 50000) {
        return 'Ваша скидка 10%';
    } else if (price > 20000 && price <= 50000) {
        return 'Ваша скидка 5%';
    } else if (price > 0 && price <= 20000) {
        return  'Спасибо за покупку!';
    } else if (price <= 0) {
        return 'Page not found';
    } 

}
rollbackMessage = getRollbackMessage();

console.log('Название проекта:', titleProject);
console.log('Тип экрана:', screensValue);
console.log('Респонсивный или нет:', responsive);
console.log('Сервис 1:', serviceFirst);
console.log('Сервис 2:', serviceSecond);
console.log('Сумма дополнительных сервисов:', +allServicePrices);
console.log('Полная стоимость:', +fullPrice);
console.log('Стоимость с учетом % подрядчику:', +servicePercentPrices);
console.log('Сообщение пользователю:', rollbackMessage);