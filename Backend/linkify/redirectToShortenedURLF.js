

const ShortenedUrlSchema = require("./Schemas/ShortenedUrlSchema.js");


module.exports = (app) => {
    // The :shurlID parameter is the database reference for the full url;
    app.get("/lf/:shurlID", (req, res) => {
        if (req.params.shurlID != undefined && req.params.shurlID != null && req.params.shurlID.length > 0)
        ShortenedUrlSchema.findOne({s: req.params.shurlID}).then(dbRes => {
            if (dbRes != null) {
                res.redirect(302, dbRes.t);
            } else res.send("<h1>URL not found.</h1>");
        // Error accessing the database;
        }).catch(err => {
            console.log(err);
            res.json({validity: false, cause: "Internal server error."});
        })
    });
};