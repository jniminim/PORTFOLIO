const title = document.querySelectorAll('.accordion');

AOS.init();


title.forEach(function(item,idx){
    title[idx].addEventListener('mouseover', function(){
        let dis_text = this.firstElementChild; {
            dis_text.style.maxWidth = dis_text.scrollWidth+ 'px';
        }
    
    })

    title[idx].addEventListener('mouseout', function(){
        let dis_text = this.firstElementChild; 

        if(dis_text.style.maxWidth){
            dis_text.style.maxWidth = null;
        //     title[title.length-1].firstElementChild.style.maxWidth = title[title.length-1].firstElementChild.scrollWidth+ 'px';
        // title[title.length-1].firstElementChild.style.transition='1s';
        }
        

    })
})



const slide_list = document.querySelector('#sec06 .slide_container');
let slide_item = document.querySelectorAll('#sec06 .slide_item');
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
let odd_num_width = 485;
let even_num_width = 800;
let even_num_left = odd_num_width + margin;
let odd_num_left = even_num_width + margin;
let odd = 1;
let even = 1;

console.log(slide_Clone);
for(i=0;i<slide_Clone.length;i++){
    if(i%2==0){
        if(i==0){
            slide_Clone[i].style.left = 30+'px';
        }
        else{slide_Clone[i].style.left = (odd*even_num_left) + (odd*odd_num_left)+margin +'px';
        odd++;
    }
    }else{
        if(i==1){
            slide_Clone[i].style.left = (margin +even_num_left)+'px';
    }
         slide_Clone[i].style.left = even*even_num_left+((even-1)*odd_num_left)+margin+'px';
         even++;
        }

    
    
}


function gotoslide(index){
    
    slide_list.style.left = index*-1+'px';
    slide_list.classList.add('transition');
    curren_idx=index;
    if(curren_idx==4035){
       
        setTimeout(function(){
            slide_list.classList.remove('transition');
            slide_list.style.left = '0';
            curren_idx=0;
        },300);
    }
    

    
}

let a = 0;

function autoSlide(){
    if(a<4035){
        gotoslide(a);
        a++;
    }else{
        a=0;
        gotoslide(0);
        slide_list.classList.remove('transition');
    }
    console.log(a);
}




slide_list.addEventListener('mouseover', function(){
    clearInterval(auto);
})

slide_list.addEventListener('mouseout', function(){
  auto = setInterval(autoSlide,10);
    })



    const select_menu = document.querySelector('.top_btn');
    select_menu.addEventListener('click', function () {
      document.querySelector('header').scrollIntoView({ behavior: "smooth" });
  })