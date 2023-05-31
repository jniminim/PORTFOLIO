
  AOS.init();



const slide_list = document.querySelector('#sec08 .slide_list');
let slide_item = document.querySelectorAll('#sec08 .slide_item');
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

console.log(slide_Clone);
for(i=0;i<slide_Clone.length;i++){

            slide_Clone[i].style.left = (i* 61)+'%';

    
    
}


function gotoslide(index){
    
    slide_list.style.left = index*-1+'px';
    slide_list.classList.add('transition');
    curren_idx=index;
    if(curren_idx==4677){
       
        setTimeout(function(){
            slide_list.classList.remove('transition');
            slide_list.style.left = '0';
            curren_idx=0;
        },300);
    }
    

    
}

let a = 0;

function autoSlide(){
    if(a<4677){
        gotoslide(a);
        a++;
    }else{
        a=0;
        gotoslide(0);
        slide_list.classList.remove('transition');
    }
    console.log(a);
}

auto = setInterval(autoSlide,10);


slide_list.addEventListener('mouseover', function(){
    clearInterval(auto);
})

slide_list.addEventListener('mouseout', function(){
  auto = setInterval(autoSlide,10);
    })



    