
// Schema Imports
const LinkifyShortenedUrlLogSchema = require("./Schemas/LinkifyShortenedUrlLogSchema.js");
const ShortenedUrlSchema = require("./Schemas/ShortenedUrlSchema.js");



// Function Imports
const basicUserCredentialsValidation = require("./Functions/basicUserCredentialsValidation.js");
const validateNewLinkData = require("./Functions/validateNewLinkData.js");
const userDBAuthenticationF = require("./Functions/userDBAuthentication.js");





module.exports = (app) => {
    // Data to receive in the request body;
    // 1. username
    // 2. password
    // 3. newLink
    app.post("/lf/addl", (req, res) => {
        console.log("BRUHH!!????")
        basicUserCredentialsValidation(req.body).then(() => {

            // Authenticating that the account exists on the database,
            // and entered password is correct;
            userDBAuthenticationF(req.body).then(() => {
                validateNewLinkData(req.body).then(() => {

                    // All authentications successfull,
                    // adding the new link to the database;
                    // t = target url; s = shortened url;
                    // Shortened URL is defined by the index of the ever-created shortened URL's;
                    // After every creation, the Shortened URL index identifier just gets incremented by one;
                    LinkifyShortenedUrlLogSchema.findOne({accessID: "ab12ba21"}).then(shurlLogDbRes => {
    
                        // Saving the new shortened URL in a different schema;
                        // All the future references will be done by the .o (owner) property
                        // with the username of the user. SO DAMN SPECIFIC! :D
                        let newShurlSchema = new ShortenedUrlSchema();
                        newShurlSchema.t = req.body.newLink;
                        newShurlSchema.s = shurlLogDbRes.currentValue;
                        newShurlSchema.o = req.body.username;
                        newShurlSchema.save();
    
                        // Incrementig and saving the current value of the shurlLogDbRes index;
                        shurlLogDbRes.currentValue++;
                        shurlLogDbRes.markModified("currentValue");
                        shurlLogDbRes.save();
    
                        // Everything successfull, sending a succsessfull status response back;
                        // Sending the shortened url "current value" back with the response;
                        res.json({validity: true, shurl: shurlLogDbRes.currentValue});
                        
    
                    }).catch(err => {
                        console.log(err);
                        res.json({validity: false, cause: "Internal server error."});
                    });
    
                }).catch(cause => res.json({validity: false, cause: cause}));
            }).catch(cause => res.json({validity: false, cause: cause}));
        }).catch(cause => res.json({validity: false, cause: cause}));
    });
};

