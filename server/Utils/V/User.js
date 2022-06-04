import Joi from "joi";
export default function UserSchema(data){
  const  userSchema = Joi.object({
        email: Joi.string().email({minDomainSegments: 2}).messages({
            'string.minDomainSegments': `"email" được để trống`
        })
    })
    return userSchema.validate(data)
}