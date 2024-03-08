// JavaScript source code

document.getElementById("createBt").onclick = function () {

    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var sub = '.com';
    var sub2 = '@';
    if (email == "" || pass == "" || name == "") {
	 event.preventDefault();
        window.alert("you should enter all the fields");
    }
    else if (validatePass(pass) && email.includes(sub) && email.includes(sub2)) {
        event.preventDefault();
        newPage();

    }
    else if (!(email.includes(sub) && email.includes(sub2))) { 
 event.preventDefault();
        window.alert("enter a valid email");

        
    }
    else if (!(validatePass(pass))) { 
	 event.preventDefault();
        window.alert("password should contain letters and numbers");
    }
    
}
function newPage() {
    window.location.href = 'Home.html';

}
function validatePass(pass) {
    return /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(pass);
}