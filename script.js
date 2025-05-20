let startbtn = document.getElementById("start");
let resetbtn = document.getElementById("reset");
let stopbtn = document.getElementById("stop");

let hh = document.getElementById("time");
let mm = document.getElementById("min");
let display = document.getElementById("sec");





let starttime=0  , elapsedTime=0 , timeInterval;



function start(){
    starttime=Date.now()-elapsedTime;
    timeInterval=setInterval(()=>{
        elapsedTime=Date.now()-starttime;
        display.innerHTML=formatedata(elapsedTime)

    },1000)

    startbtn.disabled=true;
    resetbtn.disabled=false;
}


function formatedata(){
    const  ss=Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const mm=Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hh=Math.floor(elapsedTime / (1000 * 60 * 60));
;
    return (
        (hh ?(hh>9?(hh):"0"+hh):"00")+":"+(mm?(mm>9?(mm):"0"+mm):"00")+":"+(ss?(ss>9?(ss):"0"+ss):"00")
    );
}

function stop(){
    // elapsedTime=Date.now()-starttime;
    clearInterval(timeInterval);
    stop.disabled=true;
    resetbtn.disabled=false;
    startbtn.disabled=false;

}


function reset(){
    clearInterval(timeInterval);
    starttime=0;
    elapsedTime=0;

    startbtn.disabled=false;
    // stopbtn.disabled=true;
    display.innerHTML="00:00:00"
}












































































































// let  endtime , elapsedtime=0 , running=false , timer ,i;

// function upadate(){
//     const current=running? Date.now()-ss:elapsedtime;
//     hh.innerHTML=(current/1000).toFixed(0)
    
// }

// function start(){
//     if(!running){
//         ss=Date.now()-elapsedtime;
//         timer=setInterval(upadate,1000);
//         running=true;
//     }
// }


// function stop(){
    
//     if(running){
//         elapsedtime=Date.now()-ss;
//         clearInterval(timer);
//         running=false;
//         console.log("hello")
//     }
// }

// function reset(){
//     clearInterval(timer);
//     ss=null;
//     elapsedtime=0;
//     running=false;
//     upadate();
// }

// upadate();