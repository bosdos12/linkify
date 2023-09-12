

// Schema Imports
const LinkifyUserSchema = require("./Schemas/LinkifyUserSchema.js");

// Function Imports
const basicUserCredentialsValidation = require("./Functions/basicUserCredentialsValidation.js");


// Signup Request;
module.exports = (app) => {
    app.post("/lf/signup", (req, res) => {
        console.log(req.body);

        // Running a basic data validation;
        basicUserCredentialsValidation(req.body).then(() => {
            // Database validation;
            LinkifyUserSchema.findOne({username: req.body.username}).then(dbRes => {
                console.log(dbRes);
                if (dbRes == null) {
                    // Creating the new account.
                    let newAccount = new LinkifyUserSchema();
                    newAccount.username = req.body.username;
                    newAccount.password = req.body.password;
                    newAccount.save();

                    res.json({validity: true});

                } else {
                    // The entered username already exists.
                    res.json({validity: false, cause: "The entered username already exists."});
                }
            }).catch(err => {
                // Error accessing the database. Read the logs.
                console.log(err);
            });
            // "Validity" boolean used for post-request state control,
            // and "cause" is the code for the display message the user receives.
        }).catch(() => {
            res.json({validity: false, cause: "Invalid parameters sent."})
        });
    });
};