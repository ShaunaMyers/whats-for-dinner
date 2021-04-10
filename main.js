var letsCookButton = document.querySelector('#mealbtn');
var clearButton = document.querySelector('.clearbtn');
var radioBtn1 = document.querySelector('#side');
var radioBtn2 = document.querySelector('#main-dish');
var radioBtn3 = document.querySelector('#dessert');
var cookPotImage = document.querySelector('img');
var cookpotContainer = document.querySelector('.cookpot-box');
var divCookpotContainer = document.querySelector('.make-this-meal');
var youShouldMake = document.querySelector('.tagline');



var currentMeal;




// ~~~~~~Event Listeners~~~~~~ //


letsCookButton.addEventListener('click', function() {
  clearContents();
  letsCookMeal();
});




// ~~~~~~~~Functions~~~~~~~~~~ //


function clearContents() {
  divCookpotContainer.innerHTML = "";
  console.log(document.getElementById('dessert'));
}

function letsCookMeal() {
  if (document.getElementById('side').checked) {
    createMealOption(sides);
  } else if (document.getElementById('main-dish').checked) {
    createMealOption(mainDishes);
  } else if (document.getElementById('dessert').checked) {
    createMealOption(desserts);
  }
}

function createMealOption(meal) {
  currentMeal = meal[getRandomIndex(meal)];
  youShouldMake.classList.remove('hidden');
  cookPotImage.classList.add('hidden');
  clearButton.classList.remove('hidden');
  divCookpotContainer.innerHTML += `
    <p>${currentMeal}</p>
  `
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
