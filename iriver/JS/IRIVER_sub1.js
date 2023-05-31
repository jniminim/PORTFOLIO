const move_text = document.querySelector('.move_text');

let scollLocation = document.documentElement.scrollTop;
let TextTop = move_text.getBoundingClientRect().top + scollLocation;


document.addEventListener('scroll', function () {

    if (scollLocation < TextTop) {
        move_text.style.transform = "translateX("+ window.scrollY / -15 + "%)"
       

    }

});

AOS.init();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
      },
  });