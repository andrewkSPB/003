import { Post } from './post'
import { Comment } from './comment'
export class User {
    _id: String
    local: {
        name?:String,
        email?: String,
        password?: String,
    }
    google: {
        name?: String,
        email?:String,
    }
    posts: Post[]
    comments: Comment[]
}