const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    rollNO: { type: String },
    name: { type: String },
    fatherName: { type: String },
    adharCardNo: { type: String },
    mobileNo: { type: String }

})
module.exports = mongoose.model('Student', StudentSchema)