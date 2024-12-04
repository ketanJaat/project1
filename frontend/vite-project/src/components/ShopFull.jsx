import React, { useEffect, useState } from 'react'
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
import { HiMiniXMark } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from 'axios'



const ShopFull = () => {
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



  return (

    <div className='bg-black text-white'>
        <NavbarFull/>

        <div className='flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative gap-10 px-6 border-y-2 border-black'>{/* browse all category bar */}
            <button onClick={handleClick} className='relative group bg-indigo-800 rounded-lg p-2'>Browse all categories</button>
            {/* DROPDOWN OF CONTENT */}
            <div className={`bg-black text-gray-200 ${isBrowseClick ? 'visible' : 'invisible'} z-10 p-8 px-5 w-1/3 h-screen fixed -mt-[122px] -ml-6`}>
                <div className='flex place-content-between bg-gray-700'>  
                    <div>Categories</div>
                    <div onClick={handleClick} className='bg-gray-700'><HiMiniXMark /></div>
                </div>
                <div className='bg-gray-500 h-full flex flex-col gap-10 relative'>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('protein')} className='w-2/5 bg-gray-600 p-2 h-10'>protein</button>
                        <div className={`bg-gradient-to-r from-gray-500 to-blue-900 absolute ml-44 ${activeSection === 'protein' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-y-2 border-black p-2 py-6'><a href='/shop/protein/all'>All protein</a></div>
                            <div className='border-y- border-black p-2 py-6'><a href='/shop/protein/blend'>blend protein</a></div>
                            <div className='border-y-2 border-black p-2 py-6'><a href='/shop/protein/whey'>whey protein</a></div>
                            <div className='border-y- border-black p-2 py-6'><a href='/shop/protein/iso'>isolate protein</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex '>
                        <button onClick={() =>  handleSectionClick('mass')} className='w-2/5 bg-gray-600 p-2'>mass & muscle gainer</button>
                        <div className={`bg-gradient-to-r from-gray-500 to-blue-900 absolute ml-44 -mt-20 group-visited:visible ${activeSection === 'mass' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-y-2 border-black p-2 py-6'><a  href='/shop/mass&muscleGainer'>All mass & muscle gainer</a></div>
                            <div className='border- border-black p-2 py-6'><a  href='/shop/mass&muscleGainer'>mass & muscle gainer</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('weight loss')} className='w-2/5 bg-gray-600 p-2'>weight loss</button>
                        <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-44 -mt-40 group-visited:visible ${activeSection === 'weight loss' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-y-2 border-black p-2 py-6'><a href='/shop/weightloss/all'>All weight loss</a></div>
                            <div className='border-y- border-black p-2 py-6'><a href='/shop/weightloss/L-carnitine'>l carnitine</a></div>
                            <div className='border-y-2 border-black p-2 py-6'><a href='/shop/weightloss/fatburners'>fat  burner</a></div>
                            <div className='border-y- border-black p-2 py-6'><a href='/shop/weightloss/CLA'>cla</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('essentials')} className='w-2/5 bg-gray-600 p-2'>essentials</button>
                        <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-44 -mt-60 group-visited:visible ${activeSection === 'essentials' ? 'block' : 'hidden'}  w-3/5 `}>
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
                        <button onClick={() => handleSectionClick('health & Wellness')} className='w-2/5 bg-gray-600 p-2'>health & Wellness</button>
                        <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-44 -mt-80 group-visited:visible ${activeSection === 'health & Wellness' ? 'block' : 'hidden'}  w-3/5 `}>
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
                        <button onClick={() => handleSectionClick('Muscle Pumping')} className='w-2/5 bg-gray-600 p-2'>Muscle Pumping</button>
                        <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-44 -mt-[400px] group-visited:visible ${activeSection === 'Muscle Pumping' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-y-2 border-black p-2 py-6'><a href='/shop/musclepumping/all'>All Muscle Pumping</a></div>
                            <div className='border- border-black p-2 py-6'><a href='/shop/musclepumping/l-arginine'>L-arginine</a></div>
                            <div className='border-y-2 border-black p-2 py-6'><a href='/shop/musclepumping/citruline'>Citrulline</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('stacks')} className='w-2/5 bg-gray-600 p-2'>stacks</button>
                        <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-44 -mt-[480px] group-visited:visible ${activeSection === 'stacks' ? 'block' : 'hidden'}  w-3/5 `}>
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
                        <div className={`bg-gradient-to-r from-gray-500 to-blue-900  absolute ml-44 -mt-[560px] group-visited:visible ${activeSection === 'carbo' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-y-2 border-black p-2 py-6'><a href='/shop/carbo/all'>All carbo</a></div>
                            <div className='border- border-black p-2 py-6'><a href='/shop/carbo/carbo'>carbo</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-6 h-16'>
                <div className='h-full'>
                    <div className='relative group flex items-center justify-center h-full'>
                        <div className='hover:scale-110 hover:shadow-lg h-full flex items-center shadow-white transform transition-transform  duration-300'>
                                Brands
                                <RiArrowDropDownLine />
                        </div>
                        <div className='absolute mt-[556px] rounded-2xl ml-[735px] invisible group-hover:visible bg-gray-600 text-gray-300 gap-10 w-[800px] h-[490px] grid grid-rows-11 grid-cols-3 grid-flow-col p-5 px-auto z-50 '>
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
                    </div>
                </div>
                <div className='flex items-baseline h-full'>
                    <div className='group flex  items-center justify-center h-full'>
                        <div className='hover:scale-110 hover:shadow-lg h-full flex items-center shadow-white transform transition-transform  duration-300'>
                                Goals
                                <RiArrowDropDownLine />
                        </div>
                        <div className='bg-gray-600 text-gray-300 absolute mt-[320px] ml-40 rounded-2xl invisible p-4 gap-4  group-hover:visible  w-fit h-fit grid grid-flow-row z-50 '>
                                <a href='/goals/muscle building' className='flex '>Muscle Building</a>
                                <a href='/goals/mass and muscle gaining' className='flex'>mass and muscle gaining</a>
                                <a href='/goals/health and well being' className='flex'>health and well being</a>
                                <a href='/goals/muscle recovery and energy' className='flex'>muscle recovery and energy</a>
                                <a href='/goals/muscularity vascularity' className='flex'>muscularity vascularity</a>
                                <a href='/goals/weight loss' className='flex'>weight loss</a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center h-full'>
                    <div className='group flex items-center justify-center h-full'>
                        <p>Deals</p>
                        <div className='absolute mt-[240px] ml-20 invisible p-4 gap-4 rounded-2xl group-hover:visible bg-gray-600 text-gray-300 w-fit h-fit grid  grid-flow-row z-50'>
                                <p>Pick of the day</p>
                                <p>star x sale</p>
                                <p>super saving sale</p>
                                <p>gnc deals</p>
                        </div>
                    </div>
                </div>
                <p>Blogs</p>
                <div className='flex items-center h-full'>
                    <div className='group flex items-center justify-center  h-full'>
                        <div className='hover:scale-110 hover:shadow-lg h-full flex items-center shadow-white transform transition-transform  duration-300'>
                                Customer Support
                                <RiArrowDropDownLine />
                        </div>
                        <div className='absolute mt-[440px] ml-20 invisible w-64 gap-4 p-4 rounded-2xl  group-hover:visible bg-gray-600 text-gray-300  w- h-fit grid grid-flow-row z-50'>
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
                    </div>
                </div>
                <p>Our Outlets</p>
            </div>
        </div>

        <div className='flex gap-10 p-6 border-y-2 border-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>{/* browse all category bar */}
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

        <div className='grid grid-cols-6 grid-flow-row gap-4'>
                        {
                            filterData.length > 0 && 
                            filterData.map(
                                (products) => {
                                    return(
                                        <div className='bg-gray-800 rounded-2xl border-2 border-black h-80 flex flex-col place-content-evenly px-2' key={products?.id}>
                                            <div className='bg-gray-700 text-white rounded-lg -mt-2 -ml-1 pl-1 w-2/5'>
                                                {products?.saving}% off
                                            </div>
                                            <a className='h-fit ' href={`/product/${products?.id}`}>
                                                <img className='' src={products.imageUrl1}/>
                                            </a>
                                            <div>
                                                {products.brand}
                                            </div>
                                            <a href={`/product/${products?.id}`}>
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

        <div className='flex gap-6 pb-16 mt-20'>
            <div className='flex flex-col w-1/5 gap-7 pl-10'>
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
        
        <footer className='flex place-content-between p-10 border-y-2 border-black'>
            <div className='text-lg'>
                <p>Copyright © 2024, supplementsvilla.com</p>
            </div>
            <div className='flex text-lg gap-7'>
                <p className='font-bold'>Follow Us</p>
                <div className='flex items-center gap-5'>
                    <a className='text-2xl'><FaFacebook /></a>
                    <a className='text-2xl'><FaInstagram /></a>
                    <a className='text-2xl'><FaWhatsapp /></a>
                </div>
            </div>
        </footer>
    </div>
        
  )
}

export default ShopFull