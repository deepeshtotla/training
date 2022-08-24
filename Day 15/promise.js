// Promise-
// 1- it is a way of communicating with API
// 2- It is an object that returns a value that hope to receive in future but not right now
// 3- promise is well suited for handling Asynchronus operations
// 4- promise has three states pending,fullfilled,rejected


function sayHii(){
    return new Promise((resolve,reject)=>{
        const err=false;

        if(!err){
            //call API here
            resolve("Ok");
        }
        else{
            reject("Not Ok");
        }
    })
}
console.log(sayHii());

sayHii().then((val)=>console.log(val)).catch((err)=>console.log(err));







