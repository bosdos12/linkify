const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// t = target URL; s = shortened URL; o = owner account;
const ShortenedUrlSchema_PreModel = new Schema({
    t: {
        type: String,
        required: false
    },
    s: {
        type: String,
        required: false
    },
    o: {
        type: String,
        required: false
    }
});


const ShortenedUrlSchema = mongoose.model("ShortenedUrlSchema", ShortenedUrlSchema_PreModel);
module.exports = ShortenedUrlSchema;
 
 
 
 
 