



// Function Imports
const basicUserCredentialsValidation = require("./Functions/basicUserCredentialsValidation.js");
const userDBAuthenticationF = require("./Functions/userDBAuthentication.js");
const deleteLinkF = require("./Functions/LinkFunctions/deleteLinkF.js");



module.exports = deleteLinkRequest = (app) => {
    // Data to receive in the request body;
    // 1. username
    // 2. password
    // 4. linkShurlID
    app.post("/lf/deletel", (req, res) => {
        // Basic validation of account credentials.
        basicUserCredentialsValidation(req.body).then(() => {
            userDBAuthenticationF(req.body).then(() => {
                deleteLinkF(req.body).then(() => {
                    res.json({validity: true});
                }).catch(cause => res.json({validity: false, cause: cause}));
            }).catch(cause => res.json({validity: false, cause: cause}));
        }).catch(cause => res.json({validity: false, cause: cause}));
    });
};