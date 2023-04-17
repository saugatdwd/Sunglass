function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
  }

function validateForm(){
    var fullname = document.getElementById("fname").value;
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var confirmPassword = document.getElementById("passwordAgain").value;
    var birthday = document.getElementById("birthday").value;
    var mySwitch = document.getElementById("flexSwitchCheckDefault");


    if(fullname==""){
        alert("Please enter your fullname");
        return false;
}
    if(email==""){
    alert("Please enter your email");
    return false;
    }

    if(!validateEmail(email)){
        alert("Please enter a valid email address");
        return false;
    }

    if(phoneNumber==""){
        alert("Please enter your phone number");
        return false;
}

    if(password==""){
        alert("Please enter your password");
        return false;
    }

    if(!validatePassword(password)){
        alert("Password must be at least 8 characters long");
        return false;
    }

    if(password!=confirmPassword){
        alert("Passwords do not match");
        return false;
    }

    if(birthday==""){
        alert("Please enter your birth date");
        return false;
    }

    if (!mySwitch.checked) {
        alert("Please agree to the terms and conditions");
        return false;
      }


    return true;
}




function validateFormForLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email==""){
        alert("Please enter your email");
        return false;
    }
    if(password==""){
        alert("Please enter your password");
        return false;
    }
    if(!validateEmail(email)){
        alert("Please enter a valid email address");
        return false;
    }
    if(!validatePassword(password)){
        alert("Password must be at least 8 characters long");
        return false;
    }
    return true;
}