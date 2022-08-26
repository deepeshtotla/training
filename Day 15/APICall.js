//API - to bring data from server

//API call
//1- XHR - XML HTTP REQUEST
//2- fetch()
//3- Third Party Package (Axios)

//1- XHR
//API - JSONPLACEHOLDER - free fake api 

// const API_URL="";
// function getApiData(url)
// {
//     console.log("We are good to call API");
//     return new Promise((resolve,reject)=>{
//         //create an instance of XHR
//         var request = new XMLHttpRequest();

//         request.open("GET",url);
//         request.send();

//         request.onload = ()=>{
//             // console.log(request.response);
//             if(request.status === 200)// 200 say that it is correct no problem //if 404 means some problem
//             {
//                 resolve(request.response);
//             }
//             else{
//                 reject("Not able to fetch the Data");
//             }
//         }



//     })
// }

// getApiData(API_URL).then((val)=>displayData(JSON.parse(val))).catch((err)=>console.log("Error"+err));
// //JSON.parse()->it converts the data into array

// function displayData(serverData)
// {
//     for(var user of serverData)
//     {
//         let newtr = document.createElement('tr');

//         let newtd1 = document.createElement('td'); 
//         let newtd2 = document.createElement('td'); 
//         let newtd3 = document.createElement('td'); 
//         let newtd4 = document.createElement('td');
        
//         newtd1.innerText = "" + user.id;
// //template sync -$- variable
//         newtd2.innerText = "" +user.name;
//         newtd3.innerText = "" +user.email;
//         newtd4.innerText = "" +user.phone;

//         newtr.appendChild(newtd1);
//         newtr.appendChild(newtd2);
//         newtr.appendChild(newtd3);
//         newtr.appendChild(newtd4);

//         document.getElementById("myTable")

//     }
// }


//2-fetch()
//we dont need to create promise it automatically got created in fetch()
const API_URL="";
//function getApiData(url)
async function getApiData(url)
{
    console.log("Wea are good to call API");
    // var r = fetch(url);
    // console.log(r);
    
    // fetch(url)
    // .then((val)=>{return val.json()})
    // .then((res) => displayData(res))
    // .catch((err)=>console.log(err));//it returns promise

    //with async and await
    var data = await fetch(url);
    var result = await data.json();
    displayData(result);
}

getApiData(API_URL).then((val)=>displayData(JSON.parse(val))).catch((err)=>console.log("Error"+err));
//JSON.parse()->it converts the data into array

function displayData(serverData)
{
    for(var user of serverData)
    {
        let newtr = document.createElement('tr');

        let newtd1 = document.createElement('td'); 
        let newtd2 = document.createElement('td'); 
        let newtd3 = document.createElement('td'); 
        let newtd4 = document.createElement('td');
        
        newtd1.innerText = "" + user.id;
//template sync -$- variable
        newtd2.innerText = "" +user.name;
        newtd3.innerText = "" +user.email;
        newtd4.innerText = "" +user.phone;

        newtr.appendChild(newtd1);
        newtr.appendChild(newtd2);
        newtr.appendChild(newtd3);
        newtr.appendChild(newtd4);

        document.getElementById("myTable")

    }
}

