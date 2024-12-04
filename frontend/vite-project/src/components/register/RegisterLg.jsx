import React, { useState } from 'react'
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { PiArrowSquareRightDuotone } from "react-icons/pi";
import NavbarLg from '../NavbarLg';

import logo from '../../assets/logo.png'
import { FaArrowRight, FaFacebook, FaHome } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import axios from 'axios';



const RegisterLg = () => {


    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [role , setRole] = useState('');

    const handleSubmit = async() => {
        try{
            const res = await axios.post('http://localhost:4000/api/v1/signup', {
                name : name,
                email : email, 
                password : password,
                role : role
            })


            console.log('res is ' , res.data);
        }
        catch(error){
            console.error(error.message);
        }

        setName('')
        setEmail('')
        setPassword('');
        setRole('');
    }


    const products = useSelector((state) => state.product.products);

    const [serachTerm , setSearchTerm] = useState('');

    const filterData = products.filter(
        (product) => product.name.toLowerCase()
        .includes(serachTerm.toLowerCase())
    );



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
                    <div className='text-4xl'>create an account</div>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <input placeholder='username'
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input placeholder='email'
                                 type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input placeholder='password'
                                type='text'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                        <input placeholder='role'
                                type='text'
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={handleSubmit}>sumbit & register</button>
                        </div>
                        <div className='flex'>
                            <p>already have an account</p>
                            <p>sign in now</p>
                        </div>
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

export default RegisterLg