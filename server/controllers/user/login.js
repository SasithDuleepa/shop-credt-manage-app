const DB = require('../../config/dataBase')

const LogIn =async (req,res) => {
    const {userName,Password} = req.body;
    console.log(req.body)

        DB.connection.query(`SELECT * from user WHERE user_name = '${userName}'`, (err,result)=>{
            if(result){

                if(result.length > 0){
                    //user found

                    if(result[0].user_password === Password){
                        //password matched
                        res.status(200).json({message:"Login success" , user:result[0]})
                    }else{
                        //password wrong
                        res.status(401).json({message:"wrong password"})
                    }
                }else{
                    //no user
                    res.status(404).json({message:'No user found'})

                }
            }else{
                console.log(err)
                res.status(500).json({message: 'Login Failed'})
            }
        });




};

module.exports = LogIn;