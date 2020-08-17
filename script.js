'use strict';
const isNumber = function (n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
};
const game = function () {
   let randomNum = Math.ceil(Math.random() * 100);
   console.log(randomNum);
   return function repeat() {
      let userNumber = +prompt('Введите значение');
      console.log((userNumber));
      if (userNumber === 0) {
         return;
      } else if (userNumber > randomNum) {
         alert('Загаданное число меньше');
         return repeat();
      } else if (userNumber < randomNum) {
         alert('Загаданное число больше');
         return repeat();
      } else if (userNumber === randomNum) {
         alert('Ты угадал!');
         const choice = confirm('Сыграем еще раз?');
         if (choice === true) {
            game()();
         } else {
            return;
         }
      }
      if (!isNumber(userNumber)) {
         alert('Надо вводить число!');
         return repeat();
      }
   };
};
game()();