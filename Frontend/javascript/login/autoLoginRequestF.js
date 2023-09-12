

const autoLoginRequestF = (username, password, admin=false) => {
    fetch('https://www.dicards.co/lf/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(_raw_response => _raw_response.json()).then(_json_response => {
        console.log(_json_response);
        console.log(1);
        if (_json_response.validity) {
            console.log(2);
            // Login Successfull.
            if (!admin) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                document.location.href = "./admin.html";
            };
        };
    }).catch(err => {
        console.log(err);
        alert("Network connectivity issues!");
    });
};
