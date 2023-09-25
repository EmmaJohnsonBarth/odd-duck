// As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

// For each of the three images, increment its property of times it has been shown by one.

// Attach an event listener to the section of the HTML page where the images are going to be displayed.

// Once the users ‘clicks’ a product, generate three new products for the user to pick from.
// As a user, I would like to track the selections made by viewers so that I can determine which products to begin production on.
// In the constructor function define a property to hold the number of times a product has been clicked.

// After every selection by the viewer, update the newly added property to reflect if it was clicked.


let clicks = 0;
let maxAttemptsAllowed = 25;
let allPizzasArray = [];
//why is this array in the Pizza constructor obj?

function Pizza(productName, imgFilePath) {
    this.productName = productName;
    this.imgFilePath = imgFilePath;
    this.timesShown = 0;
    this.click = 0;
    allPizzasArray.push(this);
}

function getRandomNumber() {
    return Math.round(Math.random() * allPizzasArray.length);
}

function renderPizzas() {
    let pizza1 = getRandomNumber();
    let pizza2 = getRandomNumber();
    let pizza3 = getRandomNumber();

    while (pizza1 === pizza2) {
        pizza2 = getRandomNumber()
    };
    while (pizza1 === pizza3) {
        pizza3 = getRandomNumber()
    };
    while (pizza2 === pizza3) {
        pizza3 = getRandomNumber()
    };
}




}




// As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
// By default, the user should be presented with 25 rounds of voting before ending the session.
// Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
// As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
// Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

// After voting rounds have been completed, remove the event listeners on the product.

// Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

// NOTE: Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown.

// Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

// In this module, try for a score higher than 80. Make necessary adjustments based on the report to achieve that score.
// Add a screenshot of your score to your README.md file.