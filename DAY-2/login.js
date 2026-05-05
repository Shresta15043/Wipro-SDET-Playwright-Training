const auth=()=>{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "password"){
        alert("Authentication Successfull!");
        window.location.href = "login.html";
    }else{
        alert("Invalid username and password");
    }

}