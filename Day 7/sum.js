var sum=0;

alert("This will Print the total Sum");
alert("Enter any Negative number to Stop");
while(true){
    var a=Number(prompt("Enter the Number to be guessed:"));
    if(a<0){
        break;
    }
    sum+=a;
}

    document.body.innerHTML="<h1 style=color:white>The Sum is : "+sum+"</h1>";





