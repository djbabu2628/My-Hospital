

function xpage () {

    let logForm = document.getElementById("log"), signForm = document.getElementById("sign");

    if(!signForm.hasAttribute("hidden")){
        signForm.setAttribute("hidden",true);
        logForm.removeAttribute("hidden");
    }else {
        logForm.setAttribute("hidden",true);
        signForm.removeAttribute("hidden");
    }

}



document.getElementById("log-btn").addEventListener("click",()=>{
    alert("Login Successfully.....");
})

document.getElementById("sign-btn").addEventListener("click",()=>{
    alert("Account Create Successfully.....")
})

let fill = document.querySelector("input");
    if(!fill.value){
        alert("Please fill details");
        (!fill.value).focus();
        
    }
