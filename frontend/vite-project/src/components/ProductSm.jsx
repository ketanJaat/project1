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
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { PiArrowSquareRightDuotone } from "react-icons/pi";


const ProductSm = () => {


    // const {id} = useParams();
    // const allProduct = useSelector((state) => state.product.products);

    // const product = allProduct.filter((p) => p._id === id)[0];


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

    const [serachTerm , setSearchTerm] = useState('');

    const filterData = products.filter(
        (product) => product.brand.toLowerCase()
        .includes('d')
    );

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


    const [rightSwipe1 , setRightSwipe1] = useState(0);

    // const handleRightSwipe = () => {
    //     setRightSwipe(!rightSwipe);
    // }


    const handleRightSwipe1 = () => {
        console.log('right clicked')
        setRightSwipe1((prevSwipe) => (prevSwipe < 900 ? prevSwipe + 300 : 0));
        console.log(rightSwipe1)
    }

    const handleLeftSwipe1 = () => {
        console.log('left clickeds')
        setRightSwipe1((prevSwipe) => (prevSwipe > 0 ? prevSwipe - 300 : 0));
        console.log(rightSwipe1)
    }


  return (
    <div className='overflow-x-hidden'>
        <div className='flex gap-2 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-y-2 border-black'>{/* browse all category bar */}
            <div className='flex items-center gap-1 flex-wrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <div className='flex items-center gap-1'>
                    <CiHome />
                    <a href='/'>Home</a>
                </div>
                <div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='flex items-baseline'>
                    <a href='/shop'>shop</a>
                </div>
                <div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='flex items-center'>
                    <a href='/protein/all'>Proteins</a>
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

        <div className='flex flex-col bg-black'>
            <div className='h-screen  flex flex-col '>
                <div className='bg-gray-600 h-3/5 w-full px-10' >
                    <img className='h-full' src={product?.imageUrl1}/>
                </div>
                <div className='flex items-center bg-gradient-to-b from-black via-gray-800 to-black w-4/5 place-content-between'>
                    <MdKeyboardArrowLeft />
                    <div className='flex gap-2 p-1'>
                        <img className='h-20' src={product?.imageUrl1}/>
                        <img className='h-20'  src={product?.imageUrl1}/>
                        <img className='h-20'  src={product?.imageUrl1}/>
                    </div>
                    <MdKeyboardArrowRight/>
                </div>
            </div>
            <div className='-mt-36 bg-black text-white flex flex-col gap-16 p-10'>
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
                    <select className='w-1/2 text-black'>
                        <option value='Double Chocolate Cookie'>{product?.flavour}</option>
                    </select>
                    <p>Size</p>
                    <div>{product?.weight}</div>
                    {/* <div className='flex gap-6'>
                        <div className='flex bg-gray-500 items-center gap-3'>
                            <FaMinus />
                            <p>1</p>
                            <FaPlus />
                        </div>
                    </div> */}
                    <div onClick={addToCart} className='flex items-center gap-2'>
                        <FaCartPlus/>
                        <p>ADD TO CART</p>
                    </div>
                    
                </div>
                <div className='-mt-8'>
                    Share this product
                </div>
            </div>
        </div>

        <div className='bg-black -mt-14 text-white pl-10 w- pt-16 flex flex-col gap-12'>
            <div className='flex gap-4'>
                <div>Description</div>
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
                <table className='border-2 border-white w-5/6'>
                    <caption className='border-2 border-white'>General Traits</caption>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Weight In Lbs.	</td>
                        <td >{product?.weight}</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Weight In kg</td>
                        <td>{product?.weight}</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Number of Servings	</td>
                        <td>{product?.serving}</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Serving Size		</td>
                        <td>{product?.servingSize}</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Vegetarian/Non-Vegetarian	</td>
                        <td>{product?.vegetarian}</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Flavour	</td>
                        <td>{product?.flavour}</td>
                    </tr>
                </table>
                <table className='border-2 border-white w-5/6'>
                    <caption className='border-2 border-white'>Additional Information</caption>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Country of Origin	</td>
                        <td>{product?.country}</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Brand Origin	</td>
                        <td>{product?.brand}</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Form</td>
                        <td>Powder</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Packaging</td>
                        <td>{product?.packaging}</td>
                    </tr>
                    <tr>
                        <td className='border-2 border-white'>Goal	</td>
                        <td>{product?.goal}</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Protein	</td>
                        <td>30g</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Exp Date		</td>
                        <td>{product?.expdate}</td>
                    </tr>
                </table>
                <table className='border-2 border-white w-5/6'>
                    <caption className='border-2 border-white'>Special Traits</caption>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>LifeStyle	</td>
                        <td>{product?.lifestage}</td>
                    </tr>
                    <tr className='border-2 border-white'>
                        <td className='border-2 border-white'>Gender	</td>
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

        <div className='h-screen w-screen bg-gradient-to-b from-black via-gray-800 to-black flex flex-col items-center -mb-24 gap-10'>    
            <div className='text-white mt-12 -ml-48 text-xl'>Related Products</div>
            <div className='flex w-5/6 rounded-xl place-content-between items-center px-1 h-1/2 bg-gradient-to-b from-black via-gray-800 to-black'>
                <button onClick={handleLeftSwipe1} className='group'>
                <PiArrowSquareLeftDuotone className='text-3xl text-gray-950 '/>
                </button>
                <div className=' w-5/6 h-[300px] overflow-hidden items-center gap-3 group-hover:translate-x-[200px] relative rounded-xl bg-gradient-to-b from-gray-700 via-gray-400 to-zinc-700 grid grid-flow-col px-2'>
                    {
                        filterData.length > 0 && 
                        filterData.map(
                            (products) => {
                                return(
                                    <div className='bg-gray-800 rounded-2xl min-w-64 h-[280px] flex flex-col place-content-evenly px-2 transform transition-transform duration-300' 
                                        style={{transform: `translateX(-${rightSwipe1}px)`}}
                                        key={products?._id}>
                                        <div className='bg-gray-700 text-white rounded-lg -mt-3 -ml-2 pl-1 w-2/5'>
                                            {products.saving}% off
                                        </div>
                                        <a href={`/product/${products?.id}`} className='h-3/5 bg-black'>
                                            <img className='h-full w-full' src={products.imageUrl1}/>
                                        </a>
                                        <div className='text-gray-200'>
                                            {products.brand}
                                        </div>
                                        <a className='text-gray-200 hover:text-gray-400' href={`/product/${products?.id}`}>
                                            {products.name}
                                        </a>
                                        <div className='flex place-content-between'>
                                            <div className='text-gray-200'>
                                                {products.price}
                                            </div>
                                            <div>
                                                <div className='flex items-center gap-2 text-gray-200'>
                                                    <FaCartPlus className='text-xl'/>
                                                    <p className='text-gray-200'>Cart</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                    
                </div>

                <PiArrowSquareRightDuotone onClick={handleRightSwipe1} className='text-gray-950 text-3xl group'/>
            </div>
        </div>

        <div className='flex bg-black text-white gap-6 pb-16 flex-col justify-center items-center'>
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

        <footer className='flex bg-black text-white place-content-between p-8 border-y-2 border-black'>
            <div className='text-base'>
                <p className='text-gray-600'>Copyright © 2024, supplementsvilla.com</p>
            </div>
            
        </footer>
    </div>
    
  )
}

export default ProductSm