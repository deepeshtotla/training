const person = 
{
    firstName:"", 
    Age:"", 
    Address:"", 
    City:"",
    State:"",
    Pincode:"",
    Hobbies:"",
    pr: function() {
        return "Name : "+ this.firstName + "\n" + "<br><br>Age : " + this.Age+ "\n" + "<br><br>Address : " +this.Address+ "\n" + "<br><br>City : "+this.City+ "\n" + "<br><br>State : " +this.State+ "\n" + "<br><br>Pincode : "+this.Pincode+ "\n" + "<br><br>Hobbies : "+this.Hobbies; 
    }

    };
person.firstName=prompt("Enter Name :");
person.Age=prompt("Enter Age");
person.Address=prompt("Enter Address :");
person.City=prompt("Enter City :");
person.State=prompt("Enter State :");
person.Pincode=prompt("Enter Pincode :");
person.Hobbies=prompt("Enter Hobbies:");
document.write('<h1 style="text-align:center; color:chocolate;">'+person.pr()+'</h1>')