// import { message ,display,Employee} from './newFile.js';
// import ImportantMsg from './newFile.js';
// console.log(message);
// let name=prompt("Enter your name: ")
// bundle 200 files ka data ek file me convert kar dega
// console.log(display(name));
// let emp1=new Employee("Avneet",1001,"Galti");
// console.log(emp1.dispDetails());
// in ES5 we use require to import the file
const lib=require("./newFile.js");
console.log(lib.add(5,10));