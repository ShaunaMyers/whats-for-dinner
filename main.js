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
  if (radioBtn1.checked) {
    createMealOption(sides);
  } else if (radioBtn2.checked) {
    createMealOption(mainDishes);
  } else if (radioBtn3.checked) {
    createMealOption(desserts);
  } else if (radioBtn4.checked) {
    createEntireMeal(sides, mainDishes, desserts);
  }
}

function createMealOption(meal) {
  currentMeal = meal[getRandomIndex(meal)];
  youShouldMake.classList.remove('hidden');
  cookPotImage.classList.add('hidden');
  clearButton.classList.remove('hidden');
  divCookpotContainer.innerHTML += `
    <p id="current-meal-string">${currentMeal}!</p>
  `
}

function createEntireMeal(sides, mainDishes, desserts){
  currentMeal = new Meal(sides[getRandomIndex(sides)], mainDishes[getRandomIndex(mainDishes)], desserts[getRandomIndex(desserts)]);
  youShouldMake.classList.remove('hidden');
  cookPotImage.classList.add('hidden');
  clearButton.classList.remove('hidden');
  divCookpotContainer.innerHTML += `
    <p id="entire-meal-string">${currentMeal.mainDish} with a side of ${currentMeal.side} and ${currentMeal.dessert} for dessert!</p>
  `
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
