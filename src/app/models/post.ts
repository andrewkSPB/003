import {Comment} from './comment'

export class Post {
    _id: String
    imgCDN?:String
    text?:String
    user:String
    comments?:Array<Comment>
}

// "comments": [],
//     "_id": "5d911ce3a39e5213cc133fa9",
//     "imgCDN": "imagelink",
//     "text": "posttext",
//     "user": "userid",