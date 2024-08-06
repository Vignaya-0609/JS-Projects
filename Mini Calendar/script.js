const date=new Date();
const tdyDate=date.getDate();
const day=date.getDay();
const month=date.getMonth()+1;
const yr=date.getFullYear();

let thisDay;
switch(day){
    case 0:
        thisDay="Sunday";
        break;
    case 1:
        thisDay="Monday";
        break;
    case 2:
        thisDay="Tuesday";
        break;
    case 3:
        thisDay="Wednesday";
        break;
    case 4:
        thisDay="Thursday";
        break;
    case 5:
        thisDay="Friday";
        break;
    case 6:
        thisDay="Saturday";
        break;
    default:
        thisDay="Invalid Day";
}
let thisMonth;
switch(month){
    case 1:
        thisMonth="January";
        break;
    case 2:
        thisMonth="February";
        break;
    case 3:
        thisMonth="March";
        break;
    case 4:
        thisMonth="April";
        break;
    case 5:
        thisMonth="May";
        break;
    case 6:
        thisMonth="June";
        break;
    case 7:
        thisMonth="July";
        break;
    case 8:
        thisMonth="August";
        break;
    case 9:
        thisMonth="September";
        break;
    case 10:
        thisMonth="October";
        break;
    case 11:
        thisMonth="November";
        break;
    case 12:
        thisMonth="December";
        break;
    default:
        thisMonth="Invalid Month";
}


const displayDate=document.getElementById("tdyDate");
const displayDay=document.getElementById("day");
const displayMonth=document.getElementById("month");
const displayYear=document.getElementById("yr");

displayDate.textContent=tdyDate;
displayDay.textContent=thisDay;
displayMonth.textContent=thisMonth;
displayYear.textContent=yr