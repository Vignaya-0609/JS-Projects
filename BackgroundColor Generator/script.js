// color generate function
function generateColor(){
    const codes="0123456789ABCDEF";
    let str="#";
    for(let i=0;i<6;i++){
        let color=codes[Math.floor(Math.random()*16)];
        str+=color;
    }
    return str;
}

const btn=document.getElementById("generate-btn");
const colorDisplay = document.getElementsByTagName('h2');

btn.addEventListener('click', function() {
  const randomColor = generateColor();
  colorDisplay[0].textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});