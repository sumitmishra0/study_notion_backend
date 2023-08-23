const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description : {
        type: String,
    },
    course : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"Course",
    }
});

module.exports = mongoose.model("Tag" , tagSchema);