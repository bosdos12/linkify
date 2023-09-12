



const autoLoginF = (admin=false) => {
    // Fetching the saved values;
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if ((() => (username != undefined && username != null) ? username.length > 0 : false) && (() => (password != undefined && password != null) ? password.length > 0 : false)) {
        autoLoginRequestF(username, password, admin);
    } else {
        if (admin) {
            alert("Please login first.");
            document.location.href = "./";
        };
    };
};



