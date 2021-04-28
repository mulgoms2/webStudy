// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.querySelector('.js-form'),
  form2 = document.querySelector('.js-form2'),
  input = form.querySelector('.js-input'),
  input2 = form2.querySelector('.js-input2'),
  h3 = document.querySelector('.js-h3'),
  span = document.querySelector('.js-span'),
  winner = document.querySelector('.js-winner');


function makeRange(e){
  const number = e.target.value,
  innerText = `Generate a number between 0 and ${number}`;
  h3.innerHTML = innerText;
}

function submitNumber(e){
    e.preventDefault();
    if (input2.value) {
        paintWinner();
    }
}

function paintWinner(){
    const userNumber = parseInt(input2.value),
    rangeValue = input.value, //Generated number
    computerNumber = makeRandomeNumber(rangeValue);
 
    if (userNumber === computerNumber) {
        span.innerHTML = `You choose: ${userNumber}, the machine choose: ${computerNumber}`;
        winner.innerHTML = 'You Win!'; 
    } else {
        span.innerHTML = `You choose: ${userNumber}, the machine choose: ${computerNumber}`;
        winner.innerHTML = 'You lose';
    }

}

function makeRandomeNumber(number){
  const gameRange = getRandomInt(0, number); //make randomNumber with choosed range value
  return gameRange;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }


function init(){
form.addEventListener('input', makeRange);
form2.addEventListener('submit', submitNumber);
}


init();