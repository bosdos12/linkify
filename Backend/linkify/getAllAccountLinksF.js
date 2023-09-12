
// Schema imports
const ShortenedUrlSchema = require("./Schemas/ShortenedUrlSchema.js");

module.exports = (app) => {
    // The function which loads all of the links of the user on the admin screen.
    app.get("/lf/alllinks/:username", (req, res) => {
        // Basic Validation
        if (req.params.username != null && req.params.username != null && req.params.username.length > 0) {
            ShortenedUrlSchema.find({o: req.params.username}).then(dbRes => {

                console.log(dbRes);
                res.json({validity: true, links: dbRes});

            }).catch(err => {
                // Error accessing the database;
                console.log(err);
                res.json({validity: false, cause: "Internal server error"});
            })
        } else res.json({validity: false, cause: "Please enter the name of the account"});
    });
};