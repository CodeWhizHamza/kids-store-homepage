// Elements
const btnToggler = document.querySelector(".btn--toggler");

// Functions
const runSwiper = function (swiper) {
  return new Swiper(swiper, {
    centeredSlides: true,
    grabCursor: true,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
const toggleMenu = function () {
  const lists = document.querySelectorAll(".list.list--row");
  lists.forEach(lst => lst.classList.toggle("active"));
};

// Calls
const homeSwiper = runSwiper(".homeSwiper");
btnToggler.addEventListener("click", toggleMenu);
