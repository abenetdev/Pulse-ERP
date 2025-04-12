const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    image: {type: String, require: true},
    speciality: {type: String, require: true},
    education: {type: String, require: true},
    experience: {type: String, require: true},
    aboutDoctor: {type: String, require: true},
    available: {type: Boolean, default: true},
    fee: {type: Number, require: true},
    address: {type: Object, require: true},
    date: {type: Number, require: true},
    slots_booked: {type: Object, default: {}}
}, {minimize: false});

const Doctors = mongoose.models.doctors || mongoose.model('doctors', doctorSchema);

module.exports = Doctors