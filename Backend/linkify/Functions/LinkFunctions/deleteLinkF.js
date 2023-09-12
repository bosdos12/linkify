

// Schema Imports
const ShortenedUrlSchema = require("../../Schemas/ShortenedUrlSchema.js");


module.exports = deleteLinkF = (reqBody) => {
    return new Promise((resolve, reject) => {
        ShortenedUrlSchema.findOne({s: reqBody.linkShurlID}).then(dbRes => {
            if (() => dbRes != null ? true : false) {
                if (dbRes.o == reqBody.username) {

                    // All authentications done.
                    // Deleting the shortend URL.
                    dbRes.remove()

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

