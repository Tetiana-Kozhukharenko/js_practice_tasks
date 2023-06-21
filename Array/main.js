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
