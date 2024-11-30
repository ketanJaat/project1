const bcrypt = require('bcrypt');
const User = require('../models/userSchem');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async(req, res) => {
    try{
        //get data
        const {name , email , password , role} = req.body;

        //check if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success : false ,
                message : 'user already exist'
            });
        }

        //secure password
        let hashedPassword ;
        try{
            hashedPassword = await bcrypt.hash(password , 10)
        }
        catch(error) {
            return res.status(500).json({
                success : false,
                message :  'password cannot be hashed'
            });
        }

        //create entry for user
        const user = await User.create({
            name , email , password : hashedPassword , role
        })

        return res.status(200).json({
            success : true ,
            message : 'user created successfully'
        })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success : false ,
            message : 'user cannot be registered , try again after some time'
        })
    }
}

exports.login = async(req, res) => {
    try{
        //data fetch
        const {email , password} = req.body;

        //validation
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'fill the detail properly'
            });
        }

        //check for registered user
        //is user ko const nahi banana vrna badi glti ho jayegi
        let user = await User.findOne({email});
        console.log(email , password)


        //if user not register
        if(!user){
            return res.status(401).json({
                success : false,
                message : "user not found"
            })
        }

        const paylaod = {
            email : user.email,
            id : user.id,
            role : user.role
        }

        //verify password and generate a jwt token
        if(await bcrypt.compare(password , user.password)){
            let token = jwt.sign(paylaod , process.env.JWT_SECRET , {
                expiresIn : '2h'
            })

            user = user.toObject();
            user.token = token ;
            user.password = undefined;

            const options = {
                expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly : true
            }

            // res.status(200).json({
            //     success : true,
            //     token , 
            //     user , 
            //     message : 'logged in successfully'
            // })

            res.cookie("token" , token , options).status(200).json({
                success : true,
                token ,
                user ,
                messsage : "logged in successfully"
            })
        }
        else{
            //password not matched
            return res.status(403).json({
                success : false,
                message : 'password does not matched'
            })
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false ,
            message : "login failed"
        })
    }
}