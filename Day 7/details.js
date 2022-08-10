const person = 
{
    firstName:"", 
    Age:"", 
    Address:"", 
    Hobbies:"",
    pr: function() {
        return "Name : "+ this.firstName + "\t" + "<br><br>Age : " + this.Age+ "\t" + "<br><br>Address : " +this.Address+ "\t" + "<br><br>Hobbies : "+this.Hobbies;
    }

    };
person.firstName=prompt("Enter Name :");
person.Age=prompt("Enter Age");
person.Address=prompt("Enter Address :");
person.Hobbies=prompt("Enter Hobbies:");
document.write('<h1 style="text-align:center; color:chocolate;">'+person.pr()+'</h1>')