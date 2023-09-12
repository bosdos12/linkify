

const userCredentialsInputControlF = (username, password, confirmationpassword=false) => {
    return new Promise((resolve, reject) => {
        if (username.length > 0) {
            if (password.length > 0) {
                // Return a function, which returns true if confirmation password is false,
                // and IF confirmation password is true, returns the length/match status of the confirmation password.
                // Written to act as a diferential of processes depending on which function calls this function.
                if (() => confirmationpassword == false ? true : confirmationpassword.length > 0) {
                    if (() => confirmationpassword == false ? true : confirmationpassword == password) {
                        resolve();
                    } else document.getElementById("confirmationpasswordmessage").innerHTML = "The password and the confirmation passwords arent matching.";
                } else document.getElementById("confirmationpasswordmessage").innerHTML = "Please enter a confirmation password.";
            } else document.getElementById("passwordmessage").innerHTML = "Please enter a password.";
        } else document.getElementById("usernamemessage").innerHTML = "Please enter a username.";
        reject();
    });
};