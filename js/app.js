'use strict';
console.log('js is connected.');

//Global Variables:

let totalClick = 0;
const allProductsArray = [];
let maxAttemptsAllowed = 25;
const previouslyPickedProducts = [];
console.log('total clicks: ', totalClick)

//Grab HTML Elements:

let productImageSelectionTag = document.getElementById('all_products');
let leftProductImage = document.getElementById('left_product_img');
let centerProductImage = document.getElementById('center_product_img');
let rightProductImage = document.getElementById('right_product_img');

//do we need to declare these here?
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
new Product('Cthulu Figure', 'images/cthulhu.jpg');
new Product('Duck Muzzle', 'images/dog-duck.jpg');
new Product('Dragon Meat', 'images/dragon.jpg');
new Product('Utensil Pen', 'images/pen.jpg');
new Product('Dog Sweeper', 'images/sweep.png');
new Product('Pizza Scissors', 'images/scissors.jpg');
new Product('Shark Sleeping Bag', 'images/shark.jpg');
new Product('Baby Sweep', 'images/sweep.png');
new Product('Tauntaun Slwwping Bag', 'images/tauntaun.jpg');
new Product('Unicorn Meat', 'images/unicorn.jpg');
new Product('Inverse Watering Can', 'images/water-can.jpg');
new Product('Weird Wine Glass', 'images/wine-glass.jpg');


// console.log('all Products array', allProductsArray);

//Other Functions:

// console.log(allProductsArray[0])

function handleClickOnProduct(event) {
    //tag name is 'IMG'? Case sens?
    if (event.target.tagName !== 'img') {
        return;
    };

    totalClick++;

    leftProductOnThePage.timesShown++;
    centerProductOnThePage.timesShown++;
    rightProductImage.timesShown++;

    if (event.target.id === 'left_product_img') {
        leftProductOnThePage.click++
    }
    if (event.target.id === 'center_product_img') {
        centerProductOnThePage.click++
    }
    if (event.target.id === 'right_product_img') {
        rightProductOnThePage.click++
    }

    //return this?
    const tempPickedProducts = [];
}

function getRandomNumber() {
    return Math.floor(Math.random() * allProductsArray.length);
}

function renderProducts() {
    let ProductIndices = [];
    while (ProductIndices.length < 3) {
        const randomIndex = getRandomNumber();
        if (!ProductIndices.includes(randomIndex)) {
            ProductIndices.push(randomIndex)
        };
    };
    let leftProductOnThePage = allProductsArray[ProductIndices[0]];
    let centerProductOnThePage = allProductsArray[ProductIndices[1]];
    let rightProductOnThePage = allProductsArray[ProductIndices[2]];

    leftProductImage.src = leftProductOnThePage.imgFilePath;
    centerProductImage.src = centerProductOnThePage.imgFilePath;
    rightProductImage.src = rightProductOnThePage.imgFilePath;

    let previouslyPickedProducts = [];
    previouslyPickedProducts.push(allProductsArray[leftProductOnThePage])
    previouslyPickedProducts.push(allProductsArray[centerProductOnThePage])
    previouslyPickedProducts.push(allProductsArray[rightProductOnThePage])

    if (totalClick === 25){
        productImageSelectionTag.removeEventListener('click', handleClickOnProduct);
    }
}

renderProducts();

function handleResultsList() {
    // document.getElementById(product-click-list)
    // document.getElementById(product-click-list)
    let ul = document.getElementById(product-click-list) 
    for (let i=0; i<allProductsArray.length;i++) {
        let currentProduct = allProductsArray[i];
        let li = document.createElement('li');
        li.textContent=currentProduct.productName + ' got ' + currentProduct.click + 'votes';
        ul.appendChild(li);
    }
 }

 //??
function handleChartResults() {
    makeAProductChart();
 }

 productImageSelectionTag.addEventListener('click', handleClickOnProduct);

 resultsList.addEventListener('click', handleResultsList);

 chartResults.addEventListener('click', handleChartResults);

 leftProductOnThePage = allProductsArray[0];
 centerProductOnThePage = allProductsArray[1];
 rightProductOnThePage = allProductsArray[2];

function makeAProductChart() {
    const productNamesArray = [];
    const productClickArray = [];
    for (let i = 0; i < allProductsArray.length; i++) {
        let singleProductName = allProductsArray[i].productName;
        productNamesArray.push(singleProductName)
    }

    for(let i = 0; i<allProductsArray.length; i++) {
        let singleProductClick = allProductsArray[i].click;
        productClickArray.push(singleProductClick)
    }

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productNamesArray,
            datasets: [{
                label: 'Product Clicks',
                data: productClickArray,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(0, 99, 132)',
                borderWidth: 4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
 }