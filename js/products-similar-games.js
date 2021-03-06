import { productArraySimilarGames } from "./constants/productlist.js";

console.log(productArraySimilarGames);

const productsContainerSimilarGames = document.querySelector(".similar-games");

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

productArraySimilarGames.forEach(function (product) {
  productsContainerSimilarGames.innerHTML += `
  <div class="product" >
  <a href="productpage.html"><p class="label used-label">${product.usedlabel}</p><p class="label new-label">${product.newlabel}</p>
  <div style="background-image: url(${product.image})" class="product-image")></div><h3>${product.name}</h3></a>
  <div class="product-price">Price: kr ${product.price},-</div>
  <button class="add-to-cart-btn" data-product="${product.id}">Add to cart</button><i class="fas fa-heart"></i></div>`;
});

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = productArraySimilarGames.find((item) => item.id === event.target.dataset.product);
    cartArray.push(itemToAdd);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});
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
