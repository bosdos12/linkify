

// Schema Imports
const LinkifyUserSchema = require("./Schemas/LinkifyUserSchema.js");


// Function Imports
const basicUserCredentialsValidation = require("./Functions/basicUserCredentialsValidation.js");



// Login Request;
module.exports = (app) => {
    app.post("/lf/login", (req, res) => {
        console.log(req.body);

        // Running a basic data validation;
        basicUserCredentialsValidation(req.body).then(() => {
            
            // Database validation;
            LinkifyUserSchema.findOne({username: req.body.username}).then(dbRes => {
                if (dbRes != null) {
                    
                    // Checking if the passwords are matching;
                    if (dbRes.password == req.body.password) {
                        
                    }



                    res.json({validity: true});
                // The entered username doesn't exist.
                } else res.json({validity: false, cause: "The entered username doesn't exist."})
            }).catch(err => {
                // Error accessing the database. Read the logs.
                console.log(err);
            });
            // "Validity" boolean used for post-request state control,
            // and "cause" is the code for the display message the user receives.
        }).catch(() => res.json({validity: false, cause: "Invalid parameters sent."}));
    });
};