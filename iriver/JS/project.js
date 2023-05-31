AOS.init();

let control_left = document.querySelector('.code .right .left_slide');
let control_right = document.querySelector('.code .right .right_slide');
let left_item = document.querySelectorAll('.code .right .left_slide>.item');
let right_item = document.querySelectorAll('.code .right .right_slide>.item');
console.log(control_right)
// sec03 자동슬라이드
make_clone(left_item, control_left, 0);
make_clone(right_item, control_right, 1);
//  자동슬라이드 복제
let left_item_clone = control_left.querySelectorAll('.item');
let right_item_clone = control_right.querySelectorAll('.item');
console.log(left_item_clone)
let a=0;



make_sort(left_item_clone, 0, 362);
make_sort(right_item_clone, -1810, 362);

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
    if (curren_idx == Math.abs(1810)) {

        setTimeout(function () {
            control.classList.remove('transition');
            control.style.top = index + 'px';
            curren_idx = 0;
        }, 300);
    }



}


function autoSlide() {
    if (a < Math.abs(1810)) {
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


let auto = setInterval(autoSlide, 50);