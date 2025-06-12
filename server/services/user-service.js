const User = require('../models/User')


const allUsers = (currentUserId) =>{
  const allUsers = User.find({_id:{$ne : currentUserId}}).select("-password");
return allUsers
}

module.exports = {
    allUsers
}