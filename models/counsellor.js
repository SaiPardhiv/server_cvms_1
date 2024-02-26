const mongoose = require('mongoose');

const CounselorSchema = mongoose.Schema({
    cid: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    studentid: {
        type: String,
        required: true,
        unique: true,
    }
});

const CounselorModel = mongoose.model("Counselor", CounselorSchema);

module.exports = CounselorModel;
