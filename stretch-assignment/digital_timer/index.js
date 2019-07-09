const button = document.querySelector('button'),
  secondTens = document.querySelector('#secondTens'),
  secondOnes = document.querySelector('#secondOnes'),
  msHundreds = document.querySelector('#msHundreds'),
  msTens = document.querySelector('#msTens');

  // variable to turn all elements of timer red when timer ends
  timerDigits = document.querySelectorAll('.digit')

// setting initial timer to zero
let timer = 0;

// variable to lock start/reset button
let lock = false;


button.addEventListener('click', event => {
  if (!lock) {
    // lock button upon start of timer
    lock = true;
    button.innerHTML = 'Reset';


    // setting / resetting timer to zero
    timer = 0;

    // removing red coloring using css class
    timerDigits.forEach(digit => digit.classList.remove('redDigit'));
    event.preventDefault();

    // timer functionality
    const interval = setInterval(() => {
      timer += 10;
      msTens.textContent = (timer / 10) % 10;
      msHundreds.textContent = Math.floor(timer / 100) % 10;
      secondOnes.textContent = Math.floor(timer / 1000) % 10;
      secondTens.textContent = Math.floor(timer / 10000) % 10;

      // once timer hits maximum (10 seconds in this case)
      if (timer >= 1000) {

        // unlock button, clear, and set text to "Reset"
        lock = false;
        clearInterval(interval);
        button.innerHTML = 'Reset & Start';

        // timerDigits.forEach(digit => digit.style.color='red');
        timerDigits.forEach(digit => digit.classList.add('redDigit'));
      }
    }, 10);
  }
});