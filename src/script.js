let activeCarouselItemIndex = 0;
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselIndicators = document.querySelectorAll(".carousel-indicator");
const leftArrow = document.querySelector(".carousel-arrow-left");
const rightArrow = document.querySelector(".carousel-arrow-right");

function updateIndicators(activeIndex) {
  carouselIndicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });

  carouselIndicators[activeIndex].classList.add("active");
}

function changeCarouselItem(newIndex) {
  carouselItems[activeCarouselItemIndex].classList.remove("active");

  activeCarouselItemIndex = newIndex;
  carouselItems[activeCarouselItemIndex].classList.add("active");

  updateIndicators(activeCarouselItemIndex);
}

leftArrow.addEventListener("click", (event) => {
  event.preventDefault();
  changeCarouselItem(
    (activeCarouselItemIndex - 1 + carouselItems.length) % carouselItems.length
  );
});

rightArrow.addEventListener("click", (event) => {
  event.preventDefault();
  changeCarouselItem((activeCarouselItemIndex + 1) % carouselItems.length);
});

changeCarouselItem(0);
