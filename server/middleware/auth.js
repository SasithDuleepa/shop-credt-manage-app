const Auth = (   req,   res,  next) =>{
    if(req){
        req.date= new Date().toISOString().slice(0, 19).replace('T', ' ');
        req.user= 'test_user'
        next();
    }else{
        res.status(401).json({msg: "Unauthorized"})
    }
    // check if the user is logged in


}
module.exports = Auth;
