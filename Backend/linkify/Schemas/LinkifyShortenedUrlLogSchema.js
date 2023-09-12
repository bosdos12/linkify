const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
 
const LinkifyShortenedUrlLogSchema_PreModel = new Schema({
    accessID: {
        type: String,
        required: false
    },
    currentValue: {
        type: Number,
        required: false
    }
});


const LinkifyShortenedUrlLogSchema = mongoose.model("LinkifyShortenedUrlLog", LinkifyShortenedUrlLogSchema_PreModel);
module.exports = LinkifyShortenedUrlLogSchema;
 
 
 
 
 