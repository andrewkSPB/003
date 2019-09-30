const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    local: {
        name: {
            type: String,
        },
        email:{
            type: String,
        },
        password:{
            type: String,
        }
    },
    google: {
        name:{
            type: String,
        },
        email:{
            type:String,
        }
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})


  

const User = mongoose.model('User', UserSchema, 'users')
module.exports = User