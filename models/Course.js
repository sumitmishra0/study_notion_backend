const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    courseName: {
        type: String,
    },
    courseDesciption: {
        type: String,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    whatWillYouLearn: {
        type: String,
    },
    courseContent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
    },
    ratingAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingAndReviews",
        }
    ],
    price: {
        type: Number,
    },
    thumbnail : {
        type: String,
    },
    tag : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
    },
    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref : "User",
        }
    ] 

});

module.exports = mongoose.model("Course" , courseSchema);