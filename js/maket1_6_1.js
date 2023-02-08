let detect = new MobileDetect(window.navigator.userAgent)
if(detect.mobile()!==null){
  const head= document.querySelector('head')
  const link = document.createElement('link');
  const link2= document.createElement('link');
  link.rel = 'stylesheet';
  link2.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
  link2.href = 'css-1.6/1.6_320-768px.css';
  document.head.appendChild(link);
  document.head.appendChild(link2);
new Swiper('.manufacturersSwiper', {
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
  new Swiper('.pricesSwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.PricesPagination',
    },
    spaceBetween:16,
    loopedSlides:3,
    slidesPerView:'auto',
  });
new Swiper('.servicesSwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
   // If we need pagination
    pagination: {
      el: '.ServicesPagination',
    },
    spaceBetween:16,
    loopedSlides:3,
    slidesPerView:'auto',
  });



} else{
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css-1.6/1.6_768pxAndMore.css';
  document.head.appendChild(link);
};

const SwiperSlide=document.querySelector('.swiper-slide');
const SwiperSlideClass=SwiperSlide.getAttribute('class');
console.log(window.getComputedStyle(body,null).getPropertyValue("width"));
// const bodyWidth= body.innerWidth
const ManufactorersWraper=document.querySelector('.manufacturers-main .swiper-wrapper')
const ManufactorersButton=document.querySelector('.manufacturers-main .block-show-all')
const ServicesWraper=document.querySelector('.services-main .swiper-wrapper')
const ServicesButton=document.querySelector('.services-main .block-show-all')


ManufactorersButton.addEventListener('click', function () {
  // Инструкции
  ManufactorersWraper.classList.toggle('swiper-wrapper_hidden')
  ManufactorersWraper.classList.toggle('swiper-wrapper_opened')
  ManufactorersButton.classList.toggle('block-show-all_show')
  ManufactorersButton.classList.toggle('block-show-all_hide')
});
ServicesButton.addEventListener('click', function () {
  // Инструкции
  ServicesWraper.classList.toggle('swiper-wrapper_hidden')
  ServicesWraper.classList.toggle('swiper-wrapper_opened')
  ServicesButton.classList.toggle('block-show-all_show')
  ServicesButton.classList.toggle('block-show-all_hide')
});