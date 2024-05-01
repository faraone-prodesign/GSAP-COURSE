'use strict'

const gameBotFunction = function() {
        function randomGenerate(min, max) {
            let random = (Math.floor(Math.random() * 100) + 1);
            return Math.round(random);
        }

    let mysteryNumber = randomGenerate(1, 100);
    let answerNum = ''
    let tries = 3

    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    }

    return function getResult() {
        answerNum = prompt('Угадайте число от 1 жо 100')
        if (answerNum === null) {
            alert('Вы завершили игру')
            return
        }
        while (!isNumber(answerNum) || answerNum.trim() === '') {
            alert('Вы ввели строчку:')
            answerNum = prompt('Угадайте число от 1 до 100')
        }
        answerNum = Number(answerNum)

        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше:' + 'Осталось попыток:' + tries)
        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше:' + 'Осталось попыток:' + tries)
        } else if (mysteryNumber === answerNum) {
            const isUserWantNewGame = confirm('Поздравляю, вы угадали!!! Хотели бы сыграть ещё?')
            if (isUserWantNewGame) {
                tries = 3
                mysteryNumber = randomGenerate(1, 100)
            } else {
                tries = 0
            }
        }

        if (tries > 0) {
            tries--
            getResult();
        } else {
            const maybeAgain = confirm('Попыток больше нет, игра окончена. Хотите начать заново?')
            if (maybeAgain) {
                tries = 2
                getResult();
            } else {
                alert('Вы завершили игру')
                return
            }
        }
    }
}

let launchGameBot = gameBotFunction();
launchGameBot();


// const gameBotFunction = function () {
//     function randomGenerate(min,max) { //Генератор случайных чисел
//         let randomNumber = (Math.floor(Math.random() * 100) + 1); //Получаем случайное число
//         console.log(randomNumber); //Записываем в консоль
//     }
//     const checkUsersAnswers = function() { //Считает кол-во ответов и выдает промты
    
//         let answers = 0
    
//         for (let i = 0; i < 4; i++) { //Попытки пользователя
//             if (i === 0 || i === 1 || i === 2) { //Если число попыток не равно 3, тогда задаем вопрос
                
//                 let mysteryNumber = randomGenerate(); //Вызываем функцию генератора
//                 usersAnswers = prompt('Угадайте число от 1 до 100');
//                 while (!checkIsNumber(usersAnswers) || usersAnswers.trim() === '' || usersAnswers === null || usersAnswers > 100) {
//                     return alert('Game over!');
//                 }
//                 answers = Number(usersAnswers); 
//                 console.log(answers);
                
//             } else if (i = 3) {
//                 alert('Закончились попытки');
//             }
//         }
//         return answers
//     }
    
        
//     usersAnswers = checkUsersAnswers();
//     function checkIsNumber(checkNumber) { //Проверяет на соответсвием Number
//         return !isNaN(parseFloat(checkNumber)) && isFinite(checkNumber);
//     }
//     }
// gameBotFunction();