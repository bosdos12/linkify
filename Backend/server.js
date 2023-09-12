const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

// Setting the public folder
app.use(express.static('Public'));

// Json;
app.use(express.json());

// Cross origin resource sharing
const cors = require("cors");
app.use(cors());

// EJS
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './views'));


const PORT = process.env.PORT || 80;
const SERVERIP = "192.168.1.34";
const DBURI = "YOUR MONGODB URL";


mongoose.connect(DBURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(ConnectedToServerRES => {
    // Hosting the server
    app.listen(PORT, () => console.log(`[SERVER RUNNING ON PORT: ${PORT}]`));
}).catch(err => {
    console.log(err);
});

///////////////////////////////////////////////////////////////////////////////////
// Linkify

require("./linkify/redirectToShortenedURLF.js")(app);
require("./linkify/generateQrCodeRequest.js")(app);
require("./linkify/getAllAccountLinksF.js")(app);
require("./linkify/login.js")(app);
require("./linkify/signup.js")(app);
require("./linkify/addNewLinkF.js")(app);
require("./linkify/editLinkRequestF.js")(app);
require("./linkify/deleteLinkRequest.js")(app);
require("./linkify/redirectToShortenedURLF.js")(app);
