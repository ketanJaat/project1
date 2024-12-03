import React, { useEffect, useState } from 'react'
import Navbar from '../NavbarSm'
import NavbarSm from '../NavbarSm'
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { PiArrowSquareRightDuotone } from "react-icons/pi";
import proteinDabba from '../../assets/proteinDabba.png'
import { FaArrowRight, FaFacebook, FaHome } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaCartPlus } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { IoIosLogOut } from "react-icons/io";
import NavbarFull from '../NavbarFull';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios';
import { MdDeleteOutline } from "react-icons/md";

const CartSm = () => {



  const [products , setAllCartItem] = useState([]);


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
      
    }, [products]);    

    const [serachTerm , setSearchTerm] = useState('');

    const filterData = products.filter(
        (product) => product.name.toLowerCase()
        .includes(serachTerm.toLowerCase())
    );


    const [isBrowseClick , setIsBrowseClick] = useState(false);

    const handleClick = () => {
        setIsBrowseClick(!isBrowseClick);
    }

   
    const [activeSection, setActiveSection] = useState(null); // Tracks the active section

    const handleSectionClick = (section) => {
        setActiveSection((prevSection) => (prevSection === section ? null : section)); // Toggle the same section or activate a new one
    };


    const [count , setCount] = useState(0);
    
    
    const handlePlusCount = (id) => {
        setCount((prevCounts) => ({
          ...prevCounts,
          [id]: (prevCounts[id] || 0) + 1,
        }));
      };
      
      const handleMinusCount = (id) => {
        setCount((prevCounts) => ({
          ...prevCounts,
          [id]: Math.max((prevCounts[id] || 0) - 1, 0), // Ensure count doesn't go below 0
        }));
      };

      const deleteProduct = async(products) => {
        try{
            console.log(products._id);
            const response = await axios.post('http://localhost:4000/api/v1/deletecartproduct' , {
                id : products._id
            })
        }
        catch(error){
            console.log('error occured during deleting product')
            console.error(error.message);
        }
    }

    const deleteCart = async() => {
        try{
            await axios.get('http://localhost:4000/api/v1/deletecart');
        }
        catch(error){
            console.log('error occured during deleting cart')
            console.error(error.message);
        }
    }




  return (
    <div className='bg-black text-white'>
      <NavbarSm/>


      <div className='flex gap-10 p-6 border-y-2 border-black'>{/* browse all category bar */}
            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-2'>
                    <FaHome/>
                    <p>Home</p>
                </div>
                <MdOutlineKeyboardArrowRight />
                <div className='flex items-baseline'>
                    <p>cart</p>
                </div> 
            </div>
      </div>



      <div className='p-6 flex gap-3 flex-col'>
            <div className='w-full flex flex-col gap-4'>
                <div className='text-4xl font-bold'>
                    Your Cart
                </div>
                <div className='flex place-content-between'>
                    <div>there is {products.length} product</div>
                    <button onClick={deleteCart}>clear cart</button>
                </div>
            </div>
            <div className='bg-gray-400  flex'>
                <div className='w-full bg-gray-600 relative'>
                     <div className='h-fit'>
                        {
                            filterData.length > 0 && 
                            filterData.map(
                                (products) => {
                                    return(
                                        <div className=' border-2 border-black flex flex-col' key={products?._id}>
                                            <div className=' bg-gray-600  flex m-auto items-center gap-3'>
                                                <img className='' src={products.imageUrl1}/>
                                            </div>
                                            <p className='flex justify-center p-2 w-full border-y-2 border-black'>{products.name}</p>
                                            <div className='px-10 p-2 flex gap- place-content-between border-y-2 border-black'>
                                                <div>
                                                  stock
                                                </div>
                                                <div className='flex gap-2 items-center justify-center'>
                                                    <CiCircleMinus onClick={() => handleMinusCount(products?._id)}/>
                                                    <div>{count[products?._id] || 0}</div>
                                                    <CiCirclePlus onClick={() => handlePlusCount(products?._id)}/>
                                                </div>
                                            </div>
                                            <div className='flex px-10 p-2 place-content-between border-y-2 border-black'>
                                                <div>price</div>
                                                <div>{products.price}</div>
                                            </div>
                                            <div className='flex px-10 p-2 place-content-between border-y-2 border-black'>
                                                <div>Remove</div>
                                                <div>
                                                    <MdDeleteOutline onClick={() => deleteProduct(products)} className='text-xl'/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }

                    </div>
                </div>
                {/*  total amount wala section ///////////////////// */}
                {/* <div className='w-1/3 bg-purple-600 h-44 flex flex-col justify-center items-center '>
                    <div className='flex'>
                        <div>total</div>
                        <div className='flex'> 
                            { filterData.length > 0 && 
                                filterData.map(
                                    (products) => {
                                        return(
                                            <div>{products.price}</div>
                                        )
                                    }
                                )}
                            </div>
                    </div>
                    <div className='flex gap-4'>
                        <button>proceed to checkout</button>
                        <IoIosLogOut />
                    </div>
                </div> */}
            </div>
            <a href='/shop' className='border-white border-2 w-fit p-3 rounded-xl bg-slate-800'>continue shopping</a>
        </div>

        <div className='flex gap-6 pb-16 flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-3 w-2/3 px-10'>
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
                <div className='flex flex-col gap-2'>
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
                <div className='flex flex-col gap-2'>
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
                <div className='flex flex-col gap-2'>
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
                <div className='flex flex-col gap-2'>
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

export default CartSm