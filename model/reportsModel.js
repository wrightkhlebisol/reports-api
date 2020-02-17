let mongoose = require("mongoose");
let Schema = mongoose.Schema;

reportsSchema = new Schema({
    // _id: ObjectId,
    userId: Number,
    postHead: String,
    postBody: String,
    postImages: [{
        name: String
    }],
    comments: [{
        body: String,
        // date: Date.now
    }],
    date: {
        type: Date,
        // default: Date.now
    }
});

exports.Reports = mongoose.model('Report', reportsSchema);