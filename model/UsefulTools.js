const mongoose = require("mongoose");

var toolsSchema = new mongoose.Schema({
        title: { type: String, required: true },
        link: { type: String, required: true },
        description: { type: String, required: true },
        tags: [String],
});

let UsefulTools = mongoose.model("UsefulTools", toolsSchema);
module.exports = UsefulTools;
