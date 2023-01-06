/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Bregwin Jogi
 *      Student ID: 156619215
 *      Date:       07/08/22
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

var categoryNavBar = document.getElementById("menu");

var categoryList = document.createElement("ul"),
  eachCategory;

for (var i = 0; i < categories.length; i++) {
  eachCategory = document.createElement("button");

  eachCategory.innerHTML = categories[i].name;

  eachCategory.data = i;
  eachCategory.onclick = function () {
    changeCategory(this.data);
  };

  categoryList.appendChild(eachCategory);
}

categoryNavBar.appendChild(categoryList);

var currentCat = 0;

var currentCategory = document.getElementById("selected-category");
currentCategory.innerHTML = categories[currentCat].name;

var productBody = document.getElementById("category-cards");

function changeCategory(category) {
  currentCat = category;
  productBody.innerHTML = "";

  currentCategory.innerHTML = categories[currentCat].name;
  for (i = 0; i < products.length; i++) {
    if (
      products[i].categories[0] === categories[currentCat].id &&
      products[i].discontinued === false
    ) {
      
      productBody.appendChild(createProductCard(products[i])) ;
      
    }
  }
}

function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  // ... rest of your card building code here
  var productInnerBody = document.createElement("div");
  productInnerBody.classList.add("info-container");

  var productTitle = document.createElement("h4");
  var productTitleInner = document.createElement("b");
  productTitleInner.innerHTML = product.title;
  productTitle.appendChild(productTitleInner);

  var productDescription = document.createElement("p");
  productDescription.innerHTML = product.description;

  var productPrice = document.createElement("p");
  var productPriceInner = document.createElement("span");
  productPriceInner.innerHTML = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  }).format(product.price);
  productPrice.appendChild(productPriceInner);

  productInnerBody.appendChild(productTitle);
  productInnerBody.appendChild(productDescription);
  productInnerBody.append(productPrice);

  card.appendChild(productInnerBody);

  // Return the card’s <div> element to the caller
  return card;
}

// function showTitle(info) {
//   console.log(info);
// }

changeCategory(0);

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
