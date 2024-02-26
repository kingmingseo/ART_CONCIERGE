const { Schema } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        //소셜 로그인 넣을 경우에는 false
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    userAddress: {
        type: String,
        required: false,
    },
    //관리자 여부
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {
    collection: "users"
});

module.exports = userSchema;