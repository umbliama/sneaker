let gallery = new Swiper(".header__slider ", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper__pagination",
    bulletElement: "span",
    bulletClass: "swiper__bullet",
    bulletActiveClass: "swiper__bullet-active"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".header__slider-button--next",
    prevEl: ".header__slider-button--prev"
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});

let galleryProduct = new Swiper(".product__slider ", {
  // Navigation arrows
  navigation: {
    nextEl: ".product__slider-button--next",
    prevEl: ".product__slider-button--prev"
  }
});

function slideProductImg(e) {
  let productThumbs = document.querySelectorAll(".js-productImgSmall");

  for (let i = 0; i < productThumbs.length; i++) {
    productThumbs[i].index = i;
    productThumbs[i].addEventListener("click", e => {
      let target = e.target;
      galleryProduct[1].slideTo(target.index, 500);
    });
  }
}

slideProductImg();

function makeLinkActive() {
  let links = document.querySelectorAll(".js-link");
  links.forEach(function(link) {
    link.addEventListener("click", function(e) {
      let target = e.target;
      links.forEach(function(link) {
        if (target.classList.contains("product__season-link-active")) {
          link.classList.remove("product__season-link-active");
          target.classList.add("product__season-link-active");
        } else {
          link.classList.remove("product__season-link-active");
          target.classList.add("product__season-link-active");
        }
      });
    });
  });
}

makeLinkActive();

function openMenu() {
  let menuList = document.querySelector(".header__nav-list");
  let menuBtn = document.querySelector(".header__menu-button");
  let overlay = document.querySelector(".header__menu-overlay");
  menuBtn.addEventListener("click", () => {
    if (menuBtn.classList.contains("active")) {
      menuBtn.classList.remove("active");
      overlay.classList.remove("active");
      menuList.classList.remove("active");
    } else {
      overlay.classList.add("active");
      menuList.classList.add("active");
      menuBtn.classList.add("active");
    }
  });
}

openMenu();

function scrollDown() {
  var windowCoords = 600;
  if (window.pageYOffset < windowCoords) {
    window.scrollBy(0, 10);
    setTimeout(scrollDown, 0);
  }
  if (window.pageYOffset > windowCoords) {
    window.scrollTo(0, windowCoords);
  }
}

let link = document.querySelector(".js-scrolldown");
link.addEventListener("click", scrollDown);
