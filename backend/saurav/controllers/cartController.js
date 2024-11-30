const Product = require('../models/cartProduct');

const createCart = async(req, res) => {
    try{

        console.log('i am here');

        const {name , saving , price , serving , weight , servingSize , 
        vegetarian , flavour , country , brand , packaging , goal , expdate ,
        lifestage , gender , description , ingredients , directionforuse , id , imageUrl1 , imageUrl2 , imageUrl3 , createdAt} = req.body;

        const product = new Product({
            name , saving , price , serving , weight , servingSize , 
            vegetarian , flavour , country , brand , packaging , goal , expdate ,
            lifestage , gender , description , ingredients , directionforuse , id , imageUrl1, imageUrl2 , imageUrl3  , createdAt
        });
        
        console.log(product);

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

const getAllCartProducts = async(req , res) => {
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
                message:"entry successfully deleted from cart"
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

const deleteCart = async(req , res) => {
    try{
        await Product.deleteMany({});

        res.status(200).json({
            success : true,
            message : 'cart deleted successfully'
        })
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

module.exports = {createcart : createCart , getcart : getAllCartProducts , deletecartproduct : deleteProduct , deletecart : deleteCart};