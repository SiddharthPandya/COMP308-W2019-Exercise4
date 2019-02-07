let mongoose = require('mongoose');

let thingsSchema = mongoose.Schema({
    name: String,
    description: String
},
{
    collection: "favouriteThings"
});

module.exports = mongoose.model('SiddharthPandya',thingsSchema);