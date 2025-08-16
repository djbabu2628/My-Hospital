function xpage () {

let hideform = document.getElementById("log"), hidesign = document.getElementById("sign");

if (hidesign.hidden){
    hideform.hidden = true;
    hidesign.hidden = false;
}
else{
    hideform.hidden = false;
    hidesign.hidden = true;
}   
}