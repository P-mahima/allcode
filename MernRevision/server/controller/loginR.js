const arr =[]
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltround = 10
const secretkey = 'djfhsdkfjdnfkadf'

const register = (req , res) => {
    const details = req.body

    const find = arr.find((item) => details.email === item.email)
    if(find){
        return res.send({msg:'mail is already used'})
    }

    const hashpassword = bcrypt.hashSync(details.password , saltround)
    console.log(hashpassword)

    const data = {
        name : details.name,
        email : details.email,
        password : hashpassword
    }
    arr.push(data)

    const token = jwt.sign({email:details.email} , secretkey , {expiresIn:'1d'})
    res.send({msg:'user registerd sucessfully', result:data , token: token})
}

const login = (req, res) => {
    const details = req.body

    const find = arr.find((item) => details.email === item.email)
    if(!find){
        return res.send({msg: 'user is not registered'})
    }

    const password = bcrypt.compare(details.password , find.password)
    if(!password){
        return res.send({msg:'password is wrong'})
    }


    const token = jwt.sign({email:'details.email'} , secretkey, {expiresIn:'1d'})
    res.send({msg:'user login successfully', token:token})
}


module.exports = {register, login}