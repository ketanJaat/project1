const Product = require('../models/allProduct');
const cloudinary = require('cloudinary');

function isFileSupported(type , supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file , folder , quality){
    const options = {
        folder: folder,
        resource_type: "auto"
    };

    try{
        console.log('temp file path' , file.tempFilePath);
        console.log("upload options : " , options);

        if(quality){
            options.quality = quality;
        }

        return await cloudinary.uploader.upload(file.tempFilePath , options);
    }
    catch(error){
        console.error('error uploading to cloudinary' , error);
    }
    
}

const createProduct = async(req, res) => {
    try{

        console.log('i am here');

        const {name , saving , price , serving , weight , servingSize , 
        vegetarian , flavour , country , brand , packaging , goal , expdate ,
        lifestage , gender , description , ingredients , directionforuse , id , createdAt} = req.body;

        console.log('sab aa gya')

        const file1 = req.files.img1;
        const file2 = req.files.img2;
        const file3 = req.files.img3;

        //validation of image file
        const supportedTypes = ['jpeg' , 'jpg' , 'png'];
        const fileType1 = file1.name.split('.')[1].toLowerCase();
        const fileType2 = file2.name.split('.')[1].toLowerCase();
        const fileType3 = file3.name.split('.')[1].toLowerCase();
        console.log('file type :' , fileType1);
        console.log('file type :' , fileType2);
        console.log('file type :' , fileType3);

        if(!isFileSupported(fileType1 , supportedTypes)){
            return res.status(400).json({
                success : false,
                message : 'file format not supported'
            })
        }
        if(!isFileSupported(fileType2 , supportedTypes)){
            return res.status(400).json({
                success : false,
                message : 'file format not supported'
            })
        }
        if(!isFileSupported(fileType3 , supportedTypes)){
            return res.status(400).json({
                success : false,
                message : 'file format not supported'
            })
        }

        //file format supported
        console.log('uploading to cloudinary');
        const response1 = await uploadFileToCloudinary(file1 , "Ketan");
        const response2 = await uploadFileToCloudinary(file2 , "Ketan");
        const response3 = await uploadFileToCloudinary(file3 , "Ketan");
        console.log(response1);
        
        console.log(response2);
        console.log(response3);


        const product = new Product({
            name , saving , price , serving , weight , servingSize , 
            vegetarian , flavour , country , brand , packaging , goal , expdate ,
            lifestage , gender , description , ingredients , id , directionforuse , imageUrl1 : response1.secure_url,
            imageUrl2 : response2.secure_url , imageUrl3 : response3.secure_url, createdAt
        });
        
        console.log( 'product is => ' , product);
        console.log('image url is : ' , response1.secure_url)

        const savedProduct = await product.save();

        console.log('product saved successfully');

        res.json({
            product : savedProduct ,
        });
    }
    catch(error){
        return res.status(400).json({
            error : 'error white creating product'
        });
    }
}

const getAllProducts = async(req , res) => {
    try{
        const product = await Product.find();

        res.json({
            product
        })
    }
    catch(error){
        return res.status(400).json({
            error : "error while fetching post"
        })
    }
}

const deleteProduct = async(req, res) => {
    try{
        const {id} = req.body;
        await Product.findByIdAndDelete(id);

        //send json response with success flag
        res.status(200).json(
            {
                success:true,
                message:"entry successfully deleted"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data:'internal server error', 
            message:err.message
        })
    }
}

module.exports = {createproduct : createProduct , getallproducts : getAllProducts , deleteproduct : deleteProduct};