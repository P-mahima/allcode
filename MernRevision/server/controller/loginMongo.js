const user = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretkey = 'pdsjfsjkdhsdglaj'
const saltround = 10

const Registeruser = async (req, res) => {
    const RData = req.body
    const {name, email, password} = RData
    const userData = await user.findOne({email:email})

    if(userData){
        return res.send({msg:'User is already registered'})
    }
    else{
        const salt = bcrypt.genSaltSync(saltround)
        const hashpassword = bcrypt.hashSync(password,  salt)
        const token = await jwt.sign({email: email} , secretkey , {expiresIn:"7d"})

        const temponj = await user({
            name:name,
            email:email,
            password:hashpassword
        })


        const result = await temponj.save()

        return res.send({
            msg:"User registered sucessfully",
            token:token,
            name:name,
            email:email,
            result:result

        })
    }
}


const LoginUset =async(req, res) => {
    const logData= req.body
    const {email, password} = logData

    const userData = await user.findOne({email:email})

    if(userData){
        const hashpassword= userData.password
        const validate = bcrypt.compareSync(password, hashpassword)
        const token = jwt.sign({email:email}, secretkey, {expiresIn:"7d"})

        if(validate){
            return res.send({
                msg:"User login sucessfully",
                token:token,
                userData:userData
            })
        }else{
            return res.send({
                msg:"Ibvalide Crendential"
            })
        }
    }

    if(!userData){
        return res.send({
            msg:"User is not registerd"
        })
    }




}

module.exports = {
    Registeruser,LoginUset
}