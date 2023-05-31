AOS.init();
Splitting();
var swiper = new Swiper(".mySwiper", {
  
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

let circularProgress = document.querySelectorAll('.text_container>.circular-progress'); 
let progressValue = document.querySelectorAll('.text_container>.circular-progress>.progress-value');

let progressStartValue = 0;
let progressStartValue1 = 0;
let progressStartValue2 = 0;
let progressStartValue3 = 0;
let progressStartValue4 = 0;

let z= true;


const header =document.querySelector('header nav');
const select_menu = document.querySelectorAll('header nav li');
const move_text = document.querySelector('#sec01');


window.addEventListener('scroll', function(){
 let scrollLocation = document.documentElement.scrollTop;
  let moveTop = move_text.getBoundingClientRect().top + scrollLocation;
    if(scrollLocation>0){
        header.classList.add('bg_change');
    }else{
        header.classList.remove('bg_change');
        header.style.transition='0.5s';
    }

    if(scrollLocation>moveTop-600){

      if(z==true){
        let progress3 = setInterval(function(){
          progressStartValue1++;
          progressValue[2].textContent =  progressStartValue1 + '%'
          circularProgress[2].style.background = `conic-gradient(#FF7ADB ${progressStartValue1 * 3.6}deg, #ededed 0deg)`
          if(progressStartValue1==90){
            clearInterval(progress3);
          }
          
        },50);
        let progress4 = setInterval(function(){
          progressStartValue2++;
          progressValue[3].textContent =  progressStartValue2 + '%'
          circularProgress[3].style.background = `conic-gradient(#D8E161 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`
          if(progressStartValue2==70){
            clearInterval(progress4);
          }
          
        },50);
        
        
        let progress = setInterval(function(){
          progressStartValue3++;
          progressValue[0].textContent =  progressStartValue3 + '%'
          circularProgress[0].style.background = `conic-gradient(#FF3E3E ${progressStartValue3 * 3.6}deg, #ededed 0deg)`
          if(progressStartValue3==90){
            clearInterval(progress);
          }
          
        },50);
        
        
        
         
        
        
        let progress2 = setInterval(function(){
          progressStartValue4++;
          progressValue[1].textContent =  progressStartValue4 + '%'
          circularProgress[1].style.background = `conic-gradient(#7065FF ${progressStartValue4 * 3.6}deg, #ededed 0deg)`
          if(progressStartValue4==80){
            clearInterval(progress2);
          }
          
        },50);
        
        
        
        let progress1 = setInterval(function(){
          progressStartValue++;
          progressValue[4].textContent =  progressStartValue + '%'
          circularProgress[4].style.background = `conic-gradient(#0476A1 ${progressStartValue * 3.6}deg, #ededed 0deg)`
          if(progressStartValue==60){
            clearInterval(progress1);
            progressStartValue = 0
          }
          
        },50);
        z=false;
      }
      
  }else{
    
  }
})

select_menu.forEach(function (item, idx) {
    select_menu[idx].addEventListener('click', function () {
        document.querySelector('#sec0' + (idx)).scrollIntoView({ behavior: "smooth" });
    })
})


