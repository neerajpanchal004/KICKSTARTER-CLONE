let email = document.getElementById("email");
let pass = document.getElementById("pass");
let signup = document.getElementsByClassName("sign-up-btn");


// login.addEventlistener("click","inputvalue");

let inputvalue = function(){
    // console.log(pass.value);
    let obj ={};
    obj["email"] = email.value;
    obj["password"] = pass.value;
    alert("Namaste! \n Sign-Up Successful")
    window.location.href="login.html"

    // console.log(obj)

    localStorage.setItem("data",JSON.stringify(obj));
};