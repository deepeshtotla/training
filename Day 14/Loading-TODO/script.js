window.onload= function(){ 
    console.log("Hello World");
    setInterval(stopLoader,3000);    
    }
    function stopLoader()
    {
        console.log("Hello World");
    document.querySelector(".container").style.display="none";
    document.querySelector(".todoContainer").style.display="block";
    }

var inp=document.querySelector('.todo-input');
var btn=document.querySelector('button');
var list=document.querySelector('.todo-list');
var out=window.localStorage.getItem("data");
var d=[];
var i=0;
if(out==""||out==null)
{
    alert("No Work To Be Done");
}
else
{
d=out.split(',');
while(i<d.length){
    var newdiv=document.createElement("div");
    newdiv.classList.add('tododiv');
    var newli=document.createElement("li");
    newli.classList.add('tododiv_item');
    newli.innerHTML=d[i];
    newdiv.appendChild(newli);
    var checkbtn=document.createElement("button");
    checkbtn.classList.add('tododiv_check');
    checkbtn.innerHTML='<i class="fa fa-check"></i>';
    newdiv.appendChild(checkbtn);
    var endbtn=document.createElement("button");
    endbtn.classList.add('tododiv_end');
    endbtn.innerHTML='<i class="fa fa-trash"></i>';
    newdiv.appendChild(endbtn);
    list.appendChild(newdiv);
    i++;
};
}
btn.onclick = function crtodo(e){
    e.preventDefault();
    if(inp.value.length>0){
    d.push(inp.value);
    window.localStorage.setItem("data",d);
    var newdiv=document.createElement("div");
    newdiv.classList.add('tododiv');

    var newli=document.createElement("li");
    newli.classList.add('tododiv_item');
    newli.innerHTML=inp.value;
    newdiv.appendChild(newli);
    var checkbtn=document.createElement("button");
    checkbtn.classList.add('tododiv_check');
    checkbtn.innerHTML='<i class="fa fa-check"></i>';
    newdiv.appendChild(checkbtn);
    var endbtn=document.createElement("button");
    endbtn.classList.add('tododiv_end');
    endbtn.innerHTML='<i class="fa fa-trash"></i>';
    newdiv.appendChild(endbtn);
    list.appendChild(newdiv);
    inp.value= "";
    }
    else{alert("Mantatory Input Field")}
}
list.onclick =function checkbtn(e){
    var check =e.target;
        if(check.classList[0]=="tododiv_end")
        {
            var parentnode=check.parentElement;
            var data=d.indexOf(parentnode.innerText);
            d.splice(data,1);
            window.localStorage.setItem("data",d);
            parentnode.remove();
        }
        if(check.classList[0]=="tododiv_check")
        {
            var parentnode=check.parentElement;
            parentnode.classList.add("done");
        }
}


/*var inp=document.querySelector('.todo-input');
var btn=document.querySelector('button');
var list=document.querySelector('.todo-list');
btn.onclick = function crtodo(e){
    e.preventDefault();
    if(inp.value.length>0){
    var newdiv=document.createElement("div");
    newdiv.classList.add('tododiv');

    var newli=document.createElement("li");
    newli.classList.add('tododiv_item');
    newli.innerHTML=inp.value;
    newdiv.appendChild(newli);

    var checkbtn=document.createElement("button");
    checkbtn.classList.add('tododiv_check');
    checkbtn.innerHTML='<i class="fa fa-check"></i>';
    newdiv.appendChild(checkbtn);

    var endbtn=document.createElement("button");
    endbtn.classList.add('tododiv_end');
    endbtn.innerHTML='<i class="fa fa-trash"></i>';
    newdiv.appendChild(endbtn);
    list.appendChild(newdiv);
    inp.value= "";
    }
    else{alert("Mantatory Input Field")}
}
list.onclick =function checkbtn(e){
    var check =e.target;
        if(check.classList[0]=="tododiv_end")
        {
            var parentnode=check.parentElement;
            parentnode.remove();
        }
        if(check.classList[0]=="tododiv_check")
        {
            var parentnode=check.parentElement;
            parentnode.classList.add("done");
        }
}*/