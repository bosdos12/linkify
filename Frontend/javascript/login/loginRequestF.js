

const loginRequestF = (username, password, admin=false) => {
    fetch('http://192.168.0.160/lf/login', {
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

        } else {
            console.log(3);
            if (!admin) {
                alert(_json_response.cause);
            } else {
                alert("Please login first.");
                document.location.href = "./";
            }
        }
    }).catch(err => {
        console.log(err);
        alert("Network connectivity issues!");
    });
};
