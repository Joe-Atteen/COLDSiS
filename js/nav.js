//nav dropdown
let aboutDropdown = document.querySelector("#a-dropdown");
let productsDropdown = document.querySelector("#p-dropdown");
let servicesDropdown = document.querySelector("#s-dropdown");
let resourcesDropdown = document.querySelector("#r-dropdown");

let aboutBtn = document.querySelector("#about");
let productsBtn = document.querySelector("#products");
let servicesBtn = document.querySelector("#services");
let resourcesBtn = document.querySelector("#resources");

//toggle function
function nav() {
  let AboutDoubleUp = document.querySelector("#about-double-up");
  let ServicesDoubleUp = document.querySelector("#services-double-up");
  let ProductsDoubleUp = document.querySelector("#products-double-up");
  let ResourcesDoubleUp = document.querySelector("#resources-double-up");

  aboutBtn.addEventListener("click", function () {
    aboutDropdown.classList.toggle("show");
    productsDropdown.classList.remove("show");
    servicesDropdown.classList.remove("show");
    resourcesDropdown.classList.remove("show");
  });

  productsBtn.addEventListener("click", function () {
    aboutDropdown.classList.remove("show");
    productsDropdown.classList.toggle("show");
    servicesDropdown.classList.remove("show");
    resourcesDropdown.classList.remove("show");
  });

  servicesBtn.addEventListener("click", function () {
    aboutDropdown.classList.remove("show");
    productsDropdown.classList.remove("show");
    servicesDropdown.classList.toggle("show");
    resourcesDropdown.classList.remove("show");
  });

  resourcesBtn.addEventListener("click", function () {
    aboutDropdown.classList.remove("show");
    productsDropdown.classList.remove("show");
    servicesDropdown.classList.remove("show");
    resourcesDropdown.classList.toggle("show");
  });

  //menu disappears on window click
  window.addEventListener("click", function (e) {
    let menu = document.querySelectorAll("nav ul li");
    let dropdown = document.querySelectorAll(".dropdown");
    for (let i = 0; i < menu.length; i++) {
      for (let i = 0; i < dropdown.length; i++) {
        if (e.target !== menu[i] && e.target.parentNode != menu[i]) {
          dropdown[i].classList.remove("show");
        }
      }
    }
  });

  //mobile
  AboutDoubleUp.addEventListener("click", function () {
    aboutDropdown.classList.toggle("show");
  });

  ProductsDoubleUp.addEventListener("click", function () {
    productsDropdown.classList.toggle("show");
  });

  ServicesDoubleUp.addEventListener("click", function () {
    servicesDropdown.classList.toggle("show");
  });

  ResourcesDoubleUp.addEventListener("click", function () {
    resourcesDropdown.classList.toggle("show");
  });
}
nav();

//menu collapse on menu item click
const aboutlinks = document.getElementById("company-links");
const productslinks = document.getElementById("products-links");
const serviceslinks = document.getElementById("services-links");
const resourceslinks = document.getElementById("resources-links");
const input = document.getElementById("check");

aboutlinks.addEventListener("click", aboutmenu);
productslinks.addEventListener("click", productsmenu);
serviceslinks.addEventListener("click", servicesmenu);
resourceslinks.addEventListener("click", resourcesmenu);

function aboutmenu(event) {
  if (event.target instanceof HTMLParagraphElement) {
    check.checked = false;
    aboutDropdown.classList.toggle("show");
  }
}

function productsmenu(event) {
  if (event.target instanceof HTMLParagraphElement) {
    check.checked = false;
    productsDropdown.classList.toggle("show");
  }
}

function servicesmenu(event) {
  if (event.target instanceof HTMLParagraphElement) {
    check.checked = false;
    servicesDropdown.classList.toggle("show");
  }
}

function resourcesmenu(event) {
  if (event.target instanceof HTMLParagraphElement) {
    check.checked = false;
    resourcesDropdown.classList.toggle("show");
  }
}
