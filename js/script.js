let x=document.querySelector('.d_view');

x.addEventListener('click',(e)=>{
    console.log("Name------>",e.target.closest('tr').querySelector('td:nth-child(2)').innerHTML)
})

let f1=(e)=>{
    console.log("e-------->",e.closest('tr').querySelector('td:nth-child(3)').innerHTML);
}

let f2=(e)=>{
    console.log("XR------------>",e.closest('tr').querySelector("td:nth-child(2)").innerHTML);
}

let modl=document.querySelector('.d_mdl').innerHTML;
let name=document.querySelector("input[name='name']");
let edit=()=>{
   document.write("modl------>",modl);
    console.log("NAme---->",name);
}

function delt(){
    confirm();
}