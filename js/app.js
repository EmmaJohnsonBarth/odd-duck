'use strict';
console.log('js is connected.');

//Global Variables:

let clicks = 0;
const allProductsArray = [];
let maxAttemptsAllowed = 25;
const previouslyPickedProducts = [];

//Grab HTML Elements:

let productImageSelectionTag = document.getElementById('all_products');
let leftProductImage = document.getElementById('left_product_img');
let centerProductImage = document.getElementById('center_product_img');
let rightProductImage = document.getElementById('right_product_img');

let leftProductOnThePage;
let centerProductOnThePage;
let rightProductOnThePage;

let resultsList = document.getElementById('resultsList');
let chartResults = document.getElementById('chartResults');

//Functions:

function Product(productName, imgFilePath) {
    this.productName = productName;
    this.imgFilePath = imgFilePath;
    this.timesShown = 0;
    this.click = 0;
    allProductsArray.push(this);
}

function getRandomNumber() {
    return Math.floor(Math.random() * Product.allProductsArray.length);
    //-1? bc array?
}

new Product('R2D2 Bag', 'images/bag.jpg');
new Product('Banana Chopper', 'images/banana.jpg');
new Product('ipad TP Stand', 'images/bathroom.jpg');
new Product('Open Boots', 'images/boots.jpg');
new Product('Breakfast Machine', 'images/breakfast.jpg');
new Product('Meatball Gum', 'images/bubblegum.jpg');
new Product('Backwards Chair', 'images/chair.jpg');
new Product('Cthulu Figure', 'images/cthulu.jpg');
new Product('Duck Muzzle', 'images/dog-duck.jpg');
new Product('Dragon Meat', 'images/dragon.jpg');
new Product('Utensil Pen', 'images/pen.jpg');
new Product('Dog Sweeper', 'images/sweep.png');
new Product('Pizza Scissors', 'images/scissors.jpg');
new Product('Shark Sleeping Bag', 'images/shark.jpg');
new Product('Baby Sweep', 'images/sweep.jpg');
new Product('Tauntaun Slwwping Bag', 'images/tauntaun.jpg');
new Product('Unicorn Meat', 'images/unicorn.jpg');
new Product('Inverse Watering Can', 'images/water-can.jpg');
new Product('Weird Wine Glass', 'images/wine-glass.jpg');


console.log('all Products array', Product.allProductsArray)


// function renderProducts() {
//     let Product1 = Product.allProductsArray[getRandomNumber()];
//     let Product2 = Product.allProductsArray[getRandomNumber()];
//     let Product3 = Product.allProductsArray[getRandomNumber()];

//     while (Product1 === Product2) {
//         Product2 = Product.allProductsArray[getRandomNumber()]
//     };
//     while (Product1 === Product3) {
//         Product3 = Product.allProductsArray[getRandomNumber()]
//     };
//     while (Product2 === Product3) {
//         Product3 = Product.allProductsArray[getRandomNumber()]
//     };


// }



// console.log(Product.allProductsArray[0])

function renderProducts() {

    let ProductIndices = [];

    while (ProductIndices.length < 3) {
        const randomIndex = getRandomNumber();
        if (!ProductIndices.includes(randomIndex)) {
            ProductIndices.push(randomIndex)
        }
    }

    let Product1 = Product.allProductsArray[ProductIndices[0]];
    let Product2 = Product.allProductsArray[ProductIndices[1]];
    let Product3 = Product.allProductsArray[ProductIndices[2]];

    console.log(`Product 1 is ${Product1.productName} and Product2 is ${Product2.productName} and Product3 is ${Product3.productName}`)
}

renderProducts();


// As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
// By default, the user should be presented with 25 rounds of voting before ending the session.
// Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
// As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
// Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

// After voting rounds have been completed, remove the event listeners on the product.

// Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

// NOTE: Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown.

// Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application. Try for a score higher than 80. Make necessary adjustments based on the report to achieve that score. Add a screenshot of your score to your README.md file.