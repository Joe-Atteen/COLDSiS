//newsroom functionality
let latest = document.querySelector("#latest");
let product = document.getElementById("product");
let client = document.getElementById("client");
let others = document.getElementById("others");
let slider = document.querySelector(".slider");
let latestNews = document.querySelector("#latest-news");
let coldsisProduct = document.getElementById("coldsis-product");
let clientProduct = document.getElementById("client-product");
let otherNews = document.getElementById("other-news");

latest.addEventListener("click", function () {
  slider.style.transform = "translateX(0)";
  slider.style.width = "110px";
  latestNews.style.display = "block";
  coldsisProduct.style.display = "none";
  clientProduct.style.display = "none";
  otherNews.style.display = "none";
});

product.addEventListener("click", function () {
  slider.style.transform = "translateX(116px)";
  slider.style.width = "155px";
  latestNews.style.display = "none";
  coldsisProduct.style.display = "block";
  clientProduct.style.display = "none";
  otherNews.style.display = "none";
});

client.addEventListener("click", function () {
  slider.style.transform = "translateX(296px)";
  slider.style.width = "131px";
  latestNews.style.display = "none";
  coldsisProduct.style.display = "none";
  clientProduct.style.display = "block";
  otherNews.style.display = "none";
});

others.addEventListener("click", function () {
  slider.style.transform = "translateX(450px)";
  slider.style.width = "80px";
  latestNews.style.display = "none";
  coldsisProduct.style.display = "none";
  clientProduct.style.display = "none";
  otherNews.style.display = "block";
});
