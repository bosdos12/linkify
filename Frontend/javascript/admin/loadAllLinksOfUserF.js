


// This function requests and renders all the links of the user on the admin screen;
const loadAllLinksOfUserF = () => {
    let username = localStorage.getItem("username");

    fetch(`https://www.dicards.co/lf/alllinks/${username}`).then(_raw_response => _raw_response.json()).then(_json_response => {
        if (_json_response.validity) {
            console.log(_json_response);
            console.log(_json_response.links);

            for (singleLink of _json_response.links.reverse()) {
                
                document.getElementById("mainContentsDiv").innerHTML += `
                    <div class="linksHolderDivs">
                        <div class="inputsHolderDiv">
                            <input placeholder="Full URL" type="text" class="urlEntryInput" value="${singleLink.t}" onfocusout="editShortenedUrlF(${singleLink.s})" id="shurlinput_${singleLink.s}">
                            <input placeholder="Shortened URL" type="text" class="urlEntryInput" readonly onclick="navigator.clipboard.writeText('https://www.dicards.co/lf/${singleLink.s}');alert('URL copied to clipboard!')" value="linkify/lf/${singleLink.s}" style="cursor: pointer;" title="copy to clipboard.">
            
                        </div>
                        <div class="buttonsHolderDiv">
                            <button class="button" style="margin: 0px; width: 44%;" onclick="deleteShortenedUrlF(${singleLink.s})">Delete</button>
                            <button class="button" style="margin: 0px; width: 44%; "onclick="window.location.href = 'https://www.dicards.co/lf/genqr/${singleLink.s}'">Copy QR</button>
                        </div>
                    </div>
                    <br>
                `;

            };

        } else alert(_json_response.cause);
    }).catch(err => {
        console.log(err);
        alert("Network connectivity issues.");
    })
}