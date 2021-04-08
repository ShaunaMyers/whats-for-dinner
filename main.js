var letsCookButton = document.querySelector('.mealbtn');
// var radioButton = document.querySelectorAll('.meal-suggestion');
var radioBtn1 = document.querySelector('#side');
var radioBtn2 = document.querySelector('#main-dish');
var radioBtn3 = document.querySelector('#dessert');
var cookPotImage = document.querySelector('img');
var cookpotContainer = document.querySelector('.cookpot-box');



var currentMeal = [];




// ~~~~~~Event Listeners~~~~~~ //


letsCookButton.addEventListener('click', letsCookMeal);



// ~~~~~~~~Functions~~~~~~~~~~ //


function letsCookMeal() {
  if (document.getElementById('side').checked) {
    currentMeal = sides[getRandomIndex(sides)];
    cookPotImage.classList.add('hidden');
    cookpotContainer.innerHTML += `
      <p>You should make: </p>
      <p>${currentMeal}</p>
    `
  } else if (document.getElementById('main-dish').checked) {
    currentMeal = mainDishes[getRandomIndex(mainDishes)];
    cookPotImage.classList.add('hidden');
    cookpotContainer.innerHTML += `
      <p>You should make: </p>
      <p>${currentMeal}</p>
    `
  } else if (document.getElementById('dessert').checked) {
    currentMeal = desserts[getRandomIndex(desserts)];
    cookPotImage.classList.add('hidden');
    cookpotContainer.innerHTML += `
      <p>You should make: </p>
      <p>${currentMeal}</p>
    `
  }
}


// function check() {
//   document.getElementById("red").checked = true;
// }
//
// function uncheck() {
//   document.getElementById("red").checked = false;
// }



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//let's cook button is clicked
  //Tied event listener to letsCook button
  //Triggers Function

//whatever radio button has been selected
  //Loop through query selector all???
//bring up specific dish from a list of possible dishes
  //If it's dish 1
  //math.random array
  //If dish2
  //math.random array

//Query radio buttons individually
//When let's cook button is clicked
//fire Function
  //If radio1 is clicked
  //Loop through arry for sides
  //etc.

//When function is invoke
