const down_review = document.querySelectorAll('#sec04 .container .review_list_container .review_list');

console.log(down_review);

for(i=0;i<down_review.length;i++){
    if(i%2==1){  //짝수번째 일경우
        down_review[i].style.top=30+'%';
    }
}
AOS.init();
const title = document.querySelectorAll('#sec05 .container .title');

console.log(title);

title.forEach(function(item,idx){
    title[idx].addEventListener('click', function(){
        let dis_text = this.lastElementChild; 
        // 첫번째 자식요소를 가져옴
        // let dis_text = this.nextElementsSibling; 
        // 선택한 요소의 다음 형제 요소
        if(dis_text.style.maxHeight){
            dis_text.style.maxHeight = null;
        }else{
            dis_text.style.maxHeight = dis_text.scrollHeight+ 'px';
        }

        //scrollHeight : 안에 있는 콘텐츠의 전체 높이값 ( 패딩값 포ㅠ함임ㅇㅇㄹㅇㄴㅁㄹㄴㅁㅇ)
        console.log(dis_text.style.maxHeight);
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
      },
  });

  const top_btn = document.querySelector('.top_btn');
  top_btn.addEventListener('click', function () {
    document.querySelector('header').scrollIntoView({ behavior: "smooth" });
  })