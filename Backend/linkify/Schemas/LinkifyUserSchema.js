const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
 
const LinkifyUser_PreModel = new Schema({
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
});


const LinkifyUserSchema = mongoose.model("linkifyuser", LinkifyUser_PreModel);
module.exports = LinkifyUserSchema;
 
 
 
 
 