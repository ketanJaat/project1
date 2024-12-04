import React from 'react'
import logo from '../assets/logo.png'
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { HiMiniXMark } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const NavbarLg = () => {

    const [isBrowseClick , setIsBrowseClick] = useState(false);

    const handleClick = () => {
        setIsBrowseClick(!isBrowseClick);
    }

    const [isCategoryClick , setIsCategoryClick] = useState(false);

    const handleBrowse = () => {
        setIsCategoryClick(!isCategoryClick);
    }

    const [activeSection, setActiveSection] = useState(null); // Tracks the active section

    const handleSectionClick = (section) => {
        setActiveSection((prevSection) => (prevSection === section ? null : section)); // Toggle the same section or activate a new one
    };






    return (
        <div>
            <nav className='bg-black flex place-content-between px-10 items-center'>
                <div className='w-1/3'>
                    <a href='/'><button><img src={logo}/></button></a>
                </div>
                {/* <div className='w-2/5 bg-orange-600 p-2 rounded-xl'>
                    <div className='flex place-content-between '>
                        <input placeholder='I am shopping for...'/>
                        <button className='hover:bg-green-400 p-2 rounded-xl'><FiSearch /></button>
                    </div>
                </div> */}
                
                <button onClick={handleClick} className='mr-10'>
                    <FaBars className='text-3xl text-gray-400'/>
                </button>
                <div className={`bg-green-400 overflow-y-scroll ${isBrowseClick ? 'visible' : 'invisible'} z-10 -ml-10 w-2/5 p-8  mt-[590px] h-screen fixed flex place-content-evenly flex-col`}>
                    <div>
                        <div className='flex place-content-between items-center'>
                            <img className='h-10' src={logo}/>
                            <HiMiniXMark onClick={handleClick}/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <button onClick={handleBrowse} className='bg-green-400'>Browse Category</button>
                        <div>
                            <div>Home</div>
                            <div className='flex place-content-between items-center'>
                                <details>
                                    <summary>brands</summary>
                                    <div className='flex flex-col'>
                                        <a href='/brands/muscelblaze'>MUSCLEBLAZE</a>
                                        <a href='/brands/muscletrial'>MUSCLE TRAIL</a>
                                        <a href='/brands/promove'>PROMOVE</a>
                                        <a href='/brands/apexvitals'>APEX VITALS</a>
                                        <a href='/brands/anabolicresearch'>ANABOLIC RESEARCH</a>
                                        <a href='/brands/denzour'>DENZOUR</a>
                                        <a href='/brands/avvatar'>AVVATAR</a>
                                        <a href='/brands/internationalprotein'>INTERNATIONAL PROTEIN</a>
                                        <a href='/brands/muscleclub'>MUSCLE CLUB</a>
                                        <a href='/brands/musclescience'>MUSCLE SCIENCE</a>
                                        <a href='/brands/on'>(ON) OPTIMUM NUTRITION </a>
                                        <a href='/brands/asitis'>AS IT IS</a>
                                        <a href='/brands/bsn'>BSN</a>
                                        <a href='/brands/cellucor'>CELLUCOR</a>
                                        <a href='/brands/dexterjackson'>DEXTER JACKSON</a>
                                        <a href='/brands/dymatize'>DYMATIZE</a>
                                        <a href='/brands/gatsport'>GAT SPORT</a>
                                        <a href='/brands/gnc'>GNC</a>
                                        <a href='/brands/healthfarm'>HEALTHFARM</a>
                                        <a href='/brands/insanelabs'>INSANE LABS</a>
                                        <a href='/brands/kevinlevrone'>KEVIN LEVRONE</a>
                                        <a href='/brands/labrada'>LABRADA</a>
                                        <a href='/brands/muscletech'>MUSCLE TECH</a>
                                        <a href='/brands/nutrexresearch'>NUTREX RESEARCH</a>
                                        <a href='/brands/onescience'>ONE SCIENCE</a>
                                        <a href='/brands/polenutrition'>POLE NUTRITION</a>
                                        <a href='/brands/prosupps'>PRO SUPPS</a>
                                        <a href='/brands/pvl'>PVL GOLD SERIES</a>
                                        <a href='/brands/ronniecoleman'>RONNIE COLEMAN</a>
                                        <a href='/brands/rule1'>RULE 1</a>
                                        <a href='/brands/ultimatenutrition'>ULTIMATE NUTRITION</a>
                                        <a href='/brands/wellcore'>WELL CORE</a>
                                        <a href='/brands/xtend'>XTEND</a>
                                    </div>
                                </details>
                            </div>
                            <div className='flex place-content-between items-center'>
                                <details>
                                    <summary>Goals</summary>
                                    <div>
                                    <p className='flex '>Muscle BUilding</p>
                                    <p className='flex'>mass and muscle gaining</p>
                                    <p className='flex'>health and well being</p>
                                    <p className='flex'>muscle recovery and energy</p>
                                    <p className='flex'>muscularity vascularity</p>
                                    <p className='flex'>weight loss</p>
                                    </div>
                                </details>
                            </div>
                            <div className='flex place-content-between items-center'>
                            <details>
                                <summary>Deals</summary>
                                <div>
                                <p>Pick of the day</p>
                                    <p>star x sale</p>
                                    <p>super saving sale</p>
                                    <p>gnc deals</p>
                                </div>
                            </details>
                            </div>
                            <div>blog</div>
                            <div className='flex place-content-between items-center'>
                            <details>
                                <summary>Customer Support</summary>
                                <div>
                                <p>about</p>
                                    <p>gallery</p>
                                    <p>video gallery</p>
                                    <p>shopping policy</p>
                                    <p>refund policy</p>
                                    <p>fAQ's</p>
                                    <p>privacy policy</p>
                                    <p>cetificate</p>
                                    <p>contact us</p>
                                </div>
                            </details>
                            </div>
                            <div>our outlet</div>
                        </div>
                        <div className={`bg-white ${isCategoryClick ? 'visible' : 'invisible'} z-20 -ml-10 w-2/5 p- -mt-[136px]  h-screen fixed flex  flex-col`}>
                            <div className='mt-2'>
                                <div className='flex place-content-between items-center'>
                                    <img className='h-10' src={logo}/>
                                    <HiMiniXMark onClick={handleBrowse}/>
                                </div>
                            </div>
                            <div className='bg-orange-500 -mt- h-[640px] flex flex-col place-content-evenly relative'>
                                <div className='w-full  flex'>
                                    <button onClick={() => handleSectionClick('protein')} className='w-2/5 bg-yellow-700 p-2 h-10'>protein</button>
                                    <div className={`bg-purple-500 absolute ml-28 ${activeSection === 'protein' ? 'block' : 'hidden'}  w-3/5 `}>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                        <div className='border-2 border-black p-2 py-6'>cla</div>
                                    </div>
                                    </div>
                                <div className='w-full  flex '>
                                    <button onClick={() =>  handleSectionClick('mass')} className='w-2/5 bg-yellow-700 p-2'>mass gainer</button>
                                    <div className={`bg-purple-500 absolute ml-28 -mt-[78px] group-visited:visible ${activeSection === 'mass' ? 'block' : 'hidden'}  w-3/5 `}>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                        <div className='border-2 border-black p-2 py-6'>cla</div>
                                    </div>
                                </div>
                                <div className='w-full  flex'>
                                    <button onClick={() => handleSectionClick('weight loss')} className='w-2/5 bg-yellow-700 p-2'>weight loss</button>
                                    <div className={`bg-purple-500  absolute ml-28 -mt-[165px] group-visited:visible ${activeSection === 'weight loss' ? 'block' : 'hidden'}  w-3/5 `}>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                        <div className='border-2 border-black p-2 py-6'>cla</div>
                                    </div>
                                </div>
                                <div className='w-full  flex'>
                                    <button onClick={() => handleSectionClick('essentials')} className='w-2/5 bg-yellow-700 p-2'>essentials</button>
                                    <div className={`bg-purple-500  absolute ml-28 -mt-[236px] group-visited:visible ${activeSection === 'essentials' ? 'block' : 'hidden'}  w-3/5 `}>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                        <div className='border-2 border-black p-2 py-6'>cla</div>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                    </div>
                                </div>
                                <div className='w-full  flex'>
                                    <button onClick={() => handleSectionClick('health & Wellness')} className='w-2/5 bg-yellow-700 p-2'>health & Wellness</button>
                                    <div className={`bg-purple-500  absolute ml-28 -mt-[300px] group-visited:visible ${activeSection === 'health & Wellness' ? 'block' : 'hidden'}  w-3/5 `}>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                        <div className='border-2 border-black p-2 py-6'>cla</div>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                    </div>
                                </div>
                                <div className='w-full  flex'>
                                    <button onClick={() => handleSectionClick('Muscle Pumping')} className='w-2/5 bg-yellow-700 p-2'>Muscle Pumping</button>
                                    <div className={`bg-purple-500  absolute ml-28 -mt-[375px] group-visited:visible ${activeSection === 'Muscle Pumping' ? 'block' : 'hidden'}  w-3/5 `}>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                        <div className='border-2 border-black p-2 py-6'>cla</div>
                                    </div>
                                </div>
                                <div className='w-full  flex'>
                                    <button onClick={() => handleSectionClick('stacks')} className='w-2/5 bg-yellow-700 p-2'>stacks</button>
                                    <div className={`bg-purple-500  absolute ml-28 -mt-[500px] group-visited:visible ${activeSection === 'stacks' ? 'block' : 'hidden'}  w-3/5 `}>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                        <div className='border-2 border-black p-2 py-6'>cla</div>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                    </div>
                                </div>
                                <div className='w-full  flex'>
                                    <button onClick={() => handleSectionClick('carbo')} className='w-2/5 bg-yellow-700 p-2'>carbo</button>
                                    <div className={`bg-purple-500  absolute ml-28 -mt-[550px] group-visited:visible ${activeSection === 'carbo' ? 'block' : 'hidden'}  w-3/5 `}>
                                        <div className='border-2 border-black p-2 py-6'>All weight loss</div>
                                        <div className='border-2 border-black p-2 py-6'>l carnitine</div>
                                        <div className='border-2 border-black p-2 py-6'>fat burner</div>
                                        <div className='border-2 border-black p-2 py-6'>cla</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex  items-center'>
                                <IoLocationOutline />
                                <div>Our outlet</div>
                            </div>
                            <div className='flex  items-center'>
                                <IoPersonOutline />
                                <div>Login / sign up</div>
                            </div>
                            <div className='flex items-center'>
                                <PiHeadphones />
                                <div>+91 9319963733</div>
                            </div>
                        </div>
                        <div>
                            <div>follow us</div>
                            <div>
                                <FaFacebook/>
                                <FaInstagram/>
                                <FaWhatsapp/>
                            </div>
                        </div>
                    </div>
                    <div>
                        Copyright © 2024, supplementsvilla.com
                    </div>
                </div>
                {/* <div className='flex gap-5'>
                    <div className='flex items-center gap-2'>
                        <MdAccountCircle className='text-xl'/>
                        <p>Account</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegHeart className='text-xl'/>
                        <p>Wishlist</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCartPlus className='text-xl'/>
                        <p>Cart</p>
                    </div>
                </div> */}
                <div className='flex gap-5'>
                    <div className='text-3xl'>
                        <FiSearch className='text-gray-400'/>
                    </div>
                    <div className='text-2xl'>
                        <a href='/cart'><FaCartPlus className='text-gray-400'/></a>
                    </div>
                </div>
            </nav>
        </div>
      )
}

export default NavbarLg
