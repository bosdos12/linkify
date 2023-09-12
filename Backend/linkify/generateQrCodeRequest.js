

// Module Imports
const QRCode = require("qrcode");
const fs = require("fs");


// Schema Imports
const ShortenedUrlSchema = require("./Schemas/ShortenedUrlSchema.js");


module.exports = (app) => {
    app.get("/lf/genqr/:id", (req, res) => {

        console.log(req.params.id);

        // Basic data validation;
        if (req.params.id != undefined && req.params.id != null) {
            ShortenedUrlSchema.findOne({s: req.params.id}).then(dbRes => {
                if (dbRes != null) {

                    // Here, you enter the domain of your own server;
                    // This library which I am using generates a base64 image
                    // data string from the shortened url;
                    QRCode.toDataURL(`https://www.dicards.co/lf/${dbRes.s}`, function (err, urlQrCode) {
                        
                        // Creating a buffer from the base64 image data string;
                        let a = urlQrCode;
                        let m = a.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
                        let qrCodeBuffer = Buffer.from(m[2],'base64');

                        // Saving the buffer to the file system,
                        // with the name set as the access id of the shortened url;
                        require("fs").writeFile(`Public/qrcodes/${dbRes.s}.png`, qrCodeBuffer, 'base64', function(err) {
                            console.log(err);
                        });

                        // Redirecting the user to the public file of the saved qr code.
                        res.redirect(302, `/qrcodes/${dbRes.s}.png`);

                        // IMPORTANT NOTE:
                        // The images are directly saved on the server since
                        // I use Heroku to host my servers, which has a Ephemeral file system.
                        // Every single file that isn't on the git repo (aka the code!)
                        // gets deleted when the dynos/server instances change/restart.
                    });


                } else res.json({validity: false, cause: "URL not found."});
            }).catch(err => {
                console.log(err);
                res.json({validity: false, cause: "Internal server error."});
            })
        } else res.json({validity: false, cause: "URL not found."});
    });
};