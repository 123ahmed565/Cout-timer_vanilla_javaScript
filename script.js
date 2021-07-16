
const newYear="30 Dec 2021";

const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('minutes');
const secondsEl=document.getElementById('seconds');

function countdown(){

    const newYearData=new Date(newYear);
    const currentDate = new Date();
    
    const totalSeconds=(newYearData-currentDate)/1000;
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;
    // console.log(days,hours,minutes,seconds);

    daysEl.innerHTML=days;
    hoursEl.innerHTML= formatTime(hours);
    minutesEl.innerHTML=formatTime(minutes);
    secondsEl.innerHTML=formatTime(seconds);
}

function formatTime(time){
    return time <10 ?`0${time}`:time;
}


countdown();
setInterval(countdown , 1000);


