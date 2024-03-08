// JavaScript source code

document.getElementById("mybutton").onclick = function () {

    var email = document.getElementById("emailTextfield").value;
    var pass = document.getElementById("password").value;

    var sub = '.com';
    var sub2 = '@';
    if (email == "" || pass == "") {
        window.alert("you should enter all the fields");
    }
    else if (validatePass(pass) && email.includes(sub) && email.includes(sub2)) {
        event.preventDefault();
        newPage();

    }
    else if (!(email.includes(sub) && email.includes(sub2))) { 
        window.alert("enter a valid email");

        
    }
    else if (!(validatePass(pass))) { 
        window.alert("password should contain letters and numbers");
    }
    
}
function newPage() {
    window.location.href = 'Home.html';

}
function validatePass(pass) {
    return /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(pass);
}

