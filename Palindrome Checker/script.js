const val=document.getElementById("val");
const btn=document.getElementById("check");

function check(){
    let text=val.value;
    let ans=text.replace(/[^a-zA-Z]/gi,"");
    let reverseString=ans.split('').reverse().join('');
    if(ans.trim()==""){
        document.getElementById("result").innerText="Enter a valid string";
        val.value="";
    }
    else if(ans.toLowerCase()===reverseString.toLowerCase()){
        document.getElementById("result").innerText="Yes! It is a Palindrome";
    }
    else{
        document.getElementById("result").innerText="No! It is not a Palindrome";
    }
}
btn.addEventListener("click",check);