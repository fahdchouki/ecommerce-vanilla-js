/*  import products object */
import productsobj from "./products.js";
/* Dom variables */
let productsDom = document.querySelector(".products");
let popupDom = document.querySelector(".prod-popup");
let popupimgimg = document.querySelector(".pop-img img");
let popupimg = document.querySelector(".pop-img");
let navbarUL1 = document.querySelector(".nav");
let navbarUL2 = document.querySelector(".navbar");
let profileName = document.querySelector(".profile-li a");
// load the appropriate navbar
window.addEventListener("load", () => {
  if (localStorage.getItem("username") && localStorage.getItem("pwd")) {
    navbarUL2.style.display = "block";
    navbarUL1.style.display = "none";
    profileName.textContent = localStorage.getItem("username");
  }
});

/*  navbar scroll / btn shopping / slider */
// navbar scroll

function navscroll() {
  if (window.pageYOffset > 0)
    document.querySelector(".header").classList.add("navmove");
  else document.querySelector(".header").classList.remove("navmove");
}
window.addEventListener("load", navscroll);
window.addEventListener("scroll", navscroll);

// start shopping button
let btnstartshop = document.querySelector("#startshop");
let inpSearch = document.querySelector(".inp-search");
btnstartshop.onclick = (e) => {
  e.preventDefault();
  btnstartshop.innerHTML = `<i class="fa fa-search"></i>`;
  btnstartshop.style.paddingLeft = "5px";
  inpSearch.style.visibility = "visible";
  inpSearch.style.width = window.innerWidth < 500 ? "200px" : "300px";
  inpSearch.focus();
};
// slider
let slider = document.querySelector(".slider");
let sliderimg = document.querySelector(".slider .item img");
const imgswidth = [
  sliderimg.width * -1,
  sliderimg.width * -2,
  sliderimg.width * -3,
];
let slidesoffset = [0].concat([...imgswidth]);
let i = 0;
(function sliderfn() {
  setInterval(() => {
    if (i < slidesoffset.length) {
      setTimeout(() => {
        slider.style.left = `${slidesoffset[i]}px`;
      }, 2000);
      i++;
    } else {
      i = 0;
      slider.style.left = `${slidesoffset[i]}px`;
    }
  }, 3000);
})();

/*  products draw ui function */

function drawproductsUI(obj) {
  obj.forEach((element) => {
    productsDom.innerHTML += `<div class="item" id="${element.id}">
            <div class="prod-img">
              <div class="img-overlay">
                <i class="fa fa-expand extendpop"></i>
              </div>
              <img src="${element.src}" />
            </div>
            <div class="prod-det">
              <h3>${element.name}</h3>
              <div class="prod-description"><p>${element.description}</p></div>
              <div class="forward-div">
                <span>${element.price}</span>
                <button class="addtocart">Add To <i class="fa fa-shopping-cart"></i></button>
              </div>
            </div>
          </div>`;
  });
}
drawproductsUI(productsobj);

/*  popup image zoom */

popupimg.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;
  popupimgimg.style.transform = "scale(1.5)";
  popupimgimg.style.transformOrigin = `${x - 250}px ${y - 50}px`;
});
popupimg.addEventListener("mouseleave", (e) => {
  popupimgimg.style.transform = "scale(1)";
  popupimgimg.style.transformOrigin = "center center";
});
/* popup info fetching */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("extendpop")) {
    let objInfo = productsobj.filter(
      (el) =>
        e.target.parentElement.parentElement.parentElement.getAttribute(
          "id"
        ) === el.id
    );
    document.querySelector(".prod-popup .pop-det h2").textContent =
      objInfo[0].name;
    document.querySelector(".prod-popup .pop-det p").textContent =
      objInfo[0].description;
    popupimgimg.src = objInfo[0].src;
    popupDom.style.display = "block";
  } else if (
    e.target.classList.contains("btn-close") ||
    e.target.classList.contains("pop-overlay")
  ) {
    popupDom.style.display = "none";
  }
});
/**
 *
 * add to cart functionality
 */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("addtocart")) {
    alert("hi");
  }
});
