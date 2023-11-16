let email = document.getElementById("email");
let pass = document.getElementById("pass");
let val2 = JSON.parse(localStorage.getItem("data")) || {};


let loginvalue = function(){
    if (val2.email === email.value && val2.password === pass.value ){
        alert("Namaste! \n Login Succesfull")
        // let auth = 1;
        // localStorage.setItem("verify",auth)

        window.location.href="home.html"
    }
    else{
        auth = 5;
        localStorage.setItem("verify",auth)

        alert("Namaste! \n Invalid input please enter a valid details ")
    }

    // if data["email"] = email.value 

}