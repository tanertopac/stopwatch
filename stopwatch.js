const scr=document.getElementById("screen");
const startButton=document.getElementById("start");
const resetButon=document.getElementById("reset");
const recordButton=document.getElementById("record");
const timeList=document.getElementById("timelist");
let interval;
let counter=0;
let started=false;
let current;

startButton.addEventListener("click",()=>{
    
    if(!started){
        startTime();
        started=true;
        return;
    }
    else{
        stopTime();
        started=false;
        return;
    }
});

resetButon.addEventListener('click',()=>{
    clearInterval(interval);
    counter=0;
    started=false;
    scr.innerHTML=counter;
    scr.style.color='black';
    timeList.innerHTML='';
});

recordButton.addEventListener('click',()=>{
    var curColor=scr.style.color;
    if(curColor!=='green'){
        scr.style.color='green';
        setTimeout(()=>{
            scr.style.color=curColor;
        },500);
    }
    current=counter/100;
    timeList.innerHTML+=current+'<br>';
});

function startTime(){
    interval=setInterval(()=>{
        counter++;
        scr.innerHTML=counter/100;
    },10);
    scr.style.color='red';
}

function stopTime(){
    scr.style.color='blue';
    clearInterval(interval);
}