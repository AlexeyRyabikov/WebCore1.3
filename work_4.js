const body = document.querySelector('body');
// console.log(body.offsetWidth);
let detect = new MobileDetect(window.navigator.userAgent)
if(detect.mobile()!==null){
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    spaceBetween:16,
    loopedSlides:3,
    slidesPerView:'auto',
  });
  const link = document.createElement('link');
  const link2= document.createElement('link');
  link.rel = 'stylesheet';
  link2.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
  link2.href = 'css/maket1_5_1.css';
  document.head.appendChild(link);
  document.head.appendChild(link2);
} else{
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/maket1_5_2.css';
  document.head.appendChild(link);
};

const SwiperSlide=document.querySelector('.swiper-slide');
const SwiperSlideClass=SwiperSlide.getAttribute('class');
console.log(SwiperSlideClass.style);
console.log(window.getComputedStyle(body,null).getPropertyValue("width"));
// const bodyWidth= body.innerWidth
const Wraper=document.querySelector('.swiper-wrapper')
const button=document.querySelector('.block-show-all')
button.addEventListener('click', function () {
  // Инструкции
  Wraper.classList.toggle('swiper-wrapper_hidden')
  Wraper.classList.toggle('swiper-wrapper_opened')
  button.classList.toggle('block-show-all_show')
  button.classList.toggle('block-show-all_hide')
});