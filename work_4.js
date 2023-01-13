const body = document.querySelector('body');
// console.log(body.offsetWidth);
let detect = new MobileDetect(window.navigator.userAgent)
alert("Mobile: " + detect.mobile());       // телефон или планшет
console.log("Phone: " + detect.phone());         // телефон
console.log("Tablet: " + detect.tablet());       // планшет
console.log("OS: " + detect.os());               // операционная система
console.log("userAgent: " + detect.userAgent()); // userAgent
if(body.offsetWidth<768){
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween:16,
    loopedSlides:3,
    slidesPerView:'auto',
  });
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
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
  button.classList.toggle('block-show-all__show')
  button.classList.toggle('block-show-all__hide')
});