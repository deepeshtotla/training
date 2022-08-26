const API_URL = "https://api.covid19api.com/summary";
var out;
async function getApiData(url) {
    var data = await fetch(url);
    var res =  await data.json();
    out=res["Countries"];
    entry(out);
    printdata(out);    
}
getApiData(API_URL)
var cn=document.getElementById("cn");
var dt=document.getElementById("da");
var tc=document.getElementById("tc");
var td=document.getElementById("td");
var nc=document.getElementById("nc");
var nd=document.getElementById("nd");
function entry(res)
{
    for(var i=0;i<res.length;i++)
    {    
    var ne=document.createElement("option");
    ne.innerText=res[i].Country;
    cn.appendChild(ne);
    }
}
function printdata(res){
    for(var i=0;i<res.length;i++)
    {    
        var e = document.getElementById("cn");
        var text = e.options[e.selectedIndex].text;
        if(res[i].Country==text)
        {         
            console.log(text)
    d = new Date(res[i].Date);
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var final=day+"/"+month+"/"+year;
    dt.innerText=" "+final;
    tc.innerText=" "+res[i].TotalConfirmed;
    td.innerText=" "+res[i].TotalDeaths;
    nc.innerText=" "+res[i].NewConfirmed;
    nd.innerText=" "+res[i].NewDeaths;
    }
    }   
}
 cn.onclick= function(){
    var da=out;
    printdata(da);
 }
