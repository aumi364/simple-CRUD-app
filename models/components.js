var mongoose = require('mongoose');

var componentSchema = new mongoose.Schema({
    name: String,
    pieces: String,
    image:String,
    description:String,
    links:String,
    created: {
        type: Date,
        default: Date.now
    }
});

var Component = mongoose.model('Components', componentSchema);
module.exports = Component;