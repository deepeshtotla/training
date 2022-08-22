var inp=document.querySelector('.todo-input');
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
}