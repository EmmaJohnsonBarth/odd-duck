'use strict';
console.log('js is connected.');

//Global Variables:
let totalClick = 0;
const allProductsArray = [];
let maxAttemptsAllowed = 25;
// add array to keep track of last viewed products
let lastViewed = [];

//Grab HTML Elements:
let productImageSelectionTag = document.getElementById('all_products');
let leftProductImage = document.getElementById('left_product_img');
let centerProductImage = document.getElementById('center_product_img');
let rightProductImage = document.getElementById('right_product_img');
// console.log('right product image: ', rightProductImage)

// Variables to store the currently displayed products
let leftProductOnThePage, centerProductOnThePage, rightProductOnThePage;

//Constructor Function:
const Product = function (productName, imgFilePath, clicks, timesShown) {
    this.productName = productName;
    this.imgFilePath = imgFilePath;
    this.clicks = clicks || 0;
    this.timesShown = timesShown || 0;
    allProductsArray.push(this);
};

// check for previously saved product votes in local storage
let savedProductString = localStorage.getItem('savedProductVoteRound');

if (savedProductString) {
    let savedProductData = JSON.parse(savedProductString);
    for (let i = 0; i < savedProductData.length; i++) {
        // Create product objects from saved data
        new Product(
            savedProductData[i].productName,
            savedProductData[i].imgFilePath,
            savedProductData[i].clicks,
            savedProductData[i].timesShown
        );
    }
} else {
    // Create new product objects if local storage is empty
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
}

// // add let infront of these to initialize
// let leftProductOnThePage = allProductsArray[0];
// let centerProductOnThePage = allProductsArray[1];
// let rightProductOnThePage = allProductsArray[2];
// // console.log(allProductsArray[0])

function getRandomNumber() {
    return Math.floor(Math.random() * allProductsArray.length);
}

function renderProducts() {
    // Make this productIndices camelCasing
    let productIndices = [];

    while (productIndices.length < 3) {
        const randomIndex = getRandomNumber();
        if (!productIndices.includes(randomIndex) && !lastViewed.includes(randomIndex)) {
            productIndices.push(randomIndex)
        }
    }

    lastViewed = productIndices.slice();

    leftProductOnThePage = allProductsArray[productIndices[0]];
    centerProductOnThePage = allProductsArray[productIndices[1]];
    rightProductOnThePage = allProductsArray[productIndices[2]];

    leftProductImage.src = leftProductOnThePage.imgFilePath;
    centerProductImage.src = centerProductOnThePage.imgFilePath;
    rightProductImage.src = rightProductOnThePage.imgFilePath;
}

// Add event listener for clicking on products
productImageSelectionTag.addEventListener('click', handleClickOnProduct);

function handleClickOnProduct(event) {
    // console.log(event.target.tagName);
    if (event.target.tagName !== 'IMG') {
        alert('click on photo');
        // return
        return;
    }

    totalClick++;
    leftProductOnThePage.timesShown++;
    centerProductOnThePage.timesShown++;
    rightProductImage.timesShown++;

    if (event.target.id === 'left_product_img') {
        leftProductOnThePage.clicks++
    }
    if (event.target.id === 'center_product_img') {
        centerProductOnThePage.clicks++
    }
    if (event.target.id === 'right_product_img') {
        rightProductOnThePage.clicks++
    }

    if (totalClick === maxAttemptsAllowed) {
        productImageSelectionTag.removeEventListener('click', handleClickOnProduct);
        localStorage.setItem('savedProductVoteRound', JSON.stringify(allProductsArray));
        // Console log for local storage
        console.log('Data saved to local storage:', allProductsArray);
    } else {
        renderProducts();
    }
}

// This and below remained untouched
function handleResultsList() {
    let ul = document.getElementById('product-click-list');
    ul.innerHTML = '';
    for (let i = 0; i < allProductsArray.length; i++) {
        let currentProduct = allProductsArray[i];
        // console.log('CP',currentProduct.productName);
        let li = document.createElement('li');
        li.textContent = `${currentProduct.productName} had ${currentProduct.timesShown} views and was voted for ${currentProduct.clicks} times`;
        ul.appendChild(li);
    }
}

function handleChartResults() {
    makeAProductChart();
}

resultsList.addEventListener('click', handleResultsList);
chartResults.addEventListener('click', handleChartResults);


function makeAProductChart() {
    const productNamesArray = [];
    const productClickArray = [];
    for (let i = 0; i < allProductsArray.length; i++) {
        let singleProductName = allProductsArray[i].productName;
        productNamesArray.push(singleProductName)
    }

    for (let i = 0; i < allProductsArray.length; i++) {
        let singleProductClick = allProductsArray[i].clicks;
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
                borderWidth: 4,
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


renderProducts();