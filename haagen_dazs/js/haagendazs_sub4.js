const slide_list = document.querySelector('#sec01 .slide_container');
let slide_item = document.querySelectorAll('#sec01 .slide_container .slide_item');
let curren_idx = 0;




make_clone();

function make_clone(){
    for(i=0;i<slide_item.length;i++){
        let firstClone = slide_item[i].cloneNode(true);
        firstClone.classList.add('clone');
        slide_list.append(firstClone);
    }
}


let slide_Clone = slide_list.querySelectorAll('.slide_item');

let left_margin = 470;

for(i=0;i<slide_Clone.length;i++){

        slide_Clone[i].style.left = i*left_margin+'px';
            
       
    
    
}


function gotoslide(index){
    
    slide_list.style.left = index*-1+'px';
    slide_list.classList.add('transition');
    curren_idx=index;
    if(curren_idx==2820){
       
        setTimeout(function(){
            slide_list.classList.remove('transition');
            slide_list.style.left = '0';
            curren_idx=0;
        },300);
    }
    

    
}
let a = 0;

function autoSlide(){
    if(a<2820){
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


AOS.init();

const top_btn = document.querySelector('.top_btn');
top_btn.addEventListener('click', function () {
  document.querySelector('header').scrollIntoView({ behavior: "smooth" });
})