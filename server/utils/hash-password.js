const bcrypt = require('bcrypt')
const saltRounds = 10;

const hashedPassword = async (plainPassword)=>{
    return await bcrypt.hash(plainPassword,saltRounds);
}

const comparePassword = async(plainText,hashed)=>{
    return await bcrypt.compare(plainText,hashed);
}

module.exports={
    hashedPassword,
    comparePassword,
    
}