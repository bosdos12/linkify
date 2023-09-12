



const signupf = () => {
    // Fetching the entered values;
    let username = document.getElementById("usernameentry").value;
    let password = document.getElementById("passwordentry").value;
    let confirmationpassword = document.getElementById("confirmationpasswordentry").value;

    // Clearing the error messages.
    document.getElementById("usernamemessage").innerHTML = "";
    document.getElementById("passwordmessage").innerHTML = "";
    document.getElementById("confirmationpasswordmessage").innerHTML = "";


    // Running a simple client side authentication;
    userCredentialsInputControlF(username, password, confirmationpassword).then(() => {
        fetch('http://192.168.0.160/lf/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            confirmationpassword: confirmationpassword
        })
    }).then(_raw_response => _raw_response.json()).then(_json_response => {
        console.log(_json_response);
        if (_json_response.validity) {
            // Signup Successfull.
            alert("Signup Successfull!");
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            document.location.href = "./admin.html";
        } else {
            alert(_json_response.cause);
        }
    }).catch(err => {
        console.log(err);
        alert("Network connectivity issues!");
    });
    }).catch(() => null);
};



