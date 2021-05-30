import { productArrayNewGames } from "./constants/productlist.js";
import { productArrayUsedGames } from "./constants/productlist.js";
/* import { productArraySimilarGames } from "./constants/productlist.js"; */

console.log(productArrayNewGames);
console.log(productArrayUsedGames);
/* console.log(productArraySimilarGames); */

const productsContainerNewGames = document.querySelector(".new-games");
const productsContainerUsedGames = document.querySelector(".used-games");
/* const productsContainerSimilarGames = document.querySelector(".similar-games"); */

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

productArrayNewGames.forEach(function (product) {
  productsContainerNewGames.innerHTML += `
    <div class="product">
    <a href="productpage.html"><p class="new-label">${product.label}</p>
    <div style="background-image: url(${product.image})" class="product-image")></div><h3>${product.name}</h3></a>
    <div  class="product-price">Price: kr ${product.price},-</div>
    <button id="newbutton" class="add-to-cart-btn" data-product="${product.id}">Add to cart</button><i class="fas fa-heart"></i></div>`;
});

productArrayUsedGames.forEach(function (product) {
  productsContainerUsedGames.innerHTML += `
    <div class="product">
    <a href="productpage.html"><p class="used-label">${product.label}</p>
    <div style="background-image: url(${product.image})" class="product-image")></div><h3>${product.name}</h3></a>
    <div  class="product-price">Price: kr ${product.price},-</div>
    <button id="usedbutton" class="add-to-cart-btn" data-product="${product.id}">Add to cart</button><i class="fas fa-heart"></i></div>`;
});

/* productArraySimilarGames.forEach(function (product) {
  productsContainerSimilarGames.innerHTML += `
    <div class="product">
    <a href="productpage.html"><p class="">${product.label}</p>
    <div style="background-image: url(${product.image})" class="product-image")></div><h3>${product.name}</h3></a>
    <div id="similarbutton" class="product-price">Price: kr ${product.price},-</div>
    <button class="add-to-cart-btn" data-product="${product.id}">Add to cart</button><i class="fas fa-heart"></i></div>`;
}); */

// adding items to cart

const newbutton = document.getElementById("newbutton");
const usedbutton = document.getElementById("usedbutton");
/* const similarbutton = document.getElementById("similarbutton"); */
console.log(newbutton);
console.log(usedbutton);
const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    if (newbutton === newbutton) {
      const itemToAddNew = productArrayNewGames.find((item) => item.id === event.target.dataset.product);
      cartArray.push(itemToAddNew);
      console.log(itemToAddNew);
      showCart(cartArray);
      localStorage.setItem("cartList", JSON.stringify(cartArray));
    } else if (usedbutton === usedbutton) {
      const itemToAddUsed = productArrayUsedGames.find((item) => item.id === event.target.dataset.product);
      cartArray.push(itemToAddUsed);
      console.log(itemToAddUsed);
      showCart(cartArray);
      localStorage.setItem("cartList", JSON.stringify(cartArray));
    } else {
      console.log("ooof");
    }
  };
});

/* newbutton.onclick = function (event) {
  console.log("hei");
  const itemToAdd = productArrayNewGames.find((item) => item.id === event.target.dataset.product);
  cartArray.push(itemToAdd);
  showCart(cartArray);
  localStorage.setItem("cartList", JSON.stringify(cartArray));
};
 */
/* usedbutton.onclick = function (event) {
  usedbutton.style.backgroundColor = "green";
  const itemToAdd = productArrayUsedGames.find((item) => item.id === event.target.dataset.product);
  cartArray.push(itemToAdd);
  showCart(cartArray);
  localStorage.setItem("cartList", JSON.stringify(cartArray));
};
 */

function showCart(cartItems) {
  cart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;

  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    cartList.innerHTML += `
    <div class="cart-item">
    <h4>${cartElement.name}</h4>
    <div style="background-image: url(${cartElement.image})" class="cart-image")></div>`;
  });
  totalContainer.innerHTML = `Total: kr ${total},-`;
}
