var x=Math.floor(Math.random()*10)+1;
// alert(x);
var count=5;
// document.body.innerHTML="<h1>"+ x +"</h1>";
alert("You have to guess the number between 1 to 10.");
alert("you have total "+count+" chances to Guess the Number");
var flag=false;
while(count>0){
    var a=Number(prompt("Enter the Number to be guessed:"));
    if(a==x){
        alert("you guessed it correct");
        flag=true;
        break;
    }
    // document.body.innerHTML="<h1>You have "+count+" chances left</h1>";
  
    count--;
    alert("you have "+count+" chances left.");
}

if(flag){
    document.body.innerHTML="<h1>The Number was : "+x+"</h1><br><h1>Congratulations You Guessed it Correct</h1>";
}
if(count<=0){
    document.body.innerHTML="<h1>The Number was : "+x+"</h1><br><h1>Sorry! You Failed</h1>";
}




