const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: "Name is required"
    },
    email:{
        type:String,
        trim: true,
        required: "Email is required",
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 7,
        max: 20
    },
    stripe_account_id:"",
    stripe_seller: {},
    stripeSession: {},

}, {timestamps: true})

//hash password
userSchema.pre("save", function(next){
    let user = this;

    if(user.isModified("password")){
        return bcrypt.hash(user.password, 12, function(err, hash){
            if(err){
                console.log(`BCRYPT HASH ERROR`, err)
                return next(err)
            }
            user.password = hash;
            return next()
        })
    }else {
        return next();
    }
})

userSchema.methods.comparePassword= function(password, next){
    bcrypt.compare(password, this.password, function(err, match){
        if(err){
            console.log("COMPARE PASSWORD ERR", err)
            return next(err, false)
        }
        console.log("MATCH PASSWORD", match)
        return next(null, match)
    })
}

export default mongoose.model("User", userSchema)