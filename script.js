'use strict';
alert('Угадай число от 1 до 100');
function random() {
   let num = Math.ceil(Math.random() * 100);
   console.log(num);
   return num;
}
let tryToGuess = random();




function firstguess() {
   let x = +prompt('Введите число от 1 до 100');
   console.log(x);
   if (Number.isInteger(x)) {
      if (x === tryToGuess) {
         alert('Ты угадал число, поздравляю');
         let tryMore = confirm('Сыграем еще?');
         if (tryMore === true) {
            random();
            firstguess();
         } else {
            alert('Игра завершена');
            return;
         }
      } else if (x > tryToGuess) {
         alert('Загаданое число меньше. Попробуйте еще раз');
         firstguess();
      } else if (x < tryToGuess) {
         alert('Загаданое число больше. Поробуйте еще раз');
         firstguess();
      }
   } else {
      alert('Надо вводить число');
      firstguess();
   }
}
firstguess();