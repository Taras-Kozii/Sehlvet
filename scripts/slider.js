'use strict';

export function initSlider() {
  const slider = new Swiper(".reviews-slider", {
    navigation: {
      nextEl: ".reviews-slider__next",
      prevEl: ".reviews-slider__prev" 
    },
    autoHeight: true,
    on: {
      slideChangeTransitionEnd() {
        this.updateAutoHeight();
      }
    },
    speed: 800,
    initialSlide: 2,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    loop: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true 
    },
    breakpoints: { 
      1024: { slidesPerView: 3 }
    },
  });
}
