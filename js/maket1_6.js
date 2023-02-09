const burgerButton=document.querySelector('.header__icon_burger');
const burgerWindow=document.querySelector('.burger-window')
const burgerWindowBody=document.querySelector('.burger-window-body')
const exitBurgerWindowbutton=document.querySelector('.icon-exit')
const BurgerWindowtransparrent=document.querySelector('.burger-window-transparent')


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
const ToggleDisabledWindow=function(){
burgerWindow.classList.toggle('burger-window_disabled')
body.classList.toggle('body_HiddenOverflow')
}   
const ToggleBurgerTransition=function(){
    burgerWindowBody.classList.toggle('burger-window-body_active')
    burgerWindow.classList.toggle('burger-window_opacity')   
}

//burger
burgerButton.addEventListener('click', function () {
    ToggleDisabledWindow();
    ToggleBurgerTransition()
});
let pulls=0;
let actions=0;
exitBurgerWindowbutton.addEventListener('click', function (e1) {
pulls++
ToggleBurgerTransition()
// setTimeout("ToggleDisabledWindow()", 1000)

burgerWindowBody.addEventListener('transitionend',function(e){
    if((e.propertyName=='transform')&&(pulls>actions)){
        actions++
    ToggleDisabledWindow()}
});
})
BurgerWindowtransparrent.addEventListener('click', function () {
ToggleBurgerTransition()
// setTimeout("ToggleDisabledWindow()", 1000) 
burgerWindowBody.addEventListener('transitionend',function(e){
    if((e.propertyName=='transform')&&(pulls>actions)){
        actions++
    ToggleDisabledWindow()}
});
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

