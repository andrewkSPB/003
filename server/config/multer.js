const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
const multer = require('multer')
const keys = require('./keys')

aws.config.update({
    secretAccessKey: keys.aws.secretAccessKey,
    accessKeyId: keys.aws.accessKeyId,
    region: keys.aws.region
})

const s3 = new aws.S3()

const filter = (req,file,cb)=>{
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' ){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const upload = multer({
    storage: multerS3({
        s3:s3,
        
        bucket: keys.aws.bucket,
        acl: keys.aws.acl,
        key: function(req,file,cb){
            console.log(file)
            cb(null, Date.now().toString())
        }
    }), fileFilter: filter}).single('inputName')


module.exports = upload


