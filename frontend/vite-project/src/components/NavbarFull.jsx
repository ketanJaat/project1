import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useSelector } from 'react-redux';
import proteinDabba from '../assets/proteinDabba.png'
import { IoEnterOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import axios from 'axios';




const navbarFull = () => {

    // const products = useSelector((state) => state.product.products);

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

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filterData = serachTerm.trim() ?
         products.filter( (product) => product.brand.toLowerCase()
         .includes(serachTerm.toLowerCase())) : [] ;
    


  return (
    <div>
        <nav className='bg-black flex place-content-between px-5 items-center gap-8'>
            <div>
                <a href='/'><button><img src={logo}/></button></a>
            </div>
            <div className='relative w-2/5 bg-gray-600 p-1 rounded-2xl'>
                <div className='flex place-content-between '>
                    <input onChange={handleChange} className='bg-gray-800 rounded-2xl p-2 w-full' placeholder='I am shopping for...'/>
                    {/* <button className='hover:bg-gray-300 p-2 rounded-xl'><FiSearch className='text-2xl text-gray-900'/></button> */}
                </div>
                <div className={`absolute max-h-[600px] overflow-y-hidden mt-2 w-full z-30`}>
                        {
                            
                            filterData.length > 0 && 
                            filterData.map(
                                (products) => {
                                    return(
                                        <div className='bg-gray-800 border-2 border-black flex place-content-between items-center pr-5 text-gray-400' key={products?._id}>
                                            <div className='h-fit flex gap-3 items-center'>
                                                <img className='h-10' src={products?.imageUrl1}/>
                                                <a href={`/product/${products?._id}`}>
                                                    {products.name}
                                                </a>
                                            </div>
                                            
                                            <div className='flex place-content-between gap-5'>
                                                <div>
                                                    Rs.{products.price}
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
            </div>
            <div className='flex gap-5'>
                <div className='flex items-center gap-2 group bg-gray-400 rounded-2xl p-2'>
                    <MdAccountCircle className='text-xl'/>
                    <p>Account</p>
                    <div className='absolute mt-[150px] -ml-10 w-32 h-28 flex flex-col place-content-evenly pl-5 invisible group-hover:visible bg-gray-600 rounded-2xl text-gray-200  z-50 '>
                                <a href='/login' className='flex items-center gap-2'>
                                    <IoEnterOutline />
                                    sign in
                                </a>
                                <a href='/sign-up' className='flex items-center gap-2'>
                                    <CgProfile />
                                    sign up
                                </a>
                        </div>
                </div>
                <div className='flex items-center gap-2 bg-gray-400 rounded-2xl p-2'>
                    <FaRegHeart className='text-xl'/>
                    <p>Wishlist</p>
                </div>
                <div className='flex items-center gap-2 bg-gray-400 rounded-2xl p-2'>
                    <a href='/cart' className='flex items-center gap-2'>
                        <FaCartPlus className='text-xl'/>
                        <p>cart</p>
                    </a>
                    
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navbarFull