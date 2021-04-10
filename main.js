var letsCookButton = document.querySelector('#mealbtn');
var clearButton = document.querySelector('.clearbtn');
var radioBtn1 = document.querySelector('#side');
var radioBtn2 = document.querySelector('#main-dish');
var radioBtn3 = document.querySelector('#dessert');
var radioBtn4 = document.querySelector('#entire-meal');
var cookPotImage = document.querySelector('img');
var cookpotContainer = document.querySelector('.cookpot-box');
var divCookpotContainer = document.querySelector('.make-this-meal');
var youShouldMake = document.querySelector('.tagline');



var currentMeal;
var completeDinner;




// ~~~~~~Event Listeners~~~~~~ //


letsCookButton.addEventListener('click', function() {
  clearContents();
  letsCookMeal();
});




// ~~~~~~~~Functions~~~~~~~~~~ //


function clearContents() {
  divCookpotContainer.innerHTML = "";
}

function letsCookMeal() {
  if (document.getElementById('side').checked) {
    createMealOption(sides);
  } else if (document.getElementById('main-dish').checked) {
    createMealOption(mainDishes);
  } else if (document.getElementById('dessert').checked) {
    createMealOption(desserts);
  } else if (document.getElementById('entire-meal').checked) {
    makeEntireMeal(sides, mainDishes, desserts);
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

function makeEntireMeal() {
  var completeDinner = new Meal(sides[getRandomIndex(sides)], mainDishes[getRandomIndex(mainDishes)], desserts[getRandomIndex(desserts)]);
  youShouldMake.classList.remove('hidden');
  cookPotImage.classList.add('hidden');
  clearButton.classList.remove('hidden');
  divCookpotContainer.innerHTML += `
    <p>${completeDinner.mainDish} with a side of ${completeDinner.side} and ${completeDinner.dessert} for dessert!</p>
  `
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
