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

