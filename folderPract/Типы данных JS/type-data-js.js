// let userName; //Объявляем переменную

// console.log(typeof userName)

// userName = "Faraone"; //Строчка (String)

// console.log(typeof userName)

// userName = 58; //Число (Number)

// console.log(typeof userName)



    // // Undefined - неопределенный тип */

    // let userName; // Объявляем переменную
    // // Получаем тип данных
    // console.log(typeof userName);
    // // Получаем значние переменной 
    // console.log(userName);

    // // Примеры использования 
    // // Проверяем определена ли переменная 

    // if (userName === undefined) {
    //     console.log('Переменная не определена');
    // } else {
    //     console.log('Переменная определена');
    // }

    // // Либо с помощью оператора typeof

    // if (typeof userName === 'undefined') {
    //     console.log('Переменная не определена');
    // } else {
    //     console.log('Переменная определена');
    // }



    // // Null содержит только одно значение null (отсутсвует)

    // // Пример 
    // let userName = null;
    // console.log(userName)



    // // Boolean - логический тип может принимать только 
    // // два значения true (истина) и false (ложь)

    // // Пример 
    // let willYouMarryMe = true;
    // if (willYouMarryMe) {
    //     console.log(':)');
    // } else {
    //     console.log(':(');
    // }

    // // Также можно использовать 
    // // оператор сравнения
    // let trueOrFalse = 58 < 18;
    // console.log(trueOrFalse)



    // // Number (Число)

    // let userAge = 20;
    // let userHeight = 1.83;
    // console.log(userAge);
    // console.log(typeof userAge);
    // console.log(userHeight);
    // console.log(typeof userHeight);

    // // Infinity 
    // let getInfinity = 58 / 0;
    // console.log(getInfinity);
    // console.log(typeof getInfinity);



    // // NaN - Not a number
    // let getNan = 'Faraone' / 10;
    // console.log(getNan);
    // console.log(typeof getNan);



    // // Bigint - Большое число
    // const bigIntegar = 12345678900987654321n;
    // console.log(typeof bigIntegar);



    // // String - Строка
    // let userName = "Faraone";
    // console.log(typeof userName);

    // let userNameV2 = 'Faraone';
    // console.log(typeof userNameV2);
    // let userNameV3 = `Faraone`;
    // console.log(typeof userNameV3);

    // // Обратные ковычки
    // let userAge = 36;
    // let userAgeInfo = `Возраст: ${userAge}`;
    // console.log(userAgeInfo)



    // // Object

    // let userInfo = {
    //     name: "Far",
    //     age: 36
    // }
    // console.log(userInfo);
    // console.log(typeof userInfo);



    // // Sumbol

    // // Function 

    // let funcVariable = functionname(params) {
    //     //Код функции
    // }

    // console.log(typeof funcVariable)





    // // Преобразование типов данных

    // // Строковое преобразование
    
    // let userAge = 58; //Number
    // console.log(userAge);
    // console.log(typeof userAge);

    // userAge = String(userAge); //String

    // console.log(userAge);
    // console.log(typeof userAge);

    // // Логическое преобразование 

    // let userTrue = true; 
    // console.log(userTrue);
    // console.log(typeof userTrue);

    // userTrue = String(userTrue);

    // console.log(userTrue);
    // console.log(typeof userTrue);

    // // Численное преобразование
    // let userAge = "58";
    // console.log(userAge);
    // console.log(typeof userAge);

    // userAge = Number(userAge);

    // console.log(userAge);
    // console.log(typeof userAge);

    // // Пример автоматического преобразования 
    // // "Строчного значения" в number

    // let userAge = "72" / "2";
    // console.log(userAge);
    // console.log(typeof userAge); // Результат будет 36 number

    // // Логическое преобразование 
    // let userAge = 58; // Число 0 вернет false в значении userAge, 
    // // но строка "Cодержащая число 0" вернет true
    // console.log(userAge);
    // console.log(typeof userAge);

    // userAge = Boolean(userAge);

    // console.log(userAge);
    // console.log(typeof userAge);





    // // Выражения и операторы 
    // // Термины: унарный, бинарный, операнд
    // // Операнд - это то к чему применяется оператор 

    // // Примеры 
    // let userAge = 30 - 6; // Числа 30 и 6 - это операнды 
    // // либо 
    // let userHeight = h - y; // h и y - это операнды

    // // Бынарный оператор, применяется к двум операндам
    // // в примере это знак вычитания " - "
    // let userAge = 30 - 6;

    // // Бинарный оператор, применяется к одному операнду 
    // let userCash = -800;

    // // Математические операторы 
    // let x;

    // // Сложение +
    // x = 5 + 8;
    // console.log(`Результат сложения: ${x}`);

    // // Вычитание -
    // x = 9 - 5;
    // console.log(`Результат вычитания: ${x}`);

    // // Умножение * 
    // x = 2 * 3;
    // console.log(`Результат умножения: ${x}`);

    // // Делоение /
    // x = 10 / 2;
    // console.log(`Результат деления: ${x}`);

    // // Взятие остатка от деления %
    // x = 11 % 3;
    // console.log(`Результат взятия остатка от деления: ${x}`);
    // // Проверка 11=3*3(неполное  частное от деления)+2(остаток)

    // // Возведение в степень **.
    // x = 5 ** 3;
    // console.log(`Результат возведения в степень: ${x}`);
    // //Число 5 умножить на себя 3 раза, 5*5*5 = 125



    // // Специальные возможности операторов

    // // Применение оператора сложения к строкам
    // let resultOne = "Привет" + " " + "этот" + " " + "текст" + " " + "собран из строк";
    // console.log(resultOne);

    // // Операции до сложеия со строкой
    // // выполняются как обычно
    // let resultTwo = 58 -20 + "сумма";
    // console.log(resultTwo);

    // // Преобразованеи в число 
    // let users = "25";
    // let admins = "10";

    // console.log(users + admins); // Результат 2510
    // console.log(+users + +admins); // Результат сложения 35

    // // Более длинная запись 
    // console.log(Number(users) + Number(admins));



    // // Оператор присвоения 

    // let a = 1 + 2;
    // let b = 2;

    // let result = 8 - (a = b + 3);
    // console.log("Результат в скобках: " + a);
    // console.log("Общий результат : " + result);

    // // Присваивание по цепочке
    
    // let resultOne = resultTwo = resultThree = 1 + 2;
    // console.log(resultOne);
    // console.log(resultTwo);
    // console.log(resultThree); // Результат 3 переменные со значением 3

    // // Более понятная запись 

    // let resultOne = 1 + 2;

    // resultTwo = resultOne;
    // resultThree = resultOne;

    // console.log(resultOne);
    // console.log(resultTwo);
    // console.log(resultThree);

    // // Сокращенная запись вычислений с присвоением 
    
    // let users = 5;
    // users = users + 3;
    // users = users * 2; 

    // // Можно записать так 

    // let users = 5;
    // console.log(users);
    // users += 3;
    // console.log(users);
    // users *= 2;
    // console.log(users);



    // // Инкремент/декремент 
    // // Можно расположить как до 
    // // так и после переменной 
    // // user++; ++user;

    // // Инкремент ++
    // let addUser = 2;
    // addUser++;
    // console.log(addUser);

    // // Декремент --
    // let removeUser = 2;
    // removeUser--;
    // console.log(removeUser);



    // // Операторы сравнения 

    // Больше: a > b
    // Меньше: a < b 
    // Больше или равно: a >= b
    // Меньше или равно: a <= b
    // Равно: a == b
    // Не равно: a != b
    // Строго равно: a === b
    // Строго не равно: a !== b



    // // Логические операторы 

    // // Оператор || (ИЛИ) ищет выражение true

    // // Булевые значения 
    // console.log(true || true); // true
    // console.log(false || true); // true
    // console.log(true || false); // true
    // console.log(false || false); // false

    // // Присвоение значения в переменную 
    // let userName = '';
    // let userNickName = 'Faraone';

    // let user = userName || userNickName || "Без имени";
    // console.log(user);

    // // Сокращенное вычитание. Условие.
    // let admins = 0;
    // let users = 5;
    // admins > users || users++; 
    // console.log(users); // Результат 6

    // let admins = 10;
    // let users = 5;
    // admins > users || users++; 
    // console.log(users); // Результат 5



    // // Оператор && (И) ищет выражение false

    // // Булевые значения 
    // console.log(true && true); // true
    // console.log(false && true); // false
    // console.log(true && false); // false
    // console.log(false && false); // false

    // // Разные типы 

    // console.log('Far' && 0 && 2 && 3); // Вернет 0
    // console.log(1 && 2 && null && 3); // Вернет null
    // console.log('15' && '42'); // Вернет 42

    // // Приоритет && больше чем ||





    // // Условный (тернарный) оператор

    // // Синтаксис
    // let message = "Hello, Far!";

    // // Значение (< / >)

    // if (2 > 5) {
    //     //Код выполнится только если
    //     //выражение вернет true
    //     console.log(message);
    // }

    // // Значение переменных (let 1 / let 2)

    // let first = 5;
    // let second = 10;

    // if (first === second) {
    //     //Код выполнится только если
    //     //выражение вернет true
    //     console.log(message);
    // }

    // // Более сложное выражение 

    // if (2 + 1 === 3 && "1" || 10 > 5 && 10 === 1) { 
    //     //Код выполнится только если
    //     //выражение вернет true
    //     console.log(message);
    // }

    // // Более краткая запись 
    // if (2 > 1) console.log(message);



    // // Блоки ELSE и ELSE IF

    // // Пример 1
    // let message = "Hello, Far!";
    // let number = 5;

    // if (number > 1) {
    //     console.log(message)
    // } else {
    //     console.log('Условие не выполнено')
    // }

    // // Пример 2
    // let message = "Hello, Far!";
    // let number = 5;

    // if (number > 50) {
    //     console.log('5 больше 50');
    // } else if (number > 30) {
    //     console.log('5 больше 30');
    // } else if (number > 10) {
    //     console.log('5 больше 10');
    // } else if (number > 1) {
    //     console.log('5 больше 1');
    // } else {
    //     console.log('Условие не выполнено');
    // }



    // // Условный оператор "?"
    // let message = "Hello!"
    // let messageEnd;

    // // Классическое условное ветвление
    // if (5 > 1) { 
    //     messageEnd = ", Вася!";
    // } else {
    //     messageEnd = ", Оля!";
    // }

    // // Ветвление с использованием "?"
    // let messageEnd = (5 > 1) ? ", Вася!" : ", Оля!"

    // message += messageEnd;
    // console.log(message);



    // // Классическое условное ветвление
    // let message = "Hello";
    // let messageEnd;

    // if (5 > 50) {
    //     messageEnd = ", Вася!";
    // } else if (5 > 30) {
    //     messageEnd = ", Оля!";
    // } else if (5 > 10) {
    //     messageEnd = ", Миша!";
    // } else if (5 > 1) {
    //     messageEnd = ", Андрей!";
    // } else {
    //     messageEnd = ", Иннокентий!";
    // }

    // message += messageEnd;
    // console.log(message);

    // // Ветвление с использованием "?"
    // let message = "Hello";
    // let messageEnd;

    // messageEnd = 5 > 10 ? ", Вася!" :
    //     5 > 30 ? ", Оля!" :
    //         5 > 10 ? ", Миша!" :
    //             5 > 1 ? ", Андрей!" : ", Иннокентий!"

    // message += messageEnd;
    // console.log(message);





    // // Function Declaration (Объявление функции)

    // // Наиболее популярные имена функций 
    // "show..." - обычно что-то показывает,
    // "get..." - возвращают значение,
    // "calc..." - что-то вычисляют,
    // "create..." - что-то создают,
    // "check..." - что-то проверяют и возвращают логическое значение 