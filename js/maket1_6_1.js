const meta=document.querySelector('meta')
const body=document.querySelector('.body');
console.log(Number(body.offsetWidth));
console.log(screen.height,'screenwidth')
const px1440 = document.createElement('link');
px1440.href = 'css-1.6/1.6_1440px.css';
px1440.rel = 'stylesheet';
const px768px1440 = document.createElement('link');
px768px1440.href = 'css-1.6/1.6_768-1440px.css';
px768px1440.rel = 'stylesheet';
if((body.offsetWidth<1440)&&(body.offsetWidth>768)){
    document.head.appendChild(px768px1440)
    console.log('включен 768-1440')
    }
if(body.offsetWidth>=1440){
burgerWindow.classList.remove('burger-window_disabled')
document.head.appendChild(px1440)
console.log('включен 1440')
}
if(body.offsetWidth>=768){
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css-1.6/1.6_768pxAndMore.css';
  console.log('включен >768')
  document.head.appendChild(link);
  }
else{
  exitBurgerWindowbutton.addEventListener('click', function (e1) {
    ToggleDisabledWindow()
  })
  console.log('включен <786')
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
      el: '.manufacturersPagination',
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