let slide_bg_babber = document.querySelectorAll('header .slide_container');
AOS.init();
console.log(slide_bg_babber);
let currentIndex =0;
$('.left>.div:gt(0)').hide();
$(".center .product_img").hide();
$(".center .product_img").eq(0).fadeIn();
setInterval(function () {
    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    $(".left .bg_img").eq(currentIndex).siblings().fadeOut();
    $(".center .product_img").eq(currentIndex).siblings().fadeOut();
    $(".right .product_text").eq(currentIndex).siblings().fadeOut();
   
    $(".left .bg_img").eq(currentIndex).fadeIn();
    $(".center .product_img").eq(currentIndex).fadeIn();
    $(".right .product_text").eq(currentIndex).fadeIn();
    

}, 2000);


const slide_list = document.querySelector('#sec01 .slide_container');
let slide_item = document.querySelectorAll('#sec01 .item');


make_clone();

function make_clone(){
    for(i=0;i<slide_item.length;i++){
        let firstClone = slide_item[i].cloneNode(true);
        firstClone.classList.add('clone');
        slide_list.append(firstClone);
    }
}


let slide_Clone = slide_list.querySelectorAll('.item');

let margin =30;
let left_margin = 470;
let top_magin =300;
let end_width = 3008;

for(i=0;i<slide_Clone.length;i++){

        slide_Clone[i].style.left = i*left_margin+'px';
            
       
    
    
}


function gotoslide(index){
    
    slide_list.style.left = index*-1+'px';
    slide_list.classList.add('transition');
    curren_idx=index;
    if(curren_idx==3760){
       
        setTimeout(function(){
            slide_list.classList.remove('transition');
            slide_list.style.left = '0';
            curren_idx=0;
        },300);
    }
    

    
}
let a = 0;

function autoSlide(){
    if(a<3760){
        gotoslide(a);
        a++;
    }else{
        a=0;
        gotoslide(0);
        slide_list.classList.remove('transition');
    }
}
let auto = setInterval(autoSlide,10);


slide_list.addEventListener('mouseover', function(){
    clearInterval(auto);
})

slide_list.addEventListener('mouseout', function(){
  auto = setInterval(autoSlide,10);
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        scrollbar: {
            el: ".swiper-scrollbar",
          },
      });
 


      const select_menu = document.querySelector('.top_btn');
      select_menu.addEventListener('click', function () {
        document.querySelector('header').scrollIntoView({ behavior: "smooth" });
    })