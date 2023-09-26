'use strict';
console.log('js is connected.');

//Global Variables:

let totalClick = 0;
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

//Constructor Function:

function Product(productName, imgFilePath) {
    this.productName = productName;
    this.imgFilePath = imgFilePath;
    this.timesShown = 0;
    this.click = 0;
    allProductsArray.push(this);
};

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


// console.log('all Products array', allProductsArray);

//Other Functions:

function getRandomNumber() {
    return Math.floor(Math.random() * allProductsArray.length);
  }

// console.log(allProductsArray[0])

function renderProducts() {
    let ProductIndices = [];
    while (ProductIndices.length < 3) {
        const randomIndex = getRandomNumber();
        if (!ProductIndices.includes(randomIndex)) {
            ProductIndices.push(randomIndex)
        };
    };
    let Product1 = allProductsArray[ProductIndices[0]];
    let Product2 = allProductsArray[ProductIndices[1]];
    let Product3 = allProductsArray[ProductIndices[2]];
    console.log(`Product 1 is ${Product1.productName} and Product2 is ${Product2.productName} and Product3 is ${Product3.productName}`)
}

renderProducts();

function handleClickOnProduct(event) {

    if (event.target.tagName !== 'IMG') {
        return;
    };

    totalClick++;

    leftProductOnThePage.timesShown++;
    centerProductOnThePage.timesShown++;
    rightProductImage.timesShown++;

    if (event.target.id ==='left_product_img') {
        leftProductOnThePage.click++
    }
    if (event.target.id === 'center_product_img') {
        centerProductOnThePage.click++
    }
    if (event.target.id === 'right_product_img') {
        rightProductOnThePage.click++
    }

    
}