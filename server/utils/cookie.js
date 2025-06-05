const setTokenCookie = (res,token) => {
res.cookie('token',token,{
    httpOnly:true,
    secure:process.env.Node_ENV !== 'development',
    sameSite:'Strict',
    maxAge:3600000
})
}

module.exports=setTokenCookie