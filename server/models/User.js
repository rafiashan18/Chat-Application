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
   

},{
    timestamps:true,//created at and when updated
})

const User = mongoose.model("User",UserSchema);

module.exports=User;


