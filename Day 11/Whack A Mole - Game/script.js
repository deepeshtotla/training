var start1=document.getElementById("start");
var mole=document.getElementsByClassName("mole");
var mud=document.getElementById("mud");
var point=document.querySelectorAll("span");
var dirt=document.getElementsByClassName("dirt");
var currentPoint=document.getElementById("currentPoint");
var mole1=document.getElementById("mole1");
var mole2=document.getElementById("mole2");
var mole3=document.getElementById("mole3");
var mole4=document.getElementById("mole4");
var mole5=document.getElementById("mole5");
var mole6=document.getElementById("mole6");
var count = 0;
function start(){
    start1.style.visibility = "hidden";
    document.getElementById("mole").style.visibility="hidden";
    mud.style.visibility = "hidden";
    for(let i=0;i<point.length;i++){
        point[i].style.visibility = "visible";
    }
    for(let i=0;i<dirt.length;i++){
        dirt[i].style.visibility = "visible";
    }
    setInterval(rand,2000);


}

function counter(){
    count++;
    point[1].textContent = count;
}

function rand(){
    
    var random=Math.floor(Math.random()*6);
    var y=random;
    mole[y].style.visibility = "visible";
    mole[y].onclick=counter;
    setTimeout(hide,1000);
    function hide(){
        mole[y].style.visibility="hidden";
    }
    
}


