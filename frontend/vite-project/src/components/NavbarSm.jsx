import React, { useEffect } from 'react'
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
import axios from 'axios';



const NavbarSm = () => {


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

    const [inputClick , setInputClick] = useState(false);

    const input = () => {
        setInputClick(!inputClick);
    }


    const [serachTerm , setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filterData = serachTerm.trim() ?
         products.filter( (product) => product.brand.toLowerCase()
         .includes(serachTerm.toLowerCase())) : [] ;

  return (
    <div className='overflow-x-hidden'>
        <nav className='bg-black flex place-content-between items-center px-5 relative'>
            <button onClick={handleClick} className='mr-10'>
                <FaBars className='text-3xl text-gray-400'/>
            </button>
            <div className={`bg-black text-gray-200 z-30 overflow-y-scroll ${isBrowseClick ? 'visible' : 'invisible'} z-10 -ml-10 w-1/2 p-8  mt-[544px] h-screen fixed flex place-content-evenly flex-col`}>
                <div>
                    <div className='flex place-content-between items-center'>
                        <img className='h-10' src={logo}/>
                        <HiMiniXMark onClick={handleClick}/>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <button onClick={handleBrowse} className='bg-gray-600 rounded-lg'>Browse Category</button>
                    <div className='flex flex-col gap-2'>
                        <div>Home</div>
                        <div className='flex place-content-between items-center'>
                            <details>
                                <summary>brands</summary>
                                <div className='flex flex-col text-gray-500 gap-3 text-xs'>
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
                                <div className='flex flex-col text-gray-500 gap-3 text-xs'>
                                    <p className='flex '>MUSCLE BUILDING</p>
                                    <p className='flex'>MASS AND MUSCLE GAINING</p>
                                    <p className='flex'>HEALTH AND WELL BEING</p>
                                    <p className='flex'>MUSCLE RECOVERY AND ENERGY</p>
                                    <p className='flex'>MUSCULARITY VASCULARITY</p>
                                    <p className='flex'>WEIGHT LOSS</p>
                                </div>
                            </details>
                        </div>
                        <div className='flex place-content-between items-center'>
                            <details>
                                <summary>Deals</summary>
                                <div className='flex flex-col text-gray-500 gap-3 text-xs'>
                                    <p>PICK OF THE DAY</p>
                                    <p>SUPER SAVING SALE</p>
                                    <p>GNC DEALS</p>
                                </div>
                            </details>
                        </div>
                        <div>blog</div>
                        <div className='flex place-content-between items-center'>
                            <details>
                                <summary>Customer Support</summary>
                                <div className='flex flex-col text-gray-500 gap-3 text-xs'>
                                    <p>ABOUT</p>
                                    <p>GALLERY</p>
                                    <p>VIDEO GALLERY</p>
                                    <p>SHOPPING POLICY</p>
                                    <p>REFUND POLICY</p>
                                    <p>fAQ's</p>
                                    <p>PRIVACY POLICY</p>
                                    <p>CERTFICATE</p>
                                    <p>CONTACT US</p>
                                </div>
                            </details>
                        </div>
                        <div>our outlet</div>
                    </div>
                    <div className={`bg-black ${isCategoryClick ? 'visible' : 'invisible'} z-20 -ml-3 w-2/5 p- -mt-[96px]  h-screen fixed flex  flex-col`}>
                        <div className='mt-2'>
                            <div className='flex place-content-between items-center'>
                                <img className='h-10' src={logo}/>
                                <HiMiniXMark onClick={handleBrowse}/>
                            </div>
                        </div>
                        <div className='bg-gray-500 overflow-y-scroll -mt- h-[640px] flex flex-col place-content-evenly relative'>
                            <div className='w-full  flex'>
                                <button onClick={() => handleSectionClick('protein')} className='w-2/5 bg-gray-600 p-2 h-10'>protein</button>
                                <div className={`bg-gradient-to-r from-gray-500 to-blue-900 absolute ml-[69px] ${activeSection === 'protein' ? 'block' : 'hidden'}  w-3/5 `}>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/protein/all'>All protein</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/protein/blend'>blend protein</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/protein/whey'>whey protein</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/protein/iso'>isolate protein</a></div>
                                </div>
                            </div>
                            <div className='w-full  flex '>
                                <button onClick={() =>  handleSectionClick('mass')} className='w-2/5 bg-gray-600 p-2'>mass & muscle gainer</button>
                                <div className={`bg-gradient-to-r from-gray-500 to-blue-900 absolute ml-[69px] -mt-[60px] group-visited:visible ${activeSection === 'mass' ? 'block' : 'hidden'}  w-3/5 `}>
                                    <div className='border-y-2 border-black p-2 py-6'><a  href='/shop/mass&muscleGainer'>All mass & muscle gainer</a></div>
                                    <div className='border- border-black p-2 py-6'><a  href='/shop/mass&muscleGainer'>mass & muscle gainer</a></div>
                                </div>
                            </div>
                            <div className='w-full  flex'>
                                <button onClick={() => handleSectionClick('weight loss')} className='w-2/5 bg-gray-600 p-2'>weight loss</button>
                                <div className={`bg-gradient-to-r from-gray-500 to-blue-900 absolute ml-[69px] -mt-[140px] group-visited:visible ${activeSection === 'weight loss' ? 'block' : 'hidden'}  w-3/5 `}>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/weightloss/all'>All weight loss</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/weightloss/L-carnitine'>l carnitine</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/weightloss/fatburners'>fat  burner</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/weightloss/CLA'>cla</a></div>
                                </div>
                            </div>
                            <div className='w-full  flex'>
                                <button onClick={() => handleSectionClick('essentials')} className='w-2/5 bg-gray-600 p-2'>health & wellness</button>
                                <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-[69px] -mt-[216px] group-visited:visible ${activeSection === 'essentials' ? 'block' : 'hidden'}  w-3/5 `}>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/healthwellness/all'>All health & Wellness</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/healthwellness/multivitamins'>Multi vitamins</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/healthwellness/fishoil'>fish oil</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/healthwellness/digestiveenzymes'>digestive enzymes</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/healthwellness/testobooster'>testo booster</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/healthwellness/sportshealthy'>sports healthy</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/healthwellness/healthyjoints'>healthy joints</a></div>
                                </div>
                            </div>
                            <div className='w-full  flex'>
                                <button onClick={() => handleSectionClick('health & Wellness')} className='w-2/5 bg-gray-600 p-2'>essential</button>
                                <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-[69px] -mt-[270px] group-visited:visible ${activeSection === 'health & Wellness' ? 'block' : 'hidden'}  w-3/5 `}>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/essentials/all'>all essentials</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/essentials/energypowder'>Energy Powder</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/essentials/bcaa-amino'>BCAA & Amino</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/essentials/preworkout'>Pre Workout</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/essentials/glutamine'>Glutamine</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/essentials/creatine'>creatine</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/essentials/gymessentials'>gym essentials</a></div>
                                </div>
                            </div>
                            <div className='w-full  flex'>
                                <button onClick={() => handleSectionClick('Muscle Pumping')} className='w-2/5 bg-gray-600 p-2'>Muscle Pumping</button>
                                <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-[69px] -mt-[375px] group-visited:visible ${activeSection === 'Muscle Pumping' ? 'block' : 'hidden'}  w-3/5 `}>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/musclepumping/all'>All Muscle Pumping</a></div>
                                    <div className='border- border-black p-2 py-6'><a href='/shop/musclepumping/l-arginine'>L-arginine</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/musclepumping/citruline'>Citrulline</a></div>
                                </div>
                            </div>
                            <div className='w-full  flex'>
                                <button onClick={() => handleSectionClick('stacks')} className='w-2/5 bg-gray-600 p-2'>stacks</button>
                                <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-[69px] -mt-[450px] group-visited:visible ${activeSection === 'stacks' ? 'block' : 'hidden'}  w-3/5 `}>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/stacks/all'>All stacks</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/stacks/bulkbody'>Bulk body</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/stacks/fatloss'>fat loss</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/stacks/massgaining'>muscle gaining</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/stacks/musclegaining'>mass gaining</a></div>
                                    <div className='border-y- border-black p-2 py-6'><a href='/shop/stacks/sizegaining'>size gaining</a></div>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/stacks/cuttingstack'>cutting stack</a></div>
                                </div>
                            </div>
                            <div className='w-full  flex'>
                                <button onClick={() => handleSectionClick('carbo')} className='w-2/5 bg-gray-600 p-2'>carbo</button>
                                <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-[69px] -mt-[500px] group-visited:visible ${activeSection === 'carbo' ? 'block' : 'hidden'}  w-3/5 `}>
                                    <div className='border-y-2 border-black p-2 py-6'><a href='/shop/carbo/all'>All carbo</a></div>
                                    <div className='border- border-black p-2 py-6'><a href='/shop/carbo/carbo'>carbo</a></div>
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
                            <div className='flex gap-5 mt-3'>
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
            <div className={`w-1/2 h-16 flex items-center`}>
                <a href='/'><button><img src={logo}/></button></a>
            </div>

            <div className={`bg-black text-gray-200 z-30 overflow-y-scroll ${inputClick ? 'visible' : 'invisible'} z-10 -ml-10 w-screen p-8  mt-[544px] h-screen fixed flex place-content-between flex-col`}>
                <div className='flex flex-col gap-10'>
                    <div>
                        <div className='flex place-content-between items-center'>
                            <img className='h-10' src={logo}/>
                            <HiMiniXMark onClick={input}/>
                        </div>
                    </div>

                    <div className='relative w-full bg-gray-600 p-1 rounded-2xl'>
                        <div className='mt-2 '>
                            <input onChange={handleChange} className='bg-gray-800 rounded-2xl p-2 w-full' placeholder='I am shopping for...'/>
                            {/* <button className='hover:bg-gray-300 p-2 rounded-xl'><FiSearch className='text-2xl text-gray-900'/></button> */}
                        </div>
                        <div className={` max-h-[1200px] overflow-y-scroll mt-2 w-full z-30`}>
                                {
                                    
                                    filterData.length > 0 && 
                                    filterData.map(
                                        (products) => {
                                            return(
                                                <div className='bg-gray-800 h-fit border-2 border-black flex place-content-between items-center pr-5 text-gray-400' key={products?._id}>
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
                </div>
                


                <div className=''>
                    Copyright © 2024, supplementsvilla.com
                </div>
            </div>
            {/* <div className='w-2/5 bg-orange-600 p-2 rounded-xl'>
                <div className='flex place-content-between '>
                    <input placeholder='I am shopping for...'/>
                    <button className='hover:bg-green-400 p-2 rounded-xl'><FiSearch /></button>
                </div>
            </div> */}
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
            
            <div className='flex gap-4'>
                <div className='text-xl'>
                    <FiSearch onClick={input} className='text-gray-400'/>
                </div>
                <div className='text-xl'>
                    <a href='/cart'><FaCartPlus className='text-gray-400'/></a>
                </div>
            </div>

            
        </nav>
    </div>
  )
}

export default NavbarSm