document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.image-container');
    const image = container.querySelector('img');

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left; // X-coordinate within container
      const y = e.clientY - rect.top; // Y-coordinate within container

      const moveX = (x / rect.width) * 100;
      const moveY = (y / rect.height) * 100;

      image.style.transformOrigin = `${moveX}% ${moveY}%`;
    });
  });

  var swiper = new Swiper(".mySwiper", {
    direction: 'vertical',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });