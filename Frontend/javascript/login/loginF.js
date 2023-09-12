



const loginButtonClickF = () => {
    // Fetching the entered values;
    let username = document.getElementById("usernameentry").value;
    let password = document.getElementById("passwordentry").value;

    // Running a simple client side authentication;
    userCredentialsInputControlF(username, password, false).then(() => {
        loginRequestF(username, password);
    }).catch(() => null);
};



