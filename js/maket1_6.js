const burgerButton=document.querySelector('.header__icon_burger');
const burgerWindow=document.querySelector('.burger-window')
const exitBurgerWindowbutton=document.querySelector('.icon-exit')
const BurgerWindowtransparrent=document.querySelector('.burger-window-transparent')
const meta=document.querySelector('meta')
const body=document.querySelector('.body');


const FeedbackWindow=document.querySelector('.feedback-window')
const FeedbackButton=document.querySelector('.header__icon_feedback')
const Feedback2ndButton=document.querySelector('.header__icon_leftfeedback')
const FeedbackWindowtransparrent=document.querySelector('.feedback-window-transparent')
const exitFeedbackWindowButton=document.querySelector('.feedback-exit-image')


const CallWindow=document.querySelector('.call-window')
const CallButton=document.querySelector('.header__icon_call')
const Call2ndButton=document.querySelector('.header__icon_leftcall')
const CallWindowtransparrent=document.querySelector('.call-window-transparent')
const exitCallWindowButton=document.querySelector('.call-exit-image')

//burger
burgerButton.addEventListener('click', function () {
burgerWindow.classList.toggle('burger-window_disabled')
body.classList.toggle('body_HiddenOverflow')  
});
exitBurgerWindowbutton.addEventListener('click', function () {
burgerWindow.classList.toggle('burger-window_disabled')
body.classList.toggle('body_HiddenOverflow')     
});
BurgerWindowtransparrent.addEventListener('click', function () {
burgerWindow.classList.toggle('burger-window_disabled')
body.classList.toggle('body_HiddenOverflow')     
});

// feedback
    FeedbackButton.addEventListener('click', function () {
    FeedbackWindow.classList.toggle('feedback-window_disabled') 
    body.classList.toggle('body_HiddenOverflow')  
    });
    Feedback2ndButton.addEventListener('click', function () {
    FeedbackWindow.classList.toggle('feedback-window_disabled') 
    body.classList.toggle('body_HiddenOverflow')  
    });
    exitFeedbackWindowButton.addEventListener('click', function () {
    FeedbackWindow.classList.toggle('feedback-window_disabled')
    body.classList.toggle('body_HiddenOverflow')     
    });
    FeedbackWindowtransparrent.addEventListener('click', function () {
    FeedbackWindow.classList.toggle('feedback-window_disabled')
    body.classList.toggle('body_HiddenOverflow')     
    });

// call
    Call2ndButton.addEventListener('click', function () {
    CallWindow.classList.toggle('call-window_disabled') 
    body.classList.toggle('body_HiddenOverflow')  
    });
    CallButton.addEventListener('click', function () {
    CallWindow.classList.toggle('call-window_disabled') 
    body.classList.toggle('body_HiddenOverflow')  
    });
    exitCallWindowButton.addEventListener('click', function () {
    CallWindow.classList.toggle('call-window_disabled')
    body.classList.toggle('body_HiddenOverflow')     
    });
    CallWindowtransparrent.addEventListener('click', function () {
    CallWindow.classList.toggle('call-window_disabled')
    body.classList.toggle('body_HiddenOverflow')     
    });

console.log(Number(body.offsetWidth));
console.log(screen.height,'screenwidth')
const px1440 = document.createElement('link');
px1440.href = 'css-1.6/1.6_1440px.css';
px1440.rel = 'stylesheet';
if(body.offsetWidth>=1440){
document.head.appendChild(px1440)
}