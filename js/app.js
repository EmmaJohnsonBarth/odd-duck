'use strict';

console.log('js is connected.');

// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

// For each of the three images, increment its property of times it has been shown by one.

// Attach an event listener to the section of the HTML page where the images are going to be displayed.

// Once the users ‘clicks’ a product, generate three new products for the user to pick from.
// As a user, I would like to track the selections made by viewers so that I can determine which products to begin production on.
// In the constructor function define a property to hold the number of times a product has been clicked.

// After every selection by the viewer, update the newly added property to reflect if it was clicked.

// ???
// let pizzaContainer = document.querySelector('section');
// let resultButton = document.querySelector('section + div');
// let image1 = document.querySelector('section img:first-child');
// let image2 = document.querySelector('section img:nth-child(2)');


let clicks = 0;
let maxAttemptsAllowed = 25;
Pizza.allPizzasArray = [];
//why is this array in the Pizza constructor obj?

function Pizza(productName, imgFilePath) {
    this.productName = productName;
    this.imgFilePath = imgFilePath;
    this.timesShown = 0;
    this.click = 0;
    Pizza.allPizzasArray.push(this);
}

function getRandomNumber() {
    return Math.floor(Math.random() * Pizza.allPizzasArray.length);
    //-1? bc array?
}

new Pizza('Brick Oven Pizza', 'images/brickOvenPizza.jpg');
new Pizza('Calzone', 'images/calzonePizza.jpg');
new Pizza('Chicago Deep Dish', 'images/chicagoPizza.jpg');
new Pizza('Chicago Pizza and Oven Grinder', 'images/cpoGinderPizza.jpg');
new Pizza('Detroit Style', 'images/detroitPizza.jpg');
new Pizza('Papa Vito\'s Thin', 'images/mwDeluxePizzaThinCrust.jpg');
new Pizza('New York Thin', 'images/newYorkPizza.jpg');
new Pizza('Shot Gun Dans Pizza', 'images/sgDansHtossedMeatLovPizza.jpg');

// console.log('all pizzas array', Pizza.allPizzasArray)


// function renderPizzas() {
//     let pizza1 = Pizza.allPizzasArray[getRandomNumber()];
//     let pizza2 = Pizza.allPizzasArray[getRandomNumber()];
//     let pizza3 = Pizza.allPizzasArray[getRandomNumber()];

//     while (pizza1 === pizza2) {
//         pizza2 = Pizza.allPizzasArray[getRandomNumber()]
//     };
//     while (pizza1 === pizza3) {
//         pizza3 = Pizza.allPizzasArray[getRandomNumber()]
//     };
//     while (pizza2 === pizza3) {
//         pizza3 = Pizza.allPizzasArray[getRandomNumber()]
//     };


// }



// console.log(Pizza.allPizzasArray[0])

function renderPizzas() {

    let pizzaIndices = [];

    while (pizzaIndices.length < 3) {
        const randomIndex = getRandomNumber();
        if (!pizzaIndices.includes(randomIndex)) {
            pizzaIndices.push(randomIndex)
        }
    }

    let pizza1 = Pizza.allPizzasArray[pizzaIndices[0]];
    let pizza2 = Pizza.allPizzasArray[pizzaIndices[1]];
    let pizza3 = Pizza.allPizzasArray[pizzaIndices[2]];

    console.log(`pizza 1 is ${pizza1.productName} and pizza2 is ${pizza2.productName} and pizza3 is ${pizza3.productName}`)
}

renderPizzas();


// As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
// By default, the user should be presented with 25 rounds of voting before ending the session.
// Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
// As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
// Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

// After voting rounds have been completed, remove the event listeners on the product.

// Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

// NOTE: Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown.

// Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application. Try for a score higher than 80. Make necessary adjustments based on the report to achieve that score. Add a screenshot of your score to your README.md file.