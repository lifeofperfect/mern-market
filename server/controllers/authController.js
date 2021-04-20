// export const showMessage=(req, res)=> {
//     res.status(200).send(`Here is your message ${req.params.message}`)
// };
import User from "../models/user";

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