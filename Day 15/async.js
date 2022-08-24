//js is script language(function based)

//javascript code is directly executed by javascript engine

//In JavaScript function are first class citizens as- 
//a)function can be use as an argument
//b)function can be assigned to a variable
//c)can also used as return statement


console.log("Statement 1");

var r=0;
for(var i=0;i<10000000;i++)r+=i;
console.log(r);


console.log("Statement 2");

// statement 2 has to wait until loop gets completed
//1- setTimeout - is an asynchronus it makes to run the code in background.

console.log("Statement 1");

setTimeout(()=>{
    var r=0;
    for(var i=0;i<10000000;i++)r+=i;
    console.log(r);
})
console.log("Statement 2");

//2-caalback
//a- function can be used as an arguments
//b- a caalack is a function that is executed after another function has finished executing hence the call back
//c- calling a function inside any other function is also called as callback
var students=[
    {name:"Sachin",subject:"Java"},
    {name:"Ram",subject:"C++"},
    {name:"Shyam",subject:"JS"}
]
//asynchronus to synchronus
function addStudent(student,callback)
{
    setTimeout(()=>{
         students.push(student);
         console.log("Added");
    },3000);
    callback();
}

function displayStudent()
{
    setTimeout(()=>{
        var str="";
        student.forEach((student) => {
            str += student.name +" ";
        });
        console.log(str);
        console.log("Displayed");
    },1000);
}

var newStudent = {name:"Raja",subject:"C"};
addStudent(newStudent,displayStudent);
// displyStudent();
