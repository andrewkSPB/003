const Post = require('./post.model')

module.exports = {
    async createPost(req,res){
        try{
            const post = new Post(req.body)
            await post.save()
            return res.json({msg: 'post created'})
        }catch(err){
            return res.status(500).json({err})
        }
    },
    async cdnHandler(req,res){
        try{
            return res.send(req.file.location)
        }catch(err){
            return res.status(500).json({err})
        }
    },
    async getAll(req,res){
        try{
            const posts = await Post.find()
            return res.send(posts)
        }catch(err){
            return res.status(500).json({err})
        }
    }
}