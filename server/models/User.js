const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    profilePicture:{
        type:String,
        default:"https://res.cloudinary.com/dab8gj2ho/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1749346196/user_nrh6e1.png"
    }
   

},{
    timestamps:true,//created at and when updated
})

const User = mongoose.model("User",UserSchema);

module.exports=User;


