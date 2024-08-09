const getFact=document.getElementById("getFact");
const randomFact=document.getElementById("randomFact");

const displayContent=document.querySelector(".fact");

// url
let url="http://numbersapi.com/";

// dafault displayContent is none
displayContent.style.display = "none";

// Random Number
function randomNumber(){
    return Math.floor(Math.random()*300 +1);
}

// fetch API
let fetchApi=(num)=>{
    let searchUrl=url+num;
    fetch(searchUrl)
    .then((res)=>res.text())
    .then((data)=>{
    displayContent.innerHTML=`<h2>${num}</h2>
    <p>${data}</p>`;
    displayContent.style.display = "block";
    document.querySelector(".container").append(displayContent);
    })
};


// get fact
getFact.addEventListener("click",()=>{
    let num=document.getElementById("num").value;
    if(num){
        if(num>=0 && num<=300){
            fetchApi(num);
        }
        else{
            displayContent.style.display="block";
            displayContent.innerHTML=`<p class="msg">Please enter a number between 0 to 300</p>`;
        }
    }
    else{
        displayContent.style.display="block";
        displayContent.innerHTML=`<p class="msg">The input field cannot be empty</p>`;

    }
})


// randomFact
randomFact.addEventListener("click",()=>{
    let randNum=randomNumber();
    fetchApi(randNum)
})