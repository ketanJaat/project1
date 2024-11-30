import React, { useState } from 'react'
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { PiArrowSquareRightDuotone } from "react-icons/pi";
import proteinDabba from '../assets/proteinDabba.png'
import blocks from '../assets/block.jpg'
import poster from '../assets/poster.png'
import poster2 from '../assets/poster2.jpg'
import brand from '../assets/brand.jpg'
import video from '../assets/video.mp4'
import logo from '../assets/logo.png'
import { FaArrowRight, FaFacebook, FaHome } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaCartPlus } from "react-icons/fa";
import NavbarFull from './NavbarFull';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ShopFull from './ShopFull';
import ShopSm from './ShopSm';
import ShopLg from './ShopLg';
import RegisterFull from './register/RegisterFull';
import RegisterLg from './register/RegisterLg';
import RegisterSm from './register/RegisterSm';



const Register = () => {
    return (
        <div className='overflow-x-hidden'>
            <nav>
                <div className='hidden lg:block xl:block'>                    
                    <RegisterFull/>
                </div>
                <div className='hidden tab:block'>
                    <RegisterLg/>
                </div>
                <div className='hidden m-lg:block m-md:block m-sm:block'>
                    <RegisterSm/>
                </div>
            </nav>
            
        </div>
      )
}

export default Register