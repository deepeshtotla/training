// //bundle of files is known as module
// //dusari js ke code ko apne code me laane ke liye modules ka use karte hai
// //JavaScript modules rely on the import and export statements.
// //it works on the basis of import and export

// // file1.js 
// export let name="Yukti Choudhary";
// export function hello(){
//     console.log("Hello");
// }
// export class user{

// }
// //file2.js
// import {name} from './file1.js';
// import {hello} from './file1.js';
// import {user} from './file1.js';

//jis bhi data ko hum sharable banana chahate hai uske aage export keyword laga do
let message="This is module concept";
let display=(name)=>{
    return `${name}, Welcome to Ingenuity Gaming!!`;
}
class Employee{
    constructor(name,id,designation){
        this.name=name;
        this.id=id;
        this.designation=designation;
    }
    dispDetails(){
        console.log(`Employee Name: ${this.name}\n Employee Id: ${this.id}\n Employee Designation: ${this.designation}`);
    }
}

// package manager is used to import liabraries in the file
function add(a,b){
    return a+b;
}
module.export={add};
export {message,display,Employee}