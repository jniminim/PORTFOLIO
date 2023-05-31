
const slide_list = document.querySelector('header .slide_container');
let slide_item = document.querySelectorAll('header .slide_item');
let curren_idx = 0;
let item_length = 
console.log(slide_list);

make_clone();

function make_clone(){
    for(i=0;i<slide_item.length;i++){
        let firstClone = slide_item[i].cloneNode(true);
        firstClone.classList.add('clone');
        slide_list.append(firstClone);
    }
}


let slide_Clone = slide_list.querySelectorAll('.slide_item');

let margin =30;
let left_margin = 376;
let top_magin =300;
let end_width = 3008;

for(i=0;i<slide_Clone.length;i++){
    if(i%2==0){
        slide_Clone[i].style.left = i*left_margin+'px';
    }else{
        slide_Clone[i].style.left = i*left_margin+'px';
        slide_Clone[i].style.top = top_magin+'px';
    }
            
       
    
    
}


function gotoslide(index){
    
    slide_list.style.left = index*-1+'px';
    slide_list.classList.add('transition');
    curren_idx=index;
    if(curren_idx==end_width){
       
        setTimeout(function(){
            slide_list.classList.remove('transition');
            slide_list.style.left = '0';
            curren_idx=0;
        },300);
    }
    

    
}
let a = 0;

function autoSlide(){
    if(a<end_width){
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


const select_menu = document.querySelectorAll('#sec03 .container .menu p');

const select_category = document.querySelectorAll('#sec03 .container .category_menu');

console.log(select_menu);
select_category[0].classList.add('show');
select_menu.forEach(function (item, idx) {
    select_menu[idx].addEventListener('click', function () {
        for (i = 0; i < select_category.length; i++) {
            select_category[i].classList.remove('show');

            select_menu[i].classList.remove('font_weight');
            select_menu[i].classList.remove('active');
            
        }

        select_menu[idx].classList.add('active');
        select_menu[idx].classList.add('font_weight');
        
        select_category[idx].classList.add('show');
       

    })
})

AOS.init();

const top_btn = document.querySelector('.top_btn');
top_btn.addEventListener('click', function () {
  document.querySelector('header').scrollIntoView({ behavior: "smooth" });
})