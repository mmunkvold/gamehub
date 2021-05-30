const images = document.querySelectorAll(".img-carousel img");
const textWithImages = document.querySelector(".img-txt");
console.log(textWithImages);

images.forEach(function (image) {
  image.onclick = function (event) {
    document.querySelector(".selected-img").classList.remove("selected-img");
    const clickParent = event.target.parentNode;
    clickParent.classList.add("selected-img");
  };

  //showText();
});

/* function showText() {
  textWithImages.style.display = "block";
} */
/* textWithImages.addEventListener("click", showText);


 */
/* function showText() {
  console.log("YOU CLICKED ME!");
  textWithImages.style.display = "block";
} */
