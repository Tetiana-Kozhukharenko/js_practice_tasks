/* 1.Створіть порожній об’єкт user. Додайте властивість name зі значенням Іван. Додайте властивість 
surname зі значенням Сміт. Змініть значення name на Петро. Видаліть властивість name з об’єкта. */

const user = {};
user.name = 'Іван';
user.surname = 'Сміт';
user.name = 'Петро';
delete user.name;

// 2.Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивостей, інакше false.

function isEmpty(obj) {

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

const schedule = {};

const isEmptyObj = isEmpty(schedule);
console.log(isEmptyObj);

// 3.Напишіть код для підсумовування всіх зарплат. Якщо об’єкт salaries порожній, то результат має бути 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

function getSumSalary(obj) {
  let totalSum = 0;

  for(let sum in obj) {
    totalSum += obj[sum];
  }

  return totalSum;
}

const sumSalary = getSumSalary(salaries);
console.log(sumSalary);

/* 4.Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
З функції не потрібно нічого повертати, слід безпосередньо змінювати об’єкт. */

const menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

function multiplyNumeric(obj) {
  for(let value in obj) {
    if( typeof obj[value] === 'number') {
      obj[value] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);

/* 5.Створіть об’єкт calculator з трьома методами:
read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b,
sum() повертає суму збережених значень,
mul() множить збережені значення і повертає результат. */

const calculator = {
  read() {
    this.a = +prompt('Введіть перше число:', '0');
    this.b = +prompt('Введіть друге число:', '0');
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
}

calculator.read();
const sum = calculator.sum();
console.log(sum);
const multiplication = calculator.mul();
console.log(multiplication);

/* 6.Об’єкт ladder дозволяє підійматися вгору-вниз. Тепер, якщо нам потрібно зробити кілька викликів послідовно,
можна зробити це так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
Змініть код так, щоб зробити доступним ланцюг викликів. */

let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep();

/* 7.Створіть функцію-конструктор Calculator, яка створює об’єкти з трьома методами:
read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта,
sum() повертає суму цих властивостей,
mul() повертає результат множення даних властивостей. */

function Calculator() {
  this.read = function() {
    this.num1 = +prompt('Введіть перше число:', '0');
    this.num2 = +prompt('Введіть друге число:', '0');
  };

  this.sum = function() {
    return this.num1 + this.num2;
  };

  this.mul = function() {
    return this.num1 * this.num2;
  };
}

let calculator2 = new Calculator();
calculator2.read();

alert( "Sum = " + calculator2.sum() );
alert( "Mul = " + calculator2.mul() );

/* 8.Створіть функцію-конструктор Accumulator(startingValue). Об’єкт, який він створює повинен:
Зберігати “поточне значення” у властивості value. Початкове значення має значення аргументу конструктора startingValue.
Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value. */

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Введіть число:', '');
  };
}

let accumulator = new Accumulator(1);
console.log(accumulator.value);
accumulator.read();
console.log(accumulator.value);