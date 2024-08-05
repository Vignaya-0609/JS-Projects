const display=document.getElementsByTagName("h2");
const add=document.getElementById("add-btn");
const sub=document.getElementById("sub-btn");


let num=0;
function addCounter(){
    num++;
    display[0].textContent=num;
}
function subCounter(){
    num--;
    if(num<=0){
        num=0;
    }
    display[0].textContent=num;
}

add.addEventListener("click",addCounter)
sub.addEventListener("click",subCounter)