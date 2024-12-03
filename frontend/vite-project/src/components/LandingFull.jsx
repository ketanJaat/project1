import React, { useEffect } from 'react'
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { PiArrowSquareRightDuotone } from "react-icons/pi";
import proteinDabba from '../assets/proteinDabba.png'
import blocks from '../assets/block.jpg'
import poster from '../assets/poster.png'
import poster2 from '../assets/poster2.jpg'
import brand from '../assets/brand.jpg'
import video from '../assets/video.mp4'
import logo from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import productFull from './productFull';
import { HiMiniXMark } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from 'axios'





const LandingFull = () => {


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

    const gncFilter = products.filter(
        (product) => product.brand.toLowerCase().includes('')
    )

    const starFilter = products.filter(
        (product) => product.brand.toLowerCase().includes('')
    )


    const [isBrowseClick , setIsBrowseClick] = useState(false);

    const handleClick = () => {
        setIsBrowseClick(!isBrowseClick);
    }

    

    const [activeSection, setActiveSection] = useState(null); // Tracks the active section

    const handleSectionClick = (section) => {
        setActiveSection((prevSection) => (prevSection === section ? null : section)); // Toggle the same section or activate a new one
    };

    const [rightSwipe1 , setRightSwipe1] = useState(0);

    // const handleRightSwipe = () => {
    //     setRightSwipe(!rightSwipe);
    // }

    const handleRightSwipe1 = () => {
        setRightSwipe1((prevSwipe) => (prevSwipe < 900 ? prevSwipe + 300 : 0));
    }

    const handleLeftSwipe1 = () => {
        setRightSwipe1((prevSwipe) => (prevSwipe > 0 ? prevSwipe - 300 : 0));
    }


    //////////////////////////////////

    const [rightSwipe2 , setRightSwipe2] = useState(0);

    // const handleRightSwipe = () => {
    //     setRightSwipe(!rightSwipe);
    // }

    const handleRightSwipe2 = () => {
        setRightSwipe2((prevSwipe) => (prevSwipe < 900 ? prevSwipe + 300 : 0));
    }

    const handleLeftSwipe2 = () => {
        setRightSwipe2((prevSwipe) => (prevSwipe > 0 ? prevSwipe - 300 : 0));
    }

    ////////////////////////////////

    const [rightSwipe3 , setRightSwipe3] = useState(0);

    // const handleRightSwipe = () => {
    //     setRightSwipe(!rightSwipe);
    // }

    const handleRightSwipe3 = () => {
        setRightSwipe3((prevSwipe) => (prevSwipe < 900 ? prevSwipe + 300 : 0));
    }

    const handleLeftSwipe3 = () => {
        setRightSwipe3((prevSwipe) => (prevSwipe > 0 ? prevSwipe - 300 : 0));
    }

    ///////////////////////////

    const [rightSwipe4 , setRightSwipe4] = useState(0);

    // const handleRightSwipe = () => {
    //     setRightSwipe(!rightSwipe);
    // }

    const handleRightSwipe4 = () => {
        setRightSwipe4((prevSwipe) => (prevSwipe < 900 ? prevSwipe + 300 : 0));
    }

    const handleLeftSwipe4 = () => {
        setRightSwipe4((prevSwipe) => (prevSwipe > 0 ? prevSwipe - 300 : 0));
    }

    ////////////////////

    const [rightSwipe5 , setRightSwipe5] = useState(0);

    // const handleRightSwipe = () => {
    //     setRightSwipe(!rightSwipe);
    // }

    const handleRightSwipe5 = () => {
        setRightSwipe5((prevSwipe) => (prevSwipe < 900 ? prevSwipe + 1520 : 0));
    }

    const handleLeftSwipe5 = () => {
        setRightSwipe5((prevSwipe) => (prevSwipe > 0 ? prevSwipe - 1520 : 0));
    }
    

  return (
    <div className='overflow-x-hidden relative'>
       
            
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

        <div className='  relative '>{/*poster */}
            <div className='flex items-center w-full'>
                <div className='absolute flex w-screen place-content-between px-10'>
                    <PiArrowSquareLeftDuotone onClick={handleLeftSwipe5} className='text-white text-2xl '/>
                    <PiArrowSquareRightDuotone onClick={handleRightSwipe5} className='text-white text-2xl'/>
                </div>
                <div className='w-full -z-10 flex transform transition-transform duration-300'
                    style={{transform: `translateX(-${rightSwipe5}px)`}}>
                    <img className='min-w-full -z-10' src='https://www.supplementsvilla.com/uploads/sliders/65c4d43fc691d.jpg'/>
                    <img className='min-w-full h-80 -z-10' src={blocks}/>
                </div>
                
            </div>
        </div>

        <div className='h-screen bg-black flex flex-col py-4 gap-4'>
            <p className='p-10 flex items-center justify-center text-white'>Featured Product</p>
            <div className='flex place-content-between items-center px-10 h-3/5 bg-gradient-to-b from-black via-gray-800 to-black'>
                <button onClick={handleLeftSwipe1} className='group m-0'>
                    <PiArrowSquareLeftDuotone className='text-6xl text-gray-950 '/>
                </button>

                <div className=' w-5/6 h-full overflow-hidden items-center relative rounded-3xl bg-gradient-to-b from-gray-700 via-gray-400 to-zinc-700 grid grid-flow-col gap-10 grid-cols- grid-rows-1 px-7'>    

                    {
                        filterData.length > 0 && 
                        filterData.map(
                            (products) => {
                                return(
                                    <div className={`bg-gray-800 rounded-2xl min-w-64 h-full flex flex-col place-content-evenly px-2 transform transition-transform duration-300 `} 
                                        style={{transform: `translateX(-${rightSwipe1}px)`}}
                                         key={products?._id}>
                                        <div className='bg-gray-700 text-white rounded-lg -mt-2 -ml-1 pl-1 w-2/5'>
                                            {products?.saving}% off
                                        </div>
                                        <a href={`/product/${products?.id}`} className='h-3/5 bg-black'>
                                            <img className='h-full w-full' src={products.imageUrl1}/>
                                        </a>
                                        <div className='text-gray-200'>
                                            {products.brand}
                                        </div>
                                        <a className='text-gray-200 hover:text-gray-400' href={`/product/${products?.id}`}>
                                            {products.name}
                                        </a>
                                        <div className='flex place-content-between'>
                                            <div className='text-gray-200'>
                                                {products.price}
                                            </div>
                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <FaCartPlus className='text-xl text-gray-300'/>
                                                    <p className='text-gray-300'>Cart</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }

                </div>

                <PiArrowSquareRightDuotone onClick={handleRightSwipe1}  className=' text-6xl group text-gray-950'/>
            </div>

            <div className='grid grid-cols-4 gap-4 px-4'>
                <img className='rounded-xl' src={blocks}/>
                <img className='rounded-xl' src={blocks}/>
                <img className='rounded-xl' src={blocks}/>
                <img className='rounded-xl'src={blocks}/>
            </div>
        </div>

        <div className='flex justify-center gap-7  bg-gradient-to-b from-black via-gray-800 to-black pt-5 w-screen p-10'>
            <div>
                <img className='w-fit' src={poster}/>
            </div>
            <div>
                <img className='w-fit' src={poster}/>
            </div>
            <div>
                <img className='w-fit' src={poster}/>
            </div>
            <div>
                <img className='w-fit' src={poster}/>
            </div>
        </div>

        <div className='h-screen  flex flex-col py-4 gap-20 bg-black'>
            <div className='flex place-content-between items-center px-10 h-3/5  bg-gradient-to-b from-black via-gray-800 to-black'>
                <button onClick={handleLeftSwipe2} className='group'>
                    <PiArrowSquareLeftDuotone  className='text-gray-950 text-6xl'/>
                </button>

                <div className=' w-5/6 h-full overflow-hidden items-center group-hover:translate-x-[200px] relative rounded-3xl bg-gradient-to-b from-gray-700 via-gray-400 to-zinc-700] grid grid-flow-col gap-10 grid-cols- grid-rows-1 px-7'>
                    {
                        gncFilter.length > 0 && 
                        gncFilter.map(
                            (products) => {
                                return(
                                    <div className={`bg-gray-800 rounded-2xl min-w-64  h-full flex flex-col place-content-evenly px-2 transform transition-transform duration-300`}
                                        style={{transform: `translateX(-${rightSwipe2}px)`}}
                                         key={products?._id}>
                                        <div className='bg-gray-700 text-white rounded-lg text-white -mt-3 -ml-2 pl-1 w-2/5'>
                                            {products.saving}% off
                                        </div>
                                        <a href={`/product/${products?.id}`} className='h-3/5 bg-black'>
                                            <img className='h-full w-full' src={products.imageUrl1}/>
                                        </a>
                                        <div className='text-gray-200'>
                                            {products.brand}
                                        </div>
                                        <a className='text-gray-200 hover:text-gray-400' href={`/product/${products?.id}`}>
                                            {products.name}
                                        </a>
                                        <div className='flex place-content-between'>
                                            <div className='text-gray-200'>
                                                {products.price}
                                            </div>
                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <FaCartPlus className='text-xl text-gray-200'/>
                                                    <p className='text-gray-200'>Cart</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>

                <PiArrowSquareRightDuotone onClick={handleRightSwipe2}  className='text-gray-950 text-6xl group'/>
            </div>

            <div>
                <img src={poster2}/>
            </div>
        </div>

        <div className='h-screen bg-black flex flex-col py-4 gap-4 '>{/* super saving sale */}
            <p className='p-5 pl-8 flex items-center  text-gray-300'>SUPER SAVING SALE</p>
            <div className='flex place-content-between items-center px-10 h-3/5 bg-gradient-to-b from-black via-gray-800 to-black'>
                <button className='group'>
                    <PiArrowSquareLeftDuotone onClick={handleLeftSwipe3} className='text-gray-950 text-6xl'/>
                </button>

                <div className=' w-5/6 h-full overflow-hidden items-center group-hover:translate-x-[200px] relative bg-gradient-to-b from-gray-700 via-gray-400 to-zinc-700 rounded-2xl grid grid-flow-col gap-10 grid-cols- grid-rows-1 px-7'>
                    {
                        gncFilter.length > 0 && 
                        gncFilter.map(
                            (products) => {
                                return(
                                    <div className={`bg-gray-800 rounded-2xl min-w-64 h-full flex flex-col place-content-evenly px-2  transform transition-transform duration-300`}
                                        style={{transform: `translateX(-${rightSwipe3}px)`}}
                                         key={products?._id}>
                                        <div className='bg-gray-700 text-white rounded-lg -mt-3 -ml-2 pl-1 w-2/5'>
                                            {products.saving}% off
                                        </div>
                                        <a href={`/product/${products?.id}`} className='h-3/5 bg-black'>
                                            <img className='h-full w-full' src={products.imageUrl1}/>
                                        </a>
                                        <div className='text-gray-200'>
                                            {products.brand}
                                        </div>
                                        <a className='text-gray-200 hover:text-gray-400' href={`/product/${products?.id}`}>
                                            {products.name}
                                        </a>
                                        <div className='flex place-content-between'>
                                            <div className='text-gray-200'>
                                                {products.price}
                                            </div>
                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <FaCartPlus className='text-xl text-gray-300'/>
                                                    <p className='text-gray-300'>Cart</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>

                <PiArrowSquareRightDuotone  onClick={handleRightSwipe3} className='text-gray-950 text-6xl group'/>
            </div>
        </div>

        <div className='h-screen bg-black flex flex-col py-4 -mt-32 gap-4'>{/* super saving sale */}
            <p className='p-5 pl-8 flex items-center text-gray-300'>STAR-X SALE</p>
            <div className='flex place-content-between items-center px-10 h-3/5 bg-gradient-to-b from-black via-gray-800 to-black'>
                <button className='group'>
                    <PiArrowSquareLeftDuotone onClick={handleLeftSwipe4} className='text-gray-950 text-6xl'/>
                </button>

                <div className=' w-5/6 h-full overflow-hidden items-center group-hover:translate-x-[200px] relative bg-gradient-to-b from-gray-700 via-gray-400 to-zinc-700 rounded-2xl grid grid-flow-col gap-10 grid-cols- grid-rows-1 px-7'>
                    {
                        starFilter.length > 0 && 
                        starFilter.map(
                            (products) => {
                                return(
                                    <div className={`bg-gray-800 rounded-2xl min-w-64 h-full flex flex-col place-content-evenly px-2 transform transition-transform duration-300`}
                                        style={{transform: `translateX(-${rightSwipe4}px)`}}
                                         key={products?._id}>
                                        <div className='bg-gray-700 text-white rounded-lg -mt-3 -ml-2 pl-1 w-2/5'>
                                            {products.saving}% off
                                        </div>
                                        <a href={`/product/${products?.id}`} className='h-3/5 bg-black'>
                                            <img className='h-full w-full' src={products.imageUrl1}/>
                                        </a>
                                        <div className='text-gray-200'>
                                            {products.brand}
                                        </div>
                                        <a className='text-gray-200 hover:text-gray-400' href={`/product/${products?.id}`}>
                                            {products.name}
                                        </a>
                                        <div className='flex place-content-between text-gray-200'>
                                            <div>
                                                {products.price}
                                            </div>
                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <FaCartPlus className='text-xl text-gray-300'/>
                                                    <p className='text-gray-300'>Cart</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>

                <PiArrowSquareRightDuotone onClick={handleRightSwipe4} className='text-gray-950 text-6xl group'/>
            </div>
        </div>

        
        <div className='-mt-28 bg-black flex flex-col gap-20'>
            <div className='text-gray-300 ml-10 font-semibold text-2xl'>
                Top brands
            </div>
            <div className='flex  px-10 m-auto h-52 w-[1520px]  justify-center overflow-x-hidden '>
                <div className='group flex bg-gradient-to-b from-black via-gray-500 to-black gap-8 transform transition-transform duration-300 animate-slide group-hover:animation-play-state-paused'>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                    <div className='bg-gray-700 flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                        <img className='rounded-xl h-32' src={brand}/>
                        <p className='ml-4 text-gray-300'>international protein</p>
                    </div>
                </div>
                
                
                
            </div>
        </div>

        <div className='flex place-content-center bg-gradient-to-b from-black via-gray-800 to-black'>
            <div className='w-1/2  p-10 flex justify-end '>
                <video className='h-72 border-gray-600 border-2 rounded-2xl' src={video} type='video/mp4' muted/>
            </div>
            <div className='w-1/2 flex flex-col gap-5 justify-center p-10 text-gray-300'>
                <div className='text-4xl font-bold'> We Are</div>
                <div className='text-4xl text-gray-400 hover:text-amber-100 font-bold'>Supplements Villa Family</div>
                <div>Supplements Villa is India's Finest supplements store that aims to provide you authentic supplements, health, fitness & wellness products at pocket friendly prices at free of delivery cost.</div>
                <div>
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>

        <div className='flex gap-9 flex-col px-28 py-10 text-white bg-black'>
            <div className='text-2xl font-bold'>
                Trusted Supplement Store in India for bodybuilding, health and nutrition supplements
            </div>
            <div className='text-sm text-gray-600'>
                <p>Finest Online Supplements Store in India for Whey Protein, Mass Gainer, Nutrition Supplements, Bodybuilding Supplements and much more.</p>
                <p>Gaining our customer’s trust and providing the best of all products pan India.\</p>
                <p>SupplementsVilla is India’s go-to mobile-commerce store that provides the best quality, nutritional health supplements. We have a vast range of health, fitness, wellness and bodybuilding products that add to your lifestyle without creating a hole in your pocket.</p>
                <p>Supplements at your doorstep you don't have to go for supplements shop near or far from you as you will get 100% original supplements at your doorstep without extra charges & @ best prices in the market. </p>
            </div>
            <div>
                <div>
                    <p>Specialities of SupplementsVilla</p>
                </div>
                <div className='text-sm text-gray-600'>
                    <p>We use technology to optimize various costs of the product, and provide at your doorstep without any extra charges.</p>
                    <p>We provide 100% authentic supplements too at affordable prices.</p>
                    <p>Customer needs are what we prioritize and you can see that with the huge number of products available in our store. Our store has a tremendous variety of products ranging from Whey protein, Creatine to BCAAs.</p>
                    <p>Our products are sold at 40% lesser prices than the competitors to benefit users, ensuring quality and effectiveness.</p>
                    <p>We ship pan India without any delays.</p>
                    <p>Committed to giving you real items at reasonable prices that everyone can afford. In order to maintain client satisfaction, we often run offers and provide gifts like samples, workout gloves, shakers, gym bags, t-shirts, and more.</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Products We Offer At SupplementsVilla</p>
                </div>
                <div className='text-sm text-gray-600'>
                    <p>The market is overloaded with health and fitness products but we still promise to cater you with the best brands. From essential Amino acids to products that raise the fitness bar, we have all of it stored for you.</p>
                    <p>You no longer have to search through numerous nutrition stores or look for your vitamins. Our application lists more than 200 brands and approved vendors. All to ensure that what you receive is accurate.</p>
                    <p>Be it bodybuilding supplements , weight loss, or nutrition supplements, you can get it all at SupplementsVilla.Whey Proteins, Vitamins, Muscle Gainers, BCAAs, Pre-Workouts, Creatine, Energy Powder, Testo Booster, Glutamine are some of our bestsellers. Not only that, we serve products from India’s best brands such as StarX, Avvatar, GAT SPORT, Ultimate Nutrition, Labrada, Optimum Nutrition, GNC, Dymatize, Muscle Tech and a ton more.</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Authenticity Guarantee</p>
                </div>
                <div className='text-sm text-gray-600'>
                    <p>The only online supplement retailer in India that can genuinely guarantee legitimacy is SupplementsVilla. When making a purchase from our website, you can be completely secure in what you are obtaining and never have to worry about receiving a false product. Along with that, we manage to pack our products in a travel-friendly way and you will never find distorted packaging.</p>
                    <p>We market consumables that you require, not desire. The products we sell and their authenticity is what we prioritize. We do not create or sell fake supplements loaded with steroids and you can be very sure of that. You can be certain that the products or supplements you purchase from us are entirely genuine and free of any filler.</p>
                    <p>When you see the authenticity badge next to one of our products, it simply means that we have sourced it directly and have tested it before sending it to you.We ensure that the supplements you are consuming are devoid of any harmful chemicals.</p>
                    <p>So relax and trust us to uplift your fitness journey!</p> 
                </div>
            </div>
        </div>
        
        <div className='flex gap-6 pb-16 bg-black text-white'>
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
        
        <footer className='flex place-content-between p-10 border-y-2 border-black bg-black text-white'>
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

export default LandingFull