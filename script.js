

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

function popup(msg, id) {
    let pop = document.getElementById(id);
    pop.innerText = msg;
    pop.style.display = "block";
    setTimeout(()=>{
        pop.style.display = "none";
    },3000);
};

document.getElementById("log").addEventListener("submit",function(event){
    event.preventDefault();

    const inputs = this.querySelectorAll("input[required]");
    for (let input of inputs){
        if(!input.value){
            alert(`Please fill ${input.name}`);
            input.focus();
            return;
        }
    }
    popup("Log-In Successfully........","logpop");
    setTimeout(()=>{
        window.location.href = "home.html";
    },1500);
})

document.getElementById("sign").addEventListener("submit",function(event){
    event.preventDefault();

    const inputs = this.querySelectorAll("input[required]");
    for (let input of inputs){
        if(!input.value){
            alert(`Please fill ${input.name}`);
            input.focus();
            return;
        }
    }

    popup("Sign-In Successfully........","signpop");
    setTimeout(()=>{
        window.location.href = "home.html";
    },1500);
})
