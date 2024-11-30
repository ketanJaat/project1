import React, { useEffect, useState } from 'react'
import { CiHome } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import proteinDabba from '../assets/proteinDabba.png'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import logo from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';



const ProductLg = () => {

    const dispatch = useDispatch();


    const {id} = useParams();

    const [products , setProducts] = useState([]);


    useEffect(() => {

      const fetchProducts = async() => {
            try{
                const response = await axios.get('http://localhost:4000/api/v1/getproducts');
                setProducts(response.data.product);
            }
            catch(error){
                console.log('error occured during fetching products')
                console.error(error.message);
            }
        };

        fetchProducts();
      
    }, []); 

    const product = products.filter((p) => p.id === id)[0];


    const [allCartItem , setAllCartItem] = useState([]);


    useEffect(() => {

      const fetchProducts = async() => {
            try{
                const response = await axios.get('http://localhost:4000/api/v1/getcart');
                setAllCartItem(response.data.product);
            }
            catch(error){
                console.log('error occured during fetching products')
                console.error(error.message.products);
            }
        };

        fetchProducts();
      
    }, []);    


    const addToCart = async() => {
        try{
            const res = await axios.post('http://localhost:4000/api/v1/createCart' , {
            name : product?.name,
            saving : product?.saving,
            price : product?.price,
            serving : product?.serving,
            weight: product?.weight,
            servingSize : product?.servingSize,
            vegetarian : product?.vegetarian,
            flavour : product?.flavour,
            country : product?.country,
            brand : product?.brand,
            packaging : product?.packaging,
            goal : product?.goal,
            expdate : product?.expdate,
            lifestage : product?.lifestage,
            gender : product?.gender,
            description : product?.description,
            ingredients : product?.ingredients,
            directionforuse : product?.directionforuse,
            id : Date.now().toString(36),
            createdAt : new Date().toLocaleString()
            })
  
            console.log('responese is : ' , res.data);
        }
        catch(error){
            console.error(error.message);
        }
    }

    
  return (
    <div className='overlfow-x-hidden'>
        <div className='flex gap-10 p-6 border-y-2 border-black'>{/* browse all category bar */}
            <div className='flex items-center gap-6'>
                <div className='flex items-baseline'>
                    <CiHome />
                    <p>Home</p>
                </div>
                <div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='flex items-baseline'>
                    <p>shop</p>
                </div>
                <div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='flex items-center'>
                    <p>Proteins</p>
                </div>
                <div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='flex items-center'>
                    <p>Whey protein</p>               
                </div>
                <div>
                    <MdKeyboardArrowRight />
                </div>
                <p>Proteins name</p>
            </div>
        </div>

        <div className='flex flex-col'>
            <div className='h-screen bg-yellow-400 flex flex-col justify-center items-start'>
                <div className='bg-green-500 h-4/5 w-full p-10' >
                    <img className='h-full' src={proteinDabba}/>
                </div>
                <div className='flex items-center bg-purple-400 w-4/5 place-content-between'>
                    <MdKeyboardArrowLeft />
                    <div className='flex'>
                        <img className='h-20' src={proteinDabba}/>
                        <img className='h-20'  src={proteinDabba}/>
                        <img className='h-20'  src={proteinDabba}/>
                    </div>
                    <MdKeyboardArrowRight/>
                </div>
            </div>
            <div className='h-screen bg-orange-600 flex flex-col gap-16 p-10'>
                <div className='flex flex-col gap-5'>
                    <p>{product?.name}</p>
                    <p>by {product?.country}</p>
                    <div className='flex gap-4'>
                        <div className='flex gap-2 items-center'>
                            <div className='flex'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='flex items-center'>
                                <p>4</p>
                                <IoIosArrowDown />
                            </div>
                            
                        </div>

                        <p>(3 Rating & Reviews)</p>
                        
                    </div>
                    <div className='flex gap-4'>
                        <p>{product?.price}</p>
                        <p className=''>₹ 9,299.00</p>
                    </div>
                    <p>flavour</p>
                    <select className='w-1/2'>
                        <option value='Double Chocolate Cookie'>{product?.flavour}</option>
                    </select>
                    <p>Size</p>
                    <div>{product?.weight}</div>
                    <div className='flex gap-6'>
                        <div className='flex bg-gray-500 items-center gap-3'>
                            <FaMinus />
                            <p>1</p>
                            <FaPlus />
                        </div>
                        <div onClick={addToCart} className='flex items-center gap-2'>
                            <FaCartPlus/>
                            <p>ADD TO CART</p>
                        </div>
                        <div>
                            QUICK BUY
                        </div>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-3 '>
                    <div className='flex gap-2 bg-yellow-500 w-2/5 place-content-between p-2'>
                        <input className='p-2 rounded-lg' placeholder='enter pincode'/>
                        <div className='rounded-full bg-green-600 p-1'>check</div>
                    </div>
                    <div>
                        enter pincode for exact delivery time/charges
                    </div>
                </div>
                <div>
                    Share this product
                </div>
            </div>
        </div>

        <div className='pl-36 w-5/6 pt-16 flex flex-col gap-12'>
            <div className='flex gap-4'>
                <div>Description</div>
                <div>Videos</div>
                <div>Reviews</div>
            </div>
            <div>
                <div className='flex items-center gap-4'>
                    <FaTruck />
                    <p>Importer : </p>
                </div>
                <div>
                    {product?.brand} (✓ Brand Authorized)
                </div>
            </div>
            <div className='flex flex-col gap-7'>
                <table className='border-2 border-black'>
                    <caption className='border-2 border-black'>General Traits</caption>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Weight In Lbs.	</td>
                        <td >{product?.weight}</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Weight In kg</td>
                        <td>{product?.weight}</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Number of Servings	</td>
                        <td>{product?.serving}</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Serving Size		</td>
                        <td>{product?.servingSize}</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Vegetarian/Non-Vegetarian	</td>
                        <td>{product?.vegetarian}</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Flavour	</td>
                        <td>{product?.flavour}</td>
                    </tr>
                </table>
                <table className='border-2 border-black '>
                    <caption className='border-2 border-black'>Additional Information</caption>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Country of Origin	</td>
                        <td>{product?.country}</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Brand Origin	</td>
                        <td>{product?.brand}</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Form</td>
                        <td>Powder</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Packaging</td>
                        <td>{product?.packaging}</td>
                    </tr>
                    <tr>
                        <td className='border-2 border-black'>Goal	</td>
                        <td>{product?.goal}</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Protein	</td>
                        <td>30g</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Exp Date		</td>
                        <td>{product?.expdate}</td>
                    </tr>
                </table>
                <table className='border-2 border-black'>
                    <caption className='border-2 border-black'>Special Traits</caption>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>LifeStyle	</td>
                        <td>{product?.lifestage}</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='border-2 border-black'>Gender	</td>
                        <td>{product?.gender}</td>
                    </tr>
                </table>
            </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        Description
                    </div>
                    <div>
                        {product?.description}                   
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        Ingredients:
                    </div>
                    <div>
                        {product?.ingredients}
                    </div>
                </div> 
                <div className='flex flex-col gap-4'>
                    <div>
                        Direction for use:
                    </div>
                    <div>
                        {product?.directionforuse}  
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        Warnings:
                    </div>
                    <div>
                        KEEP OUT OF REACH OF CHILDREN. Must be 18 years of age or older to purchase and/or use this product. Before taking PRO-ANTIUM
                    </div>
                </div>
        </div>

        <div className='h-screen bg-orange-400 flex items-center justify-center'>
            <div className='w-5/6 h-5/6 bg-green-600 grid grid-cols-4 p-2 gap-2'>
                <div className='bg-gray-500'> dfsa</div>
                <div className='bg-gray-500'>dssdf</div>
                <div className='bg-gray-500'>asdf</div>
                <div className='bg-gray-500'>asdf</div>
            </div>
        </div>

        <div className='flex gap-6 pb-16 flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-7 w-2/3 px-10'>
                <div>
                    <img src={logo}/>
                </div>
                <p>Address: Supplements Villa
                        Shop No 611,Near PNB Bank, Railway Rd, Palwal, Haryana 121102
                        India (CH)
                </p>
                <p>Call Us:+91 9034763277</p>
                <p>Email:info@supplementsvilla.com</p>
            </div>
            <div className='flex gap-28 ml-20 mr-20'>
                <div className='flex flex-col gap-8'>
                    <div className='text-2xl'>Company</div>
                    <div className='flex flex-col gap-4 text-gray-600'>
                        <div>About us</div>
                        <div>contact us</div>
                        <div>shipping policy</div>
                        <div>privacy policy</div>
                        <div>terms and conditions</div>
                        <div>gallery</div>
                        <div>video Gallery</div>
                        <div>our outlets</div>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='text-2xl'>Brand</div>
                    <div className='flex flex-col gap-4 text-gray-600'>
                        <div>About us</div>
                        <div>contact us</div>
                        <div>shipping policy</div>
                        <div>privacy policy</div>
                        <div>terms and conditions</div>
                        <div>gallery</div>
                        <div>video Gallery</div>
                        <div>our outlets</div>
                        <div>our outlets</div>
                    </div>
                </div>
            </div>
            <div className='flex gap-28 ml-20 mr-20'>
                <div className='flex flex-col gap-8'>
                    <div className='text-2xl'>Category</div>
                    <div className='flex flex-col gap-4 text-gray-600'>
                        <div>About us</div>
                        <div>contact us</div>
                        <div>shipping policy</div>
                        <div>privacy policy</div>
                        <div>terms and conditions</div>
                        <div>gallery</div>
                        <div>video Gallery</div>
                        <div>our outlets</div>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='text-2xl'>popular</div>
                    <div className='flex flex-col gap-4 text-gray-600'>
                        <div>About us</div>
                        <div>contact us</div>
                        <div>shipping policy</div>
                        <div>privacy policy</div>
                        <div>terms and conditions</div>
                        <div>gallery</div>
                        <div>video Gallery</div>
                        <div>our outlets</div>
                    </div>
                </div>
            </div>
        </div>

        <footer className='flex place-content-between p-8 border-y-2 border-black'>
            <div className='text-base'>
                <p className='text-gray-600'>Copyright © 2024, supplementsvilla.com</p>
            </div>
            
        </footer>
    </div>
    
  )
}

export default ProductLg