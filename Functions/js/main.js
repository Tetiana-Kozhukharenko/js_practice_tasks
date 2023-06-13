// 1.Створіть функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(number) {
  const numStr = number + '';
  let maxDigit = 0;

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] > maxDigit ) {
      maxDigit = numStr[i];
    }
  }
  return maxDigit;
}

document.writeln(`Функція №1: ${getMaxDigit(2657543)} <br>`);

// 2.Створіть функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **, а використовуючи цикл.

function getPowerOfNumber (number, power) {
  let powerOfNumber = 1;

  for (let i = 0; i < power; i++) {
    powerOfNumber *= number;
  }
  return powerOfNumber;
}

document.writeln(`Функція №2: ${getPowerOfNumber(6, 4)} <br>`);

//3.Створіть функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function formatName(name) {
  let fName = name[0].toUpperCase();

  for(let i = 1; i < name.length; i++) {
    fName += name[i].toLowerCase();
  }
  return fName
}

document.writeln(`Функція №3: ${formatName('teTiAnA')} <br>`);

/* 4.Створіть функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% ->
  19.5%). Приклад: 1000 -> 805 */

function getNettoSalary(sum) {
  const sumTax = 19.5 / 100;
  const netto = sum - (sum * sumTax);
  return netto;
}

document.writeln(`Функція №4: ${getNettoSalary(1000)} <br>`);

// 5.Створіть функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(numberMin, numberMax) {
  const randomNum = (Math.random() * (numberMax - numberMin)) + numberMin;
  return Math.trunc(randomNum);
}

document.writeln(`Функція №5: ${getRandomNumber(3, 134)} <br>`);

// 6.Створіть функцію, яка рахує скільки разів певна буква повторюється в слові.Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, word) {
  let repeat = 0;
  const lowerCaseLetter = letter.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (lowerCaseWord[i] === lowerCaseLetter) {
      repeat += 1;
    }
  }
  return repeat;
}

document.writeln(`Функція №6: ${countLetter("а", "Асталавіста")} <br>`);

/* 7,8. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
Приклад: convertCurrency("100$") -> 3700 грн, або convertCurrency("3700UAH") -> 100$. Врахуйте, інші валюти не конвертуються, 
потрібно виводити помилку, і також регістр uah не має значення. */

function convertCurrency(sumAndCurrency) {
  const sumAndCurrencyLowerCase = sumAndCurrency.toLowerCase();
  let sum = '';
  
  if (sumAndCurrencyLowerCase.includes('$')) {
    let delCurrency = sumAndCurrencyLowerCase.replace('$', '');
    sum = (delCurrency * 37) + 'UAH';
  } else if (sumAndCurrencyLowerCase.includes('uah')) {
      let delCurrency = sumAndCurrencyLowerCase.replace('uah', '');
      sum = ((delCurrency / 37).toFixed(2)) + '$';
  } else {
    alert('Конвертація відбувається тільки з доларів в гривні і навпаки!');
  }
  return sum;
}

document.writeln(`Функція №7: ${convertCurrency('378Uah')} <br>`);

/* 9.Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8
символам. Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124 */

function getRandomPassword (lengthPaswword = 8) {
  let randomPas = '';

  for (let i = 0; i < lengthPaswword; i++) {
    randomPas += Math.trunc(Math.random() * 10);
  }
  return Number(randomPas);
}

document.writeln(`Функція №9: ${getRandomPassword(9)} <br>`);

// 10.Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(letter, word) {
  const letterLowerCase = letter.toLowerCase();
  const wordLowerCase = word.toLowerCase();
  let newWord = '';

  for (let i = 0; i < wordLowerCase.length; i++) {
    if (wordLowerCase[i] === letterLowerCase) {
    
    } else {
      newWord += wordLowerCase[i];
    }
  }
  return newWord;
}

document.writeln(`Функція №10: ${deleteLetters('a', 'blablabla')} <br>`);