const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    imgCDN:{
        type:String
    },
    text:{
        type:String
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    user:{
        type: String
    }
})

const Post  = mongoose.model('Post', PostSchema)
module.exports = Post