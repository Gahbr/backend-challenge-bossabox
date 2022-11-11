const mongoose = require("mongoose");

var AdminSchema = new mongoose.Schema({
        username: { type: String, required: true, unique:true},
        password: { type: String, required: true },
});

let Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
