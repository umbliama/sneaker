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

function makeLinkActive(e) {
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
