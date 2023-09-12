

const addNewLinkF = () => {

    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    fetch("https://www.dicards.co/lf/addl", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            newLink: ""
        })
    }).then(_raw_response => _raw_response.json()).then(_json_response => {
        if (_json_response.validity) {
            window.location.reload();
        } else {
            alert(_json_response.cause);
        };
    }).catch(err => {
        console.log(err);
        alert("Network connectivity issues.");
    })

};





