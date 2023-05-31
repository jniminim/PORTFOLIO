Splitting();
const title = document.querySelectorAll('.title');

console.log(title);

title.forEach(function(item,idx){
    title[idx].addEventListener('click', function(){
        let dis_text = this.lastElementChild; 
        if(dis_text.style.maxHeight){
            dis_text.style.maxHeight = null;
        }else{
            dis_text.style.maxHeight = dis_text.scrollHeight+ 'px';
        }

       
    })
})


const select_menu = document.querySelectorAll('.box_btn .btn');

const select_category = document.querySelectorAll('#sec01 .menu');


select_category[0].classList.add('show');
select_menu.forEach(function (item, idx) {
    select_menu[idx].addEventListener('click', function () {
        for (i = 0; i < select_category.length; i++) {
            select_category[i].classList.remove('show');
            select_menu[i].classList.remove('click');
           
        }

        select_category[idx].classList.add('show');
        select_menu[idx].classList.add('click');
    })
})


const top_btn = document.querySelector('.top_btn');
top_btn.addEventListener('click', function () {
  document.querySelector('header').scrollIntoView({ behavior: "smooth" });
})