import React, { useState } from 'react'
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { PiArrowSquareRightDuotone } from "react-icons/pi";

import logo from '../../assets/logo.png'
import { FaArrowRight, FaFacebook, FaHome } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavbarLg from '../navbarlg';


const LoginLg = () => {
    const products = useSelector((state) => state.product.products);

    const [serachTerm , setSearchTerm] = useState('');

    const filterData = products.filter(
        (product) => product.name.toLowerCase()
        .includes(serachTerm.toLowerCase())
    );


    const [forms , setForms] = useState('mobile');

    const handleForms = (e) => {
        setForms(e.target.value)
    }


    return (

        <div className=''>
            <NavbarLg/>
    
            <div className='flex flex-col bg-gray-400 h-screen'>{/* browse all category bar */}
                <div className='bg-green-400 flex gap-10 p-6 border-y-2 border-black'>
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center gap-2'>
                            <FaHome/>
                            <p>Home</p>
                        </div>
                        <MdOutlineKeyboardArrowRight />
                        <div className='flex items-baseline'>
                            <p>shops</p>
                        </div> 
                    </div>
                </div>
                <div className='bg-orange-400 flex flex-col h-full justify-center items-center gap-6'>
                        <div className='text-4xl'>Login</div>
                        <div className='flex gap-2'>
                            <label className=''>
                                <input type='radio'
                                        value='mobile'
                                        checked={forms === 'mobile'}
                                        onChange={handleForms}
                                />
                                Login via mobile
                            </label>
                            <label className=''>
                                <input type='radio'
                                        value='email'
                                        checked={forms === 'email'}
                                        onChange={handleForms}
                                />
                                Login via email
                            </label>
                        </div>
                        <div>form
                            {
                                forms === 'mobile' && (
                                    <div className='flex flex-col justify-start items-start'>
                                        <p>mobile</p>
                                        <input/>
                                        <button>send otp</button>
                                    </div>
                                )
                            }
                            {
                                forms === 'email' && (
                                    <div className='flex flex-col items-start'>
                                        <p>please login below account detail</p>
                                        <label className='flex flex-col'>
                                            email
                                            <input placeholder='email'/>
                                        </label>
                                        <label className='flex flex-col'>
                                            password
                                            <input placeholder='password'/>
                                        </label>
                                        <button>send otp</button>
                                        <p>forgot your password</p>
                                        <p>don't have an account ? sign up now</p>
                                    </div>
                                )
                            }
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

export default LoginLg