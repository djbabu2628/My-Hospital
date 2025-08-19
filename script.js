

function xpage () {

    let logForm = document.getElementById("log"), signForm = document.getElementById("sign");

    if(!signForm.hasAttribute("hidden")){
        signForm.setAttribute("hidden",true);
        logForm.removeAttribute("hidden");
    }else {
        logForm.setAttribute("hidden",true);
        signForm.removeAttribute("hidden");
        
    }

};

function log(){
document.getElementById("log").addEventListener("submit",function(e){
    e.preventDefault();
    const inputs = this.querySelectorAll("input[required]");

    for(let input of inputs){
        if (!input.value){
            alert(`Please fill ${input.name}`);
            input.focus();
            return;
        }
    }
    alert("Log-In Successfully.......");

});
};

function sign(){
document.getElementById("sign").addEventListener("submit",function(e){
    e.preventDefault();
    const inputs = this.querySelectorAll("input[required]");

    for(let input of inputs){
        if (!input.value){
            alert(`Please fill ${input.name}`);
            input.focus();
            return;
        }
    }
alert("Account Create Successfully.......");

});
};

log();
sign();


let email = document.getElementById("I-username");
email.type = "email";
email.setAttribute("required");