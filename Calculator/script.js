let values=document.getElementById("value");
let val='';
function display(value){
    val+=value;
    values.textContent=val;
}
function clr(){
    val='';
    values.textContent="";
}
function equate(){
    let eq=values.textContent;
    let res=eval(eq);
    values.textContent=res;
}