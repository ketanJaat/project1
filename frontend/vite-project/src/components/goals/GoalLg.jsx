import React, { useEffect  } from 'react'
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { PiArrowSquareRightDuotone } from "react-icons/pi";
import proteinDabba from '../../assets/proteinDabba.png'
import blocks from '../../assets/block.jpg'
import poster from '../../assets/poster.png'
import poster2 from '../../assets/poster2.jpg'
import brand from '../../assets/brand.jpg'
import video from '../../assets/video.mp4'
import logo from '../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from 'axios'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Navbarlg from '../navbarlg';
import { FaHome } from 'react-icons/fa';
import { useParams } from 'react-router-dom';


const GoalLg = () => {

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
        (product) => product.goal.toLowerCase()
        .includes(id)
    );



  return (
    <div>
        <Navbarlg/>

        <div className='flex gap-10 p-6 border-y-2 border-black'>{/* browse all category bar */}
                <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-2'>
                        <FaHome/>
                        <p>Home</p>
                    </div>
                    <MdOutlineKeyboardArrowRight />
                    <div className='flex items-baseline'>
                        <p>shops</p>
                    </div> 
                    <MdOutlineKeyboardArrowRight />
                    <div className='flex items-baseline'>
                        <p>{id}</p>
                    </div> 
                </div>
            </div>
    
            <div className='grid grid-cols-3 grid-flow-row gap-4'>
            {
                                filterData.length > 0 && 
                                filterData.map(
                                    (products) => {
                                        return(
                                            <div className='bg-orange-500 border-2 border-black h-96 flex flex-col place-content-evenly px-2' key={products?._id}>
                                                <div className='h-3/5 bg-green-600'>
                                                    <img className='' src={proteinDabba}/>
                                                </div>
                                                <div>
                                                    {products.brand}
                                                </div>
                                                <a href={`/product/${products?._id}`}>
                                                    {products.name}
                                                </a>
                                                <div className='flex place-content-between'>
                                                    <div>
                                                        {products.price}
                                                    </div>
                                                    <div>
                                                        <div className='flex items-center gap-2'>
                                                            <FaCartPlus className='text-xl'/>
                                                            <p>Cart</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
    
            </div>

            <div>
                <div>
                    <p>category</p>
                    <p>proteins</p>
                </div>
                <div>
                    <p>filter</p>
                    <div>
                        <p>manufacture</p>
                        <label>
                            <input 
                                type='checkbox'
                            />
                            india
                        </label>
                    </div>
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

export default GoalLg