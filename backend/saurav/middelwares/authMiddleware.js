const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.auth = (req, res ) => {
    try{

        //extract jwt token
        const token = req.body.token ||  req.cookie.token || req.header("Authorization").replace("Bearer ", "");
        
        console.log("token is : " , token)

        if(!token){
            return res.status(401).json({
                success : false,
                message : "token missing"
            })
        }

        //verify the token
        try{
            const decode = jwt.verify(token , process.env.JWT_SECRET);
            console.log(decode);

            req.user = decode;
        }
        catch(error){
            return res.status(401).json({
                success : false ,
                message: "token is invalid"
            });
        }

        console.log('token verified')

        res.status(200).json({
            success : true,
            message : "user authenticated"
        })
    }
    catch(error){
        return res.status(401).json({
            success : false ,
            message : "something went wrong while verifying the token"
        })
    }
}

exports.isCustomer = (req , res ) => {
    try{
        if(req.user.role !== "customer"){
            return res.status(401).json({
                success : false ,
                message : " this is protected routes only for customer"
            });
        }
        res.status(200).json({
            success : true,
            message : "welcome customer"
        })
    }
    catch(error){
        return res.status(401).json({
            success : false ,
            message : "user role is not matching"
        })
    }
}

exports.isAdmin = (req , res ) => {
    try{
        if(req.user.role !== "admin"){
            return res.status(401).json({
                success : false ,
                message : " this is protected routes only for admin"
            });
        }
        res.status(200).json({
            success : true,
            message : "welcome admin"
        })
    }
    catch(error){
        return res.status(401).json({
            success : false ,
            message : "user role is not matching"
        })
    }
}