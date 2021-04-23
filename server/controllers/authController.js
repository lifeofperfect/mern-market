// export const showMessage=(req, res)=> {
//     res.status(200).send(`Here is your message ${req.params.message}`)
// };
import User from "../models/user";
const jwt = require("jsonwebtoken")

export const register = async (req, res)=> {
    console.log(req.body)
    const {name,password, email} = req.body

    //validation
    if(!name)
        return res
            .status(400)
            .send("Name is required")
    if(!password || password.length < 7)
        return res
            .status(400)
            .send('Email is required and must ne more than 7 characte3rs')

    let userExists = await User.findOne({email}).exec()
    if(userExists)
        return res
            .status(400)
            .send("Email exists")

    const user = new User(req.body)
    console.log('created')

    try{
        await user.save()
        
        console.log(`user created`, user)
        return res.json({ok: true})
    }catch(err){
        console.log(`USER CREATION FAILED`, err)
        return res
            .status(400)
            .send(`Error try again`)
    }
}


export const login = async (req, res)=> {
    //console.log(req.body);
    const {email, password} = req.body;

    try{

        let user = await User.findOne({email}).exec();
        console.log("User exists", user)
        if(!user)
            res.status(400)
            .send("USER WITH EMAIL   NOT FOUND")

        user.comparePassword(password, (err, match)=> {
            if(!match || err){
                return res
                    .status(400)
                    .send("Wrong Password")
            }

            let token  = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
                expiresIn: "7d"
            });

            res.json({
                token, 
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            })
        })

    }catch(err){
        console.log("Login error",err)
        res.status(400).send("Signin failed")
    }
}