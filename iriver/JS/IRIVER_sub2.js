
// AOS.init();


const select_menu = document.querySelectorAll('#sec02>.top>.container>.item_box');
const selectImg = document.querySelectorAll('#sec02>.bot .slid_container>.img_box');
const selectText = document.querySelectorAll('#sec02>.bot .slid_container>.text_box');


select_menu.forEach(function (item, idx) {
    select_menu[idx].addEventListener('mouseover', function () {
        for (i = 0; i < selectImg.length; i++) {
            selectImg[i].style.opacity = 0;
            selectImg[i].style.zIndex = -1;
            selectText[i].style.opacity = 0;
            selectText[i].style.zIndex = -1;
        }
        selectImg[idx].style.opacity = 1;
        selectImg[idx].style.zIndex = 1;
        selectImg[idx].style.transition = '1s';

        selectText[idx].style.opacity = 1;
        selectText[idx].style.zIndex = 1;
        selectText[idx].style.transition = '1s';
    })
})

// 카테고리 버튼 클릭시 해당하는 섹션으로 이동
select_menu.forEach(function (item, idx) {
    select_menu[idx].addEventListener('click', function () {
        document.querySelector('#sec0' + (3 + idx)).scrollIntoView({ behavior: "smooth" });
    })
})




const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');
const slide_list = document.querySelector('#sec03 .slid_container');
let slide_item = document.querySelectorAll('#sec03 .item_box');
let curren_idx = 0;


make_clone();

function make_clone(){
    for(i=slide_item.length-1;i>=0;i--){
        let firstClone = slide_item[i].cloneNode(true);
        firstClone.classList.add('clone');
        slide_list.prepend(firstClone);
    }
    for(i=0;i<slide_item.length;i++){
        let firstClone = slide_item[i].cloneNode(true);
        firstClone.classList.add('clone');
        slide_list.append(firstClone);
    }
}


let slide_Clone = slide_list.querySelectorAll('.item_box');

console.log(slide_Clone);
for(i=0;i<slide_Clone.length;i++){
    slide_Clone[i].style.left = (-7750)+ i*310+'px';
    
}


function gotoslide(index){
    
    slide_list.style.left = index*-310+'px';
    slide_list.style.transition='1s';
    curren_idx=index;
    if(curren_idx==slide_item.length ||curren_idx==-slide_item.length){
       
        setTimeout(function(){
            slide_list.style.transition='none';
            slide_list.style.left = '0px';
            curren_idx=0;
        },1000);
    }
    console.log(curren_idx,slide_item.length);

    
}

gotoslide(1);

next_btn.addEventListener('click', function () {
    gotoslide(curren_idx+1);
   
    
})

prev_btn.addEventListener('click',function(){
        gotoslide(curren_idx-1);
})
