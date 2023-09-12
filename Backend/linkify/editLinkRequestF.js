



// Function Imports
const basicUserCredentialsValidation = require("./Functions/basicUserCredentialsValidation.js");
const userDBAuthenticationF = require("./Functions/userDBAuthentication.js");
const validateNewLinkData = require("./Functions/validateNewLinkData.js");
const editLinkF = require("./Functions/LinkFunctions/editLinkF.js");



module.exports = (app) => {
    // Data to receive in the request body;
    // 1. username
    // 2. password
    // 3. newLink
    // 4. linkShurlID
    app.post("/lf/editl", (req, res) => {
        // Basic validation of account credentials.
        console.log("1");
        basicUserCredentialsValidation(req.body).then(() => {
            console.log("2");
            userDBAuthenticationF(req.body).then(() => {
                console.log("3");
                validateNewLinkData(req.body).then(() => {
                    console.log("4");
                    editLinkF(req.body).then(() => {
                        console.log("5");
                        res.json({validity: true});
                    }).catch(cause => res.json({validity: false, cause: cause}));
                }).catch(cause => res.json({validity: false, cause: cause}));
            }).catch(cause => res.json({validity: false, cause: cause}));
        }).catch(cause => res.json({validity: false, cause: cause}));
    });
};