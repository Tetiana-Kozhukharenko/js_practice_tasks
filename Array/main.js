/* 1.Напишіть функцію, яка приймає масив данних підписників і виводить на екран за допомогою alert 
привітання, якщо у вас більше 100 підписників */

const subscribers = [
  {name: 'user1', age: 18,},
  {name: 'user2', age: 28,},
  {name: 'user3', age: 13,},
  {name: 'user4', age: 36,},
  {name: 'user5', age: 18,},
];

function congratsIfMoreThan100(arrSubscribers) {
  if (arrSubscribers.length > 100 ) {
    alert('Congratulations, you have more than 100 followers!');
  } else {
    alert('You have less than 100 followers :(')
  }
}

congratsIfMoreThan100(subscribers);


// 2.Створіть масив numbers і заповніть його числами від 1 до 10. Знайдіть суму всіх чисел в масиві numbers і виведіть її в консоль.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let sum = 0;

for (let number of numbers) {
  sum += number;
}

console.log(sum);

// 3.Замініть кожне число в масиві numbers на його квадрат (число, помножене на саме себе).

const newNumbers = []

for (let num of numbers) {
  newNumbers.push(num * num);
}

console.log(newNumbers);
 
// 4.Створіть порожній масив evenNumbers. Додайте до нього лише парні числа з масиву newNumbers.

const evenNumbers = [];

for (let num of newNumbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

console.log(evenNumbers);

// 5.Знайдіть найбільше та найменше число в масиві і виведіть їх в консоль.

const prices = [3, 56, 7, 89, 566, 44, 366, 12, 442];

console.log(Math.max(...prices));
console.log(Math.min(...prices));

// 6.Відсортуйте масив prise за зростанням і виведіть його в консоль.

const prices2 = prices;

prices2.sort(function(a, b) {
  return a - b;
});

console.log(prices2);

// 7.Створіть масив styles з елементами “Jazz” та “Blues”. Додайте “Rock-n-Roll” в кінець масиву.

const styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

console.log(styles);

// 8.Замініть значення в середині масиву на “Classics”. Ваш код повинен шукати медіанний елемент у масивах будь-якої довжини.

const middleOfArray = Math.floor(styles.length / 2);

styles[middleOfArray] = 'Classics';

console.log(styles);

// 9.Видаліть перший елемент масиву та покажіть його.

const firstElement = styles.shift();

console.log(firstElement);

// 10.Вставте Rap та Reggae на початок масиву.

styles.unshift('Rap', 'Reggae');

console.log(styles);

/* 11.Напишіть функцію getSumInput(), яка просить користувача ввести числа за допомогою prompt та зберігає їх в масив.
Треба закінчити робити запити в користувача після того, як введено не числове значення, порожній рядок або натиснуто “відмінити”.
Функція підраховує та повертає суму елементів масиву. */

function getSumInput() {
  const nums = [];
  let res = 0;

  while (true) {
    let num = prompt('Введіть число:', '');
  
    if (isNaN(+num) || num === null || num.trim() === '') {
      alert('Ви ввели не число!')
      break;
    } else {
      nums.push(+num);
      continue;
    }
  }

  for (let num of nums) {
    res += num;
  }

  return alert(`Сума введених чисел дорівнює: ${res}`);
}

getSumInput(); 

/* 12.Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”. Тобто дефіси видаляються, 
а всі слова після них починаються з великої літери. */

function camelize(str) {
  const newStr = [];
  const arrSymbols = str.split('');

  for(let i = 0; i < arrSymbols.length; i++) {
    if(arrSymbols[i].includes('-')) {
      let bigSym = arrSymbols[i + 1].toUpperCase();
      newStr.push(bigSym);
      i++;
    } else {
      newStr.push(arrSymbols[i]);
    }
  }
  return newStr.join('');
}

const camelizeStr = camelize('background-color');
console.log(camelizeStr);

/* 13.Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b 
і віддає масив цих елементів. Функція повинна повертати новий масив і не змінювати вихідний. */

const numArr = [5, 3, 8, 1];

// Перший варіант розв'язку:

function filterRange(arr, a, b) {
  const newArr = [];

  arr.forEach((el) => {
    if (el >= a && el <= b) {
      newArr.push(el);
    }
  });
  return newArr;
}

const filteredArr = filterRange(numArr, 1, 4);
console.log(filteredArr);
console.log(numArr);

// Другий варіант розв'язку:
function filterRange2(arr, a, b) {

  let newArr = arr.filter(el => el >= a && el <= b);

  return newArr;
}

const filteredArr2 = filterRange2(numArr, 1, 4);
console.log(filteredArr2);
console.log(numArr);

/* 14.Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr і видаляє з нього всі значення крім тих, які 
знаходяться між a і b. */

const arrNum = [2, 5, 3, 8, 4, 5, 1];

function filterRangeInPlace(arr, a, b) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= a && arr[i] <= b) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const ans = filterRangeInPlace(arrNum, 1, 4);
console.log(ans);

// 15.Відсортуйте за спаданням масив чисел.
const arr = [5, 2, 1, -10, 8];

// Перший варіант розв'язку:
arr.sort((a,b) => b - a);

// Другий варіант розв'язку:
arr.sort((a, b) => {
  if (a > b) {
    return -1
  } else if (a == b) {
    return 0
  } else {
    return 1
  }
});

console.log(arr);

// 16.Створіть функцію copySorted(arr), яка буде повертати копію відсортованого масиву.
let arrStr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  const copy = arr.slice().sort();
  return copy;
}

const copySortedArr = copySorted(arrStr);
console.log(copySortedArr);
console.log(arrStr);

/* 17.Напишіть функцію unique(arr), яка повертає масив, що містить тільки унікальні елементи arr. */

const strings = ["Привіт", "Світ", "Привіт", "Світ", "Привіт", "Привіт", "Світ", "Світ", ":-O"];

function unique(arr) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(newArr.includes(arr[i])) {

    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const uniqueEl = unique(strings);
console.log(uniqueEl);