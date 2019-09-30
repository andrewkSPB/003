const Joi = require('joi')

module.exports = {

    validateCreateSchema(body){
        const Schema = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
        return Joi.validate(body, Schema)
            
    },
    validateLoginSchema(body){
        const Schema = Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
        return Joi.validate(body, Schema)
            
    },
    

}