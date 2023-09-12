
// Schema Imports
const LinkifyUserSchema = require("../Schemas/LinkifyUserSchema.js");

module.exports = userDBAuthenticationF = (reqBody) => {
    return new Promise((resolve, reject) => {
        LinkifyUserSchema.findOne({username: reqBody.username}).then(dbRes => {
            if (dbRes != null) {
                if (dbRes.password == reqBody.password) {
                    
                    // Successfull authentication;
                    resolve();

                } else alert("The entered password is not valid!");
            } else reject("The entered username does not exist!");
        }).catch(err => {
            // Error accessing the database;
            console.log(err);
            reject("Internal server error.");
        });
    });
};