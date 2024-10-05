
let minutes = 0;
let seconds = 0;
let tens = 00;
let appendMinutes =document.querySelector('#minutes');
let appendSeconds =document.querySelector('#seconds');
let appendTens =document.querySelector('#tens');
let startBtn = document.querySelector('#start');
let stoptBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');
let interval;


const startTimer = () =>{
    tens++
    if(tens < 9){
        appendTens.innerHTML= '0'+seconds
    }
    if(tens >9){
        appendTens.innerHTML=tens
    }
    if(tens >99){
        seconds++
        appendSeconds.innerHTML= '0'+0;
    }
    if(seconds >9){
        appendSeconds.innerHTML=seconds
    }
    if(seconds >59){
        minutes++
        appendMinutes.innerHTML='0'+minutes;
        seconds=0
        appendSeconds.innerHTML='0'+0;
    }
}
 startBtn.onclick = () =>{
    clearInterval(interval)
    interval = setInterval(startTimer, 10);
 }
 stoptBtn.onclick =() =>{
    clearInterval(interval)
 }
 resetBtn.onclick =() =>{
    clearInterval(interval)
    tens = 00;
    seconds =00;
    minutes = 00;
    appendTens.innerHTML =tens;
    appendSeconds.innerHTML =seconds;
    appendMinutes.innerHTML =minutes;
 }
