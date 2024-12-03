import React, { useEffect, useState } from 'react'
import NavbarSm from '../../../NavbarSm'
import { CiHome } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from 'react-redux';
import proteinDabba from '../../../../assets/proteinDabba.png'
import { FaCartPlus } from "react-icons/fa";
import logo from '../../../../assets/logo.png'
import { FaArrowRight, FaFacebook, FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import axios from 'axios';

const IndexSm = () => {

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
        (product) => product.name.toLowerCase()
        .includes('carbo')
    );



    return (

        <div className=''>
            <NavbarSm/>
    
            <div className='flex gap-10 p-6 border-y-2 border-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>{/* browse all category bar */}
                <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-2'>
                        <FaHome/>
                        <a href='/'>Home</a>
                    </div>
                    <MdOutlineKeyboardArrowRight />
                    <div className='flex items-baseline'>
                        <a href='/shop'>shop</a>
                    </div> 
                </div>
            </div>
    
            <div className='grid grid-cols-2 grid-flow-row gap-4 bg-black text-white'>
            {
                                filterData.length > 0 && 
                                filterData.map(
                                    (products) => {
                                        return(
                                            <div className='bg-gray-800 rounded-2xl border-2 border-black h-96 flex flex-col place-content-evenly px-2' key={products?.id}>
                                                <div className='bg-gray-700 text-white rounded-lg -mt-2 -ml-1 pl-1 w-2/5'>
                                                    {products?.saving}% off
                                                </div>
                                                <a className='h-fit ' href={`/product/${products?.id}`}>
                                                    <img className='h-fit' src={products.imageUrl1}/>
                                                </a>
                                                <div className='text-gray-200'>
                                                    {products.brand}
                                                </div>
                                                <a href={`/product/${products?.id}`} className='text-gray-200'>
                                                    {products.name}
                                                </a>
                                                <div className='flex place-content-between'>
                                                    <div className='text-gray-200'>
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
    
            <div className='flex gap-6 pb-16 flex-col bg-black text-white justify-center items-center'>
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

            <footer className='flex place-content-between bg-black text-white p-8 border-y-2 border-black'>
                <div className='text-base'>
                    <p className='text-gray-600'>Copyright © 2024, supplementsvilla.com</p>
                </div>
                
            </footer>
        </div>
            
      )
}

export default IndexSm