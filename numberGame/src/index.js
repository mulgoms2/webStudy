// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.querySelector('.js-form'),
  form2 = document.querySelector('.js-form2'),
  range = form.querySelector('.js-input'),
  input2 = form2.querySelector('.js-input2'),
  h3 = document.querySelector('.js-h3'),
  span = document.querySelector('.js-span'),
  winner = document.querySelector('.js-winner');


function makeRange(e){
  const number = e.target.value,
  innerText = `Generate a number between 0 and ${number}`;
  h3.innerHTML = innerText;
}

function playGame(e){
    e.preventDefault();
    if (input2.value === "") {
      span.innerHTML = 'choose the number';
      return;
    }
    const userNumber = parseInt(input2.value, 10), //decimal radix
    maxRange = range.value, //Generated number
    computerNumber = Math.ceil(Math.random() * maxRange); //random method return 0~1, celi return integer
    
    span.innerHTML = `You choose: ${userNumber}, the machine choose: ${computerNumber}.<br />
    <strong>${userNumber === computerNumber ? "You Win!" : "You lose!"}</strong>`;

    // if (userNumber === computerNumber) {
    //     span.innerHTML = `You choose: ${userNumber}, the machine choose: ${computerNumber}`;
    //     winner.innerHTML = 'You Win!'; 
    // } else {
    //     span.innerHTML = `You choose: ${userNumber}, the machine choose: ${computerNumber}`;
    //     winner.innerHTML = 'You lose';
    // }
}

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
//   }


function init(){
form.addEventListener('input', makeRange);
form2.addEventListener('submit', playGame);
}


init();