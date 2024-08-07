const container = document.querySelector('.img-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const imgList = ["cake1","cake2","cake3","cake4","cake5","cake6","cake7","cake8","cake9","cake10"];

let index=0;
prevBtn.addEventListener("click",()=>{
    index--;
    if(index<0){
        index = imgList.length-1;
    }
    container.style.backgroundImage = `url("img/${imgList[index]}.jpg")`;
})
nextBtn.addEventListener("click",()=>{
    index++;
    if(index===imgList.length){
        index = 0;
    }
    container.style.backgroundImage = `url("img/${imgList[index]}.jpg")` ;
})