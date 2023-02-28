//lightslider
$(document).ready(function () {
  $("#lightSlider").lightSlider({
    item: 1,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: "",
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////

    speed: 1000, //ms'
    auto: true,
    loop: true,
    slideEndAnimation: true,
    pause: 3000,

    keyPress: false,
    controls: false,
    prevHtml: "<img src='images/prev-btn.svg'>",
    nextHtml: "<img src='images/next-btn.svg'>",

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: true,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [],

    onBeforeStart: function (el) {},
    onSliderLoad: function (el) {},
    onBeforeSlide: function (el) {},
    onAfterSlide: function (el) {},
    onBeforeNextSlide: function (el) {},
    onBeforePrevSlide: function (el) {},
  });

  jQuery(document).ready(function ($) {
    $(".lSAction").insertBefore(".lSSlideOuter");
  });
});

//our clients
let slideIndex = 0;
let slides = document.querySelectorAll(".slides");
let line = document.querySelector(".dashed-line");
let movingline1 = document.querySelector(".moving-line1");
let movingline2 = document.querySelector(".moving-line2");
let movingline3 = document.querySelector(".moving-line3");
let logo1 = document.querySelector(".logo1");
let logo2 = document.querySelector(".logo2");
let logo3 = document.querySelector(".logo3");
let logo4 = document.querySelector(".logo4");
let logo5 = document.querySelector(".logo5");
let logo6 = document.querySelector(".logo6");
let logo7 = document.querySelector(".logo7");
let logo8 = document.querySelector(".logo8");
let logo9 = document.querySelector(".logo9");
let insurance = document.querySelector("#insurance");
let logistics = document.querySelector("#logistics");
let growth = document.querySelector("#growth");
let logos = document.querySelector(".logos");
let logos1 = document.querySelector(".logos1");
let logos2 = document.querySelector(".logos2");

function slideShow() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(slideShow, 5000);

  if (slides[0] === slides[slideIndex - 1]) {
    insurance.classList.add("highlight");
    logistics.classList.remove("highlight");
    growth.classList.remove("highlight");
    movingline1.style.display = "block";
    movingline2.style.display = "none";
    movingline3.style.display = "none";
    movingline1.style.border = "1px solid #A30046";
    logos.style.display = "flex";
    logos1.style.display = "none";
    logos2.style.display = "none";
    logo1.style.mixBlendMode = "normal";
    logo2.style.mixBlendMode = "luminosity";
    logo3.style.mixBlendMode = "luminosity";
    logo1.style.opacity = "1";
    logo2.style.opacity = "0.3";
    logo3.style.opacity = "0.3";
  }
  if (slides[1] === slides[slideIndex - 1]) {
    movingline1.style.display = "none";
    movingline2.style.display = "block";
    movingline3.style.display = "none";
    movingline2.style.border = "1px solid #ffc107";
    logo1.style.mixBlendMode = "luminosity";
    logo2.style.mixBlendMode = "normal";
    logo3.style.mixBlendMode = "luminosity";
    logo1.style.opacity = "0.3";
    logo2.style.opacity = "1";
    logo3.style.opacity = "0.3";
  }
  if (slides[2] === slides[slideIndex - 1]) {
    movingline1.style.display = "none";
    movingline2.style.display = "none";
    movingline3.style.display = "block";
    movingline3.style.border = "1px solid #54c56b";
    logo1.style.mixBlendMode = "luminosity";
    logo2.style.mixBlendMode = "luminosity";
    logo3.style.mixBlendMode = "normal";
    logo1.style.opacity = "0.3";
    logo2.style.opacity = "0.3";
    logo3.style.opacity = "1";
  }
  if (slides[3] === slides[slideIndex - 1]) {
    insurance.classList.remove("highlight");
    logistics.classList.add("highlight");
    growth.classList.remove("highlight");
    movingline1.style.display = "block";
    movingline2.style.display = "none";
    movingline3.style.display = "none";
    movingline1.style.border = "1px solid #231F20";
    logos.style.display = "none";
    logos1.style.display = "flex";
    logos2.style.display = "none";
    logo4.style.mixBlendMode = "normal";
    logo5.style.mixBlendMode = "luminosity";
    logo6.style.mixBlendMode = "luminosity";
    logo4.style.opacity = "1";
    logo5.style.opacity = "0.3";
    logo6.style.opacity = "0.3";
  }
  if (slides[4] === slides[slideIndex - 1]) {
    movingline1.style.display = "none";
    movingline2.style.display = "block";
    movingline3.style.display = "none";
    movingline2.style.border = "1px solid #231F20";
    logo4.style.mixBlendMode = "luminosity";
    logo5.style.mixBlendMode = "normal";
    logo6.style.mixBlendMode = "luminosity";
    logo4.style.opacity = "0.3";
    logo5.style.opacity = "1";
    logo6.style.opacity = "0.3";
  }
  if (slides[5] === slides[slideIndex - 1]) {
    movingline1.style.display = "none";
    movingline2.style.display = "none";
    movingline3.style.display = "block";
    movingline3.style.border = "1px solid #015480";
    logo4.style.mixBlendMode = "luminosity";
    logo5.style.mixBlendMode = "luminosity";
    logo6.style.mixBlendMode = "normal";
    logo4.style.opacity = "0.3";
    logo5.style.opacity = "0.3";
    logo6.style.opacity = "1";
  }
  if (slides[6] === slides[slideIndex - 1]) {
    insurance.classList.remove("highlight");
    logistics.classList.remove("highlight");
    growth.classList.add("highlight");
    movingline1.style.display = "block";
    movingline1.style.border = "1px solid #F5821E";
    movingline2.style.display = "none";
    movingline3.style.display = "none";
    logos.style.display = "none";
    logos1.style.display = "none";
    logos2.style.display = "flex";
    logo7.style.mixBlendMode = "normal";
    logo8.style.mixBlendMode = "luminosity";
    logo9.style.mixBlendMode = "luminosity";
    logo7.style.opacity = "1";
    logo8.style.opacity = "0.3";
    logo9.style.opacity = "0.3";
  }
  if (slides[7] === slides[slideIndex - 1]) {
    movingline1.style.display = "none";
    movingline2.style.display = "block";
    movingline2.style.border = "1px solid #0081C6";
    movingline3.style.display = "none";
    logo7.style.mixBlendMode = "luminosity";
    logo8.style.mixBlendMode = "normal";
    logo9.style.mixBlendMode = "luminosity";
    logo7.style.opacity = "0.3";
    logo8.style.opacity = "1";
    logo9.style.opacity = "0.3";
  }
  if (slides[8] === slides[slideIndex - 1]) {
    movingline1.style.display = "none";
    movingline2.style.display = "none";
    movingline3.style.display = "block";
    movingline3.style.border = "1px solid #56A73C";
    logo7.style.mixBlendMode = "luminosity";
    logo8.style.mixBlendMode = "luminosity";
    logo9.style.mixBlendMode = "normal";
    logo7.style.opacity = "0.3";
    logo8.style.opacity = "0.3";
    logo9.style.opacity = "1";
  }

  //when a link is clicked, the slide will change to the corresponding slide
  function changeToFirstSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    slides[0].style.display = "block";
    slideIndex = 1;
    insurance.classList.add("highlight");
    logistics.classList.remove("highlight");
    growth.classList.remove("highlight");
    movingline1.style.display = "block";
    movingline2.style.display = "none";
    movingline3.style.display = "none";
    movingline1.style.border = "1px solid #A30046";
    logos.style.display = "flex";
    logos1.style.display = "none";
    logos2.style.display = "none";
    logo1.style.mixBlendMode = "normal";
    logo2.style.mixBlendMode = "luminosity";
    logo3.style.mixBlendMode = "luminosity";
    logo1.style.opacity = "1";
    logo2.style.opacity = "0.3";
    logo3.style.opacity = "0.3";
  }

  function changeToSecondSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    slides[1].style.display = "block";
    slideIndex = 2;
    insurance.classList.add("highlight");
    logistics.classList.remove("highlight");
    growth.classList.remove("highlight");
    movingline1.style.display = "none";
    movingline2.style.display = "block";
    movingline3.style.display = "none";
    movingline2.style.border = "1px solid #8A1C99";
    logos.style.display = "flex";
    logos1.style.display = "none";
    logos2.style.display = "none";
    logo1.style.mixBlendMode = "luminosity";
    logo2.style.mixBlendMode = "normal";
    logo3.style.mixBlendMode = "luminosity";
    logo1.style.opacity = "0.3";
    logo2.style.opacity = "1";
    logo3.style.opacity = "0.3";
  }

  function changeToThirdSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    slides[2].style.display = "block";
    slideIndex = 3;
    insurance.classList.add("highlight");
    logistics.classList.remove("highlight");
    growth.classList.remove("highlight");
    movingline1.style.display = "none";
    movingline2.style.display = "none";
    movingline3.style.display = "block";
    movingline2.style.border = "1px solid #231F20";
    logos.style.display = "flex";
    logos1.style.display = "none";
    logos2.style.display = "none";
    logo1.style.mixBlendMode = "luminosity";
    logo2.style.mixBlendMode = "luminosity";
    logo3.style.mixBlendMode = "normal";
    logo1.style.opacity = "0.3";
    logo2.style.opacity = "0.3";
    logo3.style.opacity = "1";
  }

  function changeToFourthSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[3].style.display = "block";
    slideIndex = 4;
    insurance.classList.remove("highlight");
    logistics.classList.add("highlight");
    growth.classList.remove("highlight");
    movingline1.style.display = "block";
    movingline2.style.display = "none";
    movingline3.style.display = "none";
    movingline1.style.border = "1px solid #231F20";
    logos.style.display = "none";
    logos1.style.display = "flex";
    logos2.style.display = "none";
    logo4.style.mixBlendMode = "normal";
    logo5.style.mixBlendMode = "luminosity";
    logo6.style.mixBlendMode = "luminosity";
    logo4.style.opacity = "1";
    logo5.style.opacity = "0.3";
    logo6.style.opacity = "0.3";
  }

  function changeToFifthSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[4].style.display = "block";
    slideIndex = 5;
    insurance.classList.remove("highlight");
    logistics.classList.add("highlight");
    growth.classList.remove("highlight");
    movingline1.style.display = "none";
    movingline2.style.display = "block";
    movingline3.style.display = "none";
    movingline2.style.border = "1px solid #231F20";
    logos.style.display = "none";
    logos1.style.display = "flex";
    logos2.style.display = "none";
    logo4.style.mixBlendMode = "luminosity";
    logo5.style.mixBlendMode = "normal";
    logo6.style.mixBlendMode = "luminosity";
    logo4.style.opacity = "0.3";
    logo5.style.opacity = "1";
    logo6.style.opacity = "0.3";
  }

  function changeToSixthSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[5].style.display = "block";
    slideIndex = 6;
    insurance.classList.remove("highlight");
    logistics.classList.add("highlight");
    growth.classList.remove("highlight");
    movingline1.style.display = "none";
    movingline2.style.display = "none";
    movingline3.style.display = "block";
    movingline3.style.border = "1px solid #015480";
    logos.style.display = "none";
    logos1.style.display = "flex";
    logos2.style.display = "none";
    logo4.style.mixBlendMode = "luminosity";
    logo5.style.mixBlendMode = "luminosity";
    logo6.style.mixBlendMode = "normal";
    logo4.style.opacity = "0.3";
    logo5.style.opacity = "0.3";
    logo6.style.opacity = "1";
  }

  function changeToSeventhSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[6].style.display = "block";
    slideIndex = 7;
    insurance.classList.remove("highlight");
    logistics.classList.remove("highlight");
    growth.classList.add("highlight");
    movingline1.style.display = "block";
    movingline2.style.display = "none";
    movingline3.style.display = "none";
    movingline1.style.border = "1px solid #F5821E";
    logos.style.display = "none";
    logos1.style.display = "none";
    logos2.style.display = "flex";
    logo7.style.mixBlendMode = "normal";
    logo8.style.mixBlendMode = "luminosity";
    logo9.style.mixBlendMode = "luminosity";
    logo7.style.opacity = "1";
    logo8.style.opacity = "0.3";
    logo9.style.opacity = "0.3";
  }

  function changeToEighthSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[7].style.display = "block";
    slideIndex = 8;
    insurance.classList.remove("highlight");
    logistics.classList.remove("highlight");
    growth.classList.add("highlight");
    movingline1.style.display = "none";
    movingline2.style.display = "block";
    movingline3.style.display = "none";
    movingline2.style.border = "1px solid #0081C6";
    logos.style.display = "none";
    logos1.style.display = "none";
    logos2.style.display = "flex";
    logo7.style.mixBlendMode = "luminosity";
    logo8.style.mixBlendMode = "normal";
    logo9.style.mixBlendMode = "luminosity";
    logo7.style.opacity = "0.3";
    logo8.style.opacity = "1";
    logo9.style.opacity = "0.3";
  }

  function changeToNinthSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    slides[8].style.display = "block";
    slideIndex = 9;
    insurance.classList.remove("highlight");
    logistics.classList.remove("highlight");
    growth.classList.add("highlight");
    movingline1.style.display = "none";
    movingline2.style.display = "none";
    movingline3.style.display = "block";
    movingline3.style.border = "1px solid #56A73C";
    logos.style.display = "none";
    logos1.style.display = "none";
    logos2.style.display = "flex";
    logo7.style.mixBlendMode = "luminosity";
    logo8.style.mixBlendMode = "luminosity";
    logo9.style.mixBlendMode = "normal";
    logo7.style.opacity = "0.3";
    logo8.style.opacity = "0.3";
    logo9.style.opacity = "1";
  }

  insurance.addEventListener("click", changeToFirstSlide);
  logistics.addEventListener("click", changeToFourthSlide);
  growth.addEventListener("click", changeToSeventhSlide);
  logo1.addEventListener("click", changeToFirstSlide);
  logo2.addEventListener("click", changeToSecondSlide);
  logo3.addEventListener("click", changeToThirdSlide);
  logo4.addEventListener("click", changeToFourthSlide);
  logo5.addEventListener("click", changeToFifthSlide);
  logo6.addEventListener("click", changeToSixthSlide);
  logo7.addEventListener("click", changeToSeventhSlide);
  logo8.addEventListener("click", changeToEighthSlide);
  logo9.addEventListener("click", changeToNinthSlide);
}

slideShow();

//testimonial
function testimonial() {
  let btn1 = document.querySelector("#strip-1");
  let btn2 = document.querySelector("#strip-2");
  let btn3 = document.querySelector("#strip-3");
  let btn4 = document.querySelector("#strip-4");
  let detail1 = document.querySelector("#detail-1");
  let detail2 = document.querySelector("#detail-2");
  let detail3 = document.querySelector("#detail-3");
  let detail4 = document.querySelector("#detail-4");

  if (
    (btn1.addEventListener("click", function () {
      detail1.style.display = "block";
      detail2.style.display = "none";
      detail3.style.display = "none";
      detail4.style.display = "none";
      btn1.style.display = "none";
      btn2.style.display = "block";
      btn3.style.display = "block";
      btn4.style.display = "block";
    }),
    btn2.addEventListener("click", function () {
      detail1.style.display = "none";
      detail2.style.display = "block";
      detail3.style.display = "none";
      detail4.style.display = "none";
      btn1.style.display = "block";
      btn2.style.display = "none";
      btn3.style.display = "block";
      btn4.style.display = "block";
    }),
    btn3.addEventListener("click", function () {
      detail1.style.display = "none";
      detail2.style.display = "none";
      detail3.style.display = "block";
      detail4.style.display = "none";
      btn1.style.display = "block";
      btn2.style.display = "block";
      btn3.style.display = "none";
      btn4.style.display = "block";
    }),
    btn4.addEventListener("click", function () {
      detail1.style.display = "none";
      detail2.style.display = "none";
      detail3.style.display = "none";
      detail4.style.display = "block";
      btn1.style.display = "block";
      btn2.style.display = "block";
      btn3.style.display = "block";
      btn4.style.display = "none";
    }))
  ) {
    console.log("ok");
  }
}
testimonial();

//accordion functionality
let openbtn = document.querySelectorAll(".initial");
let openpane = document.querySelectorAll(".open");
let closebtn = document.querySelectorAll(".close-btn");
let chooseImg1 = document.querySelector("#choose-img1");
let chooseImg2 = document.querySelector("#choose-img2");
let chooseImg3 = document.querySelector("#choose-img3");
let chooseImg4 = document.querySelector("#choose-img4");
let chooseImg5 = document.querySelector("#choose-img5");

for (let i = 0; i < openbtn.length; i++) {
  openbtn[i].addEventListener("click", function () {
    openpane[i].style.display = "block";
    closebtn[i].style.display = "block";
  });
}

window.addEventListener("load", function () {
  openpane[0].style.display = "block";
  openbtn[0].style.background = "#fff";
  closebtn[0].style.display = "block";
});

if (
  (openbtn[0].addEventListener("click", function () {
    openpane[0].style.display = "block";
    openpane[1].style.display = "none";
    openpane[2].style.display = "none";
    openpane[3].style.display = "none";
    openpane[4].style.display = "none";
    openbtn[0].style.background = "#fff";
    openbtn[1].style.background = "transparent";
    openbtn[2].style.background = "transparent";
    openbtn[3].style.background = "transparent";
    openbtn[4].style.background = "transparent";
    closebtn[0].style.display = "block";
    closebtn[1].style.display = "none";
    closebtn[2].style.display = "none";
    closebtn[3].style.display = "none";
    closebtn[4].style.display = "none";
    chooseImg1.style.display = "block";
    chooseImg2.style.display = "none";
    chooseImg3.style.display = "none";
    chooseImg4.style.display = "none";
    chooseImg5.style.display = "none";
  }),
  openbtn[1].addEventListener("click", function () {
    openpane[0].style.display = "none";
    openpane[1].style.display = "block";
    openpane[2].style.display = "none";
    openpane[3].style.display = "none";
    openpane[4].style.display = "none";
    openbtn[0].style.background = "transparent";
    openbtn[1].style.background = "#fff";
    openbtn[2].style.background = "transparent";
    openbtn[3].style.background = "transparent";
    openbtn[4].style.background = "transparent";
    closebtn[0].style.display = "none";
    closebtn[1].style.display = "block";
    closebtn[2].style.display = "none";
    closebtn[3].style.display = "none";
    closebtn[4].style.display = "none";
    chooseImg1.style.display = "none";
    chooseImg2.style.display = "block";
    chooseImg3.style.display = "none";
    chooseImg4.style.display = "none";
    chooseImg5.style.display = "none";
  }),
  openbtn[2].addEventListener("click", function () {
    openpane[0].style.display = "none";
    openpane[1].style.display = "none";
    openpane[2].style.display = "block";
    openpane[3].style.display = "none";
    openpane[4].style.display = "none";
    openbtn[0].style.background = "transparent";
    openbtn[1].style.background = "transparent";
    openbtn[2].style.background = "#fff";
    openbtn[3].style.background = "transparent";
    openbtn[4].style.background = "transparent";
    closebtn[0].style.display = "none";
    closebtn[1].style.display = "none";
    closebtn[2].style.display = "block";
    closebtn[3].style.display = "none";
    closebtn[4].style.display = "none";
    chooseImg1.style.display = "none";
    chooseImg2.style.display = "none";
    chooseImg3.style.display = "block";
    chooseImg4.style.display = "none";
    chooseImg5.style.display = "none";
  }),
  openbtn[3].addEventListener("click", function () {
    openpane[0].style.display = "none";
    openpane[1].style.display = "none";
    openpane[2].style.display = "none";
    openpane[3].style.display = "block";
    openpane[4].style.display = "none";
    openbtn[0].style.background = "transparent";
    openbtn[1].style.background = "transparent";
    openbtn[2].style.background = "transparent";
    openbtn[3].style.background = "#fff";
    openbtn[4].style.background = "transparent";
    closebtn[0].style.display = "none";
    closebtn[1].style.display = "none";
    closebtn[2].style.display = "none";
    closebtn[3].style.display = "block";
    closebtn[4].style.display = "none";
    chooseImg1.style.display = "none";
    chooseImg2.style.display = "none";
    chooseImg3.style.display = "none";
    chooseImg4.style.display = "block";
    chooseImg5.style.display = "none";
  }),
  openbtn[4].addEventListener("click", function () {
    openpane[0].style.display = "none";
    openpane[1].style.display = "none";
    openpane[2].style.display = "none";
    openpane[3].style.display = "none";
    openpane[4].style.display = "block";
    openbtn[0].style.background = "transparent";
    openbtn[1].style.background = "transparent";
    openbtn[2].style.background = "transparent";
    openbtn[3].style.background = "transparent";
    openbtn[4].style.background = "#fff";
    closebtn[0].style.display = "none";
    closebtn[1].style.display = "none";
    closebtn[2].style.display = "none";
    closebtn[3].style.display = "none";
    closebtn[4].style.display = "block";
    chooseImg1.style.display = "none";
    chooseImg2.style.display = "none";
    chooseImg3.style.display = "none";
    chooseImg4.style.display = "none";
    chooseImg5.style.display = "block";
  }))
);
