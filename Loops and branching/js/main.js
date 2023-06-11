// 1.Користувач вводить два числа, потрібно вивести максимальне з них. Слід врахувати що числа можуть бути рівними.

let number1 = prompt('Введіть перше число:', '');
while (number1.trim() == '' || isNaN(+number1)) {
  number1 = prompt('Ви ввели не число, введіть будь ласка число:', '');
}

let number2 = prompt('Введіть друге число:', '');
while (number2.trim() == '' || isNaN(+number2)) {
  number2 = prompt('Ви ввели не число, введіть будь ласка число:', '');
}

if (number1 == number2) {
  alert('Ви ввели однакові числа!');
} else {
  const maxNumber = Math.max(number1, number2);
  alert(`Більше число: ${maxNumber}`);
}

/* 2.У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90. Користувач вводить номер 
квартири. Програма повинна зазначити, в якому під'їзді знаходиться введена квартира. */

let numberApartment = prompt('Введіть номер квартири:');
while (numberApartment.trim() == '' || isNaN(+numberApartment) || numberApartment <= 0 || numberApartment > 90) {
  numberApartment = prompt('Введіть номер квартири від 1 до 90:', '');
}

if (numberApartment <= 20) {
  alert("Вам потрібен перший під'їзд!");
} else if (numberApartment >= 21 && numberApartment <= 48) {
  alert("Вам потрібен другий під'їзд!");
} else {
  alert("Вам потрібен третій під'їзд!");
}

// 3.Обчислення суми чисел: користувач вводить число n, треба знайти суму всіх чисел від 0 до n.

let num = +prompt('Введіть число:', '');
while (isNaN(num)) {
  num = +prompt('Ви ввели не число, введіть число:', '');
}

let total = 0;
for (let i = 1; i <= num; i++) {
  total += i;
}

alert(`Сума всіх чисел від 0 до ${num} складає: ${total}`);

/* 4.Напишіть код, який запитує логін за допомогою prompt. Якщо відвідувач вводить "Admin", тоді запропонуйте за допомогою prompt 
ввести пароль. Якщо введено порожній рядок або натиснуто Esc – показати “Скасовано”. Якщо введено інший рядок – тоді покажіть 
“Я вас не знаю”. Пароль перевіряється наступним чином: якщо він дорівнює “Господар”, тоді покажіть “Ласкаво просимо!”, інший рядок – 
покажіть “Неправильний пароль”. Для порожнього рядка, або якщо введення було скасовано, покажіть “Скасовано”. */

let login = prompt('Ведіть ваш логін:', '');

if (login === 'Admin') {
  const password = prompt('Введіть пароль:', '');

  if (password === '' || password === null) {
    alert('Скасовано!');
  } else if (password === 'Господар') {
  alert('Ласкаво просимо!');
  } else {
    alert('Неправильний пароль!');
  }

} else if (login === '' || login === null) {
  alert('Скасовано!');
} else {
  alert('Я вас не знаю!');
}

// 5.Виведіть парні числа від 2 до 10, використовуючи цикл for.

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 6.Замініть цикл for на while так, щоб поведінка не змінилася (щоб вивід залишився той самий).

for (let i = 0; i < 3; i++) {
  alert( `число ${i}!` );
}

let i = 0;
while (i < 3) {
  alert( `число ${i}!` );
  i++;
}

/* 7.Напишіть цикл, який пропонує prompt ввести число більше за 100. Якщо відвідувач введе інше число – попросити ввести ще раз, 
і так далі. Цикл повинен запитувати число доти, доки відвідувач не введе число, більше за 100, або не скасує ввід/введе порожній рядок.
Ми припускаємо, що відвідувач вводитиме лише числа. В цьому завданні не обов’язково реалізовувати оброблення не-числового введення. */

let numberGreater100 = prompt('Введіть число більше за 100:', '');

while (numberGreater100 < 100 && numberGreater100 !== null && numberGreater100 !== '') {
  numberGreater100 = +prompt('Ви ввели не число, або число менше за 100, введіть число більше за 100:', '');
}

/* 8.Перепишіть конструкцію "switch" в аналогічну з використанням "if"
важливість: 5
Напишіть код з використанням if..else, що відповідає наступній конструкції switch: 
const browser = prompt ('Ведіть ваш браузер:', '');
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Ми підтримуємо і ці браузери' );
    break;

  default:
    alert( 'Маємо надію, що ця сторінка виглядає добре!' );
} */

const browserUsed = prompt ('Ведіть ваш браузер:', '');

if (browserUsed === 'Edge') {
  alert( "You've got the Edge!" );
} else if (browserUsed === 'Chrome'|| browserUsed === 'Firefox'|| browserUsed === 'Safari' || browserUsed === 'Opera') {
  alert( 'Ми підтримуємо і ці браузери' );
} else {
  alert( 'Маємо надію, що ця сторінка виглядає добре!' );
}

/* 9.Перепишіть умови "if" в конструкцію "switch":
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
} */

let a = +prompt('a?', '');
switch (a) {
  case 0: alert( 0 );
    break;
  case 1: alert( 1 );
    break;
  case 2:
  case 3: alert( '2,3' );
}

/* 10.Необхідно написати програму, яка виконує складання чисел від N до M (N та M – задаються користувачем), а також 
програма має вміти пропускати парні числа. */

let num1 = prompt('Введіть перше ціле число:', '');

while ((num1 === null || num1.trim() === '') || isNaN(num1) || !Number.isInteger(+num1)) {
  if (num1 === null) {
    alert('Скасовано!');
    break;
  }
  num1 = prompt('Ви ввели не ціле число, введіть число:', '');
}

let num2 = prompt('Введіть друге ціле число, яке більзе за попереднє:', '');

while ((num2 === null || num2.trim() === '') || isNaN(num2) || !Number.isInteger(+num2) || (+num2 <= +num1)) {
  if (num2 === null) {
    alert('Скасовано!');
    break;
  } else if (+num2 <= +num1 || isNaN(num2) || !Number.isInteger(+num2) || num2.trim() === '') {
    num2 = prompt('Ви ввели не ціле число або число яке менше / рівне першому, введіть число яке більше за перше:', '');
    continue;
  }
}

const skipIntegers = confirm('Пропускати парні числа при додаванні?');

let sum = 0;
for (let i = +num1; i <= +num2; i++) {
  if (skipIntegers && i % 2 == 0) {

  } else {
    sum += i;
  }
}
alert(sum);