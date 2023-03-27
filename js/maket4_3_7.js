// https://api.github.com/search/repositories?q=Q
// fetch(`https://api.github.com/search/repositories?q=${'Q'}`).then((res=>res.json()))
const debounce = (fn, debounceTime) => {
    let timerGone=true
    let timer
    let wrapper=function(){
    if(timerGone==true){
    timerGone=false;
    timer=setTimeout(()=>{timerGone=true
        fn.apply(this,arguments)},debounceTime)
    }
    else if(timerGone==false)
    {clearTimeout(timer)
    timer=setTimeout(()=>{timerGone=true
        fn.apply(this,arguments)},debounceTime)}
    }
    return wrapper;
    //code here
};
const dropdownBox=document.querySelector('.dropdown-box')
const inputBlock=document.querySelector('.input-block');
const blockSavedBlocks=document.querySelector('.block-saved-blocks');
// console.log(dropdownBox.children[0])
let newVal
let gotObj
let getInfo=async function(e){
    newVal=inputBlock.value
    if(newVal){
    gotObj=await fetch(`https://api.github.com/search/repositories?q=${newVal}`).then((res=>res.json()))
    for(let i=0;i<5;i++){
        dropdownBox.children[i].textContent=gotObj.items[i].name
        dropdownBox.children[i].parentObj=gotObj.items[i]
    }
    dropdownBox.classList.remove('dropdown-box_invisible');
}   
    
    else{dropdownBox.classList.add('dropdown-box_invisible')}
}
let debouncedInfo=debounce(getInfo,400);
document.addEventListener('keyup',debouncedInfo);
console.log(blockSavedBlocks.children)
function saveData(e){
    blockSavedBlocks.insertAdjacentHTML('beforeend',`<div class="saved-block"><div class="saved-block-text"></div><img src="images/cross4_3_7.svg" alt="крестик" class="dropdown-cross"></div>`)
    blockSavedBlocks.children[blockSavedBlocks.children.length-1].children[0].insertAdjacentHTML('beforeend',`<span>Name:${e.target.parentObj.name}</span><br>`)
    blockSavedBlocks.children[blockSavedBlocks.children.length-1].children[0].insertAdjacentHTML('beforeend',`<span>Owner:${e.target.parentObj.owner.login}</span><br>`)
    blockSavedBlocks.children[blockSavedBlocks.children.length-1].children[0].insertAdjacentHTML('beforeend',`<span>Stars:${e.target.parentObj.stargazers_count}</span><br>`)
    // console.log(e.target);
    // console.log(e.target.parentObj);    
}
function deleteData(e){
    if(e.target.classList.contains('dropdown-cross')){
    e.target.parentElement.remove();
    }
}
dropdownBox.addEventListener('click',saveData)
blockSavedBlocks.addEventListener('click',deleteData)
   
// const blockSavedBlocks=block-saved-blocks.querySelector('.saved-block-text');