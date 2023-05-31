const sec03_scroll = document.querySelector('.sec03');
let control_left = document.querySelector('.sec03 .control_left');
let control_right = document.querySelector('.sec03 .control_right');
let left_item = document.querySelectorAll('.sec03 .control_left>.img_box');
let right_item = document.querySelectorAll('.sec03 .control_right>.img_box');
let a = 0;
let point = 0;

var currentIndex = 0;
$('.left>.text_box:gt(0)').hide();
setInterval(function () {
    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    $(".left>.text_box").eq(currentIndex).siblings().fadeOut();
    $(".center>.main_banner_img>img").eq(currentIndex).siblings().fadeOut();
    $(".right>.banner_img>img").eq(currentIndex).siblings().fadeOut();
    $(".right>.right_banner>img").eq(currentIndex).siblings().fadeOut();

    $(".left>.text_box").eq(currentIndex).fadeIn();
    $(".center>.main_banner_img>img").eq(currentIndex).fadeIn();
    $(".right>.banner_img>img").eq(currentIndex).fadeIn();
    $(".right>.right_banner>img").eq(currentIndex).fadeIn();

}, 3000);
// 스크롤 이벤트

window.addEventListener('scroll', function () {
    // 스크롤바의 위치를 구하는 코드 : document.documentElement.scrollTop
    let scrollLocation = document.documentElement.scrollTop;
    let sec03_top = sec03_scroll.getBoundingClientRect().top + scrollLocation;
    // 스크롤이 발생했을 떄 생기는 변수


    if (scrollLocation > sec03_top - 300) {
        sec03_scroll.classList.add('background');
        a = a + 5;
    } else if (scrollLocation < sec03_top - 300 || scrollLocation > sec03_top + 200) {
        sec03_scroll.classList.remove('background');
    }


})



// sec03 자동슬라이드
make_clone(left_item, control_left, 0);
make_clone(right_item, control_right, 1);
//  자동슬라이드 복제
let left_item_clone = control_left.querySelectorAll('.img_box');
let right_item_clone = control_right.querySelectorAll('.img_box');
console.log(left_item_clone)



make_sort(left_item_clone, 0, 598);
make_sort(right_item_clone, -2392, 598);

// 복제하는 함수
function make_clone(item, item_list, back) {

    if (back == 1) {
        for (i = item.length - 1; i >= 0; i--) {
            let lastClone = item[i].cloneNode(true);
            lastClone.classList.add('clone');
            item_list.prepend(lastClone);
        }
    } else {
        for (i = 0; i < item.length; i++) {
            let firstClone = item[i].cloneNode(true);
            firstClone.classList.add('clone');
            item_list.append(firstClone);
        }
    }
}

// 복제한 클론들과 함께 리스트 정렬
function make_sort(item_list, max_hight, magin) {

    for (i = 0; i < item_list.length; i++) {
        item_list[i].style.top = (max_hight) + i * magin + 'px';

    }

}


function gotoslide(control, index, speed) {

    control.style.top = index * -speed + 'px';
    control.classList.add('transition');
    curren_idx = index;
    if (curren_idx == Math.abs(2392)) {

        setTimeout(function () {
            control.classList.remove('transition');
            control.style.top = index + 'px';
            curren_idx = 0;
        }, 300);
    }



}


function autoSlide() {
    if (a < Math.abs(2392)) {
        gotoslide(control_left, a, 1);
        gotoslide(control_right, a, -1);
        a++;
    } else {
        a = 0;
        gotoslide(control_left, 0, 1);
        gotoslide(control_right, 0, -1);
        control_left.classList.remove('transition');
    }

}
console.log(left_item_clone.length);
let auto = setInterval(autoSlide, 50);

window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
        make_sort(left_item_clone, 0, 450);
        make_sort(right_item_clone, -1800, 450);
    } else {

        make_sort(left_item_clone, 0, 598);
        make_sort(right_item_clone, -2392, 598);
    }
})







$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    //   prevArrow:$('.prev')
});



var currentIndex = 0;
$('.sec06 .slide_item .item_box .item_box:gt(0)').hide();
setInterval(function () {
    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    $(".left_item>.img_box>img").eq(currentIndex).siblings().fadeOut();
    $(".center_item>.img_box>img").eq(currentIndex).siblings().fadeOut();
    $(".right_item>.img_box>img").eq(currentIndex).siblings().fadeOut();

    $(".left_item>.img_box>img").eq(currentIndex).fadeIn();
    $(".center_item>.img_box>img").eq(currentIndex).fadeIn();
    $(".right_item>.img_box>img").eq(currentIndex).fadeIn();

}, 3000);