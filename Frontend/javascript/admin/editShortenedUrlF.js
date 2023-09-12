


// Edits the Shortened URL;
const editShortenedUrlF = (linkShurlID) => {

    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    let newLink = document.getElementById(`shurlinput_${linkShurlID}`).value;

    fetch("https://www.dicards.co/lf/editl", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            linkShurlID: linkShurlID,
            newLink: newLink
        })
    }).then(_raw_response => _raw_response.json()).then(_json_response => {
        if (!_json_response.validity) {
            alert(_json_response.cause);
        };
    }).catch(err => {
        console.log(err);
        alert("Network connectivity issues.");
    })

};


