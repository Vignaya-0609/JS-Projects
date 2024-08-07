const guessBtn=document.getElementById("guess");

const randomNum=Math.floor(Math.random()*100+1);
// console.log(randomNum)
let guess=10;
let arr=[];

function guessFunc(){
    let number=document.getElementById("num");
    let num=Number(number.value);
    // console.log(num)
    if(num!==randomNum){
        guess--;
        document.getElementById("remaining").innerText=guess;
        arr.push(num);
        document.getElementById("prevValues").innerText=arr.join(" ");
        if(guess<=0){
            document.getElementById("crtAns").textContent="Number was "+ randomNum;
            document.getElementById("res").textContent="You Lose!";
            document.getElementById("num").readOnly=true;
            guessBtn.removeEventListener("click",guessFunc)
        }
        document.getElementById("num").value="";
    }
    else{
        guess--;
        arr.push(num);
        document.getElementById("prevValues").innerText=arr.join(" ");
        document.getElementById("remaining").innerText=guess;
        document.getElementById("num").readOnly=true;
        guessBtn.removeEventListener("click",guessFunc)
        document.getElementById("crtAns").textContent="Number was "+ randomNum;
        document.getElementById("res").textContent="You Won!";
        document.getElementById("remaining").innerText=guess;
        document.getElementById("num").value="";
    }
}

guessBtn.addEventListener("click",guessFunc)