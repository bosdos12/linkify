

// Schema Imports
const ShortenedUrlSchema = require("../../Schemas/ShortenedUrlSchema.js");


module.exports = (reqBody) => {
    return new Promise((resolve, reject) => {
        ShortenedUrlSchema.findOne({s: reqBody.linkShurlID}).then(dbRes => {
            console.log(dbRes);
            if (dbRes != null) {
                if (dbRes.o == reqBody.username) {
                
                    // All authentications done.
                    // Editing the shortend URL.
                    dbRes.t = reqBody.newLink;
                    dbRes.markModified("t");
                    dbRes.save();

                    // Save successfull.
                    resolve();
                    
                } else reject("You don't have access to this URL.");
            } else reject("Invalid request. Please send the Shortened Link ID.");
        }).catch(err => {
            console.log(err);
            reject("Internal server error.");
        });
    });
};

