const mongoose = require('mongoose');

// -username - string
// -email - email
// -phoneNumber - mobile number
// -password - string # for now untill encrypted
// -firstName - string
// -lastName - string
// -age - number
// -birthDate - date
// -gender -['male','female']
// -accountType ['admin','patient','doctor','organization']
// -conversations -array of strings
// -_id - is
// -history - array of strings
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
          validator: function(v) {
            return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
          },
          message: props => `${props.value} is not a valid email!`
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    age: {
        type: Number,
        required: false,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']    
    },
    accountType: {
        type: String,
        required: true,
        enum: ['admin', 'patient', 'doctor', 'organization'],
    },
    conversations: {
        type: [String],
        required: false,
    },
    history: {
        type: [String],
        required: false,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
