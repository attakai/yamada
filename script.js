const swiper = new Swiper('.sample-slider', {
    effect: "cards",                    //カード型に
    cardsEffect: {
        perSlideOffset: 15,             // スライドの間隔（px）
        perSlideRotate: 10,             // 2枚目以降のスライドの回転角度
        rotate: true,                   // 2枚目以降のスライドの回転（あり・なし）
        slideShadows: false,            // 2枚目以降のスライドの影（あり・なし）
    },
    grabCursor: true,                   //カーソルを掴む動作に
    pagination: {                       //ページネーション（ドット）
        el: '.swiper-pagination',
    },
    navigation: {                       //ナビゲーション（矢印）
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const prev = document.querySelector('.prev button');
const next = document.querySelector('.next button');
const comic = document.querySelector('.comic');
prev.addEventListener('click', () => {
    scrollLeft = comic.scrollLeft -= 420;
});
next.addEventListener('click', () => {
    scrollLeft = comic.scrollLeft += 420;
});

const hamburger = document.querySelector('.hamburger');
window.addEventListener('scroll', ()=> {
    console.log(window.scrollY); 
    if (window.scrollY > 1000) {
        hamburger.classList.add('appear');
    } else {
        hamburger.classList.remove('appear');
    };
});
const navigation = document.querySelector('.navigation');
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('appear');
    if (navigation.classList.contains('appear')) {
        hamburger.classList.add('close');
    } else {
        hamburger.classList.remove('close');
    };
});
const buttons = document.querySelectorAll('.navigation > nav > ul > li > a');
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', () => {
        navigation.classList.remove('appear');
    });
});