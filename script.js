let enter=document.getElementById("enter");
function sendalert() {
    
    alert("verification link sent to you");
}
enter.addEventListener("click",sendalert);

let btn=document.getElementById("buttonblood");
let joinbtn=document.getElementById("clickjoin");
let form=document.getElementById("form");
let newform=document.getElementById("newform");
function display(event) {
    form.style.display="block";
}
joinbtn.addEventListener("click",display);

let closebtn = document.getElementById("closebtn");
function close() {
    form.style.display="none"; 
}
closebtn.addEventListener("click",close);

let submitdet=document.getElementById("submitdet");
function popmsg() {
    alert("details submitted!");
}
submitdet.addEventListener("click",popmsg);
let bform=document.getElementById("form");
function changeForm() {
    form.setAttribute("id","form");
}
