const router = require('express').Router()
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
const multer = require('multer')

aws.config.update({
    secretAccessKey: 'la++8Xe9cFBQPAMSSfK60t/spctQmESWWr1ywwDx',
    accessKeyId: 'AKIAJEMTQUBPOYBHRRGA',
    region: "eu-central-1"
})

const s3 = new aws.S3()

const upload = multer({
    storage: multerS3({
        s3:s3,
        
        bucket: 'test-app-board-storage-aad',
        acl: 'public-read-write',
        key: function(req,file,cb){
            console.log(file)
            cb(null, Date.now().toString())
        }
    })
})




router.post('/post',upload.single('inputName') ,(req,res)=>{
    res.send(req.file.location)
})


module.exports = router


