const display=document.getElementById("display-time");

function displayTime(){
    let date=new Date();
    let hrs=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let session="AM";
    if(hrs===0){
        hrs=12;
    }
    if(hrs>12){
        hrs-=12;
        session="PM";
    }
    hrs=(hrs<10)?"0"+hrs:hrs;
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;

    display.textContent=`${hrs}:${min}:${sec} ${session}`;

    setInterval(displayTime,1000);
}

displayTime();