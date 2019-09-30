const User = require('./user.model')
const validate = require('./user.service')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

module.exports = {
    async createUser(req,res){
        try{
            await validate.validateCreateSchema(req.body)
            .then((data)=>{
                bcrypt.hash(data.password, 10)
                    .then(hash=>{
                        const user = new User()
                        user.local.name = data.name
                        user.local.email = data.email
                        user.local.password = hash
                        user.save()
                        return res.send(user)
                    })
                    .catch(err=>{
                        return res.send('Oops.. user not created')
                    })
            })
            .catch((err)=>{
                return res.json({err})
            })
        }catch(err){
            return res.status(500).json({err})
        }
    },
    async loginUser(req,res){
        try{
            validate.validateLoginSchema(req.body)
                .then(data=>{
                    User.findOne({'local.email':data.email})
                    .then(user=>{
                        bcrypt.compare(data.password, user.local.password, (err,isMatched)=>{
                            if(isMatched){
                                const payload = {
                                    id:user._id,
                                    name: user.local.name
                                }
                                const token = jwt.sign(payload, keys.jwtSecret,{
                                    expiresIn: '1d'
                                })
                                return res.json({token})
                            }else{
                                return res.send('wrong password')
                            }
                        })
                    })
                    .catch(err=>{
                        return res.json({err:'user not found'})
                    })
                })
                .catch(err=>{
                    return res.json({err})
                })
        }catch(err){
            return res.status(500).json({err})
        }
    }
}