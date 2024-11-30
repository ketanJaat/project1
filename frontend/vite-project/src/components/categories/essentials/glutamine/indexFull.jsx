import React, { useEffect, useState } from 'react'
import NavbarFull from '../../../navbarFull'
import { CiHome } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from 'react-redux';
import proteinDabba from '../../../../assets/proteinDabba.png'
import { FaCartPlus } from "react-icons/fa";
import logo from '../../../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from 'axios' 



const indexFull = () => {


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
        .includes()
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
    <div className='overflow-x-hidden'>
        <NavbarFull/>

        <div className='flex relative gap-10 px-6 border-y-2 border-black'>{/* browse all category bar */}
            <button onClick={handleClick} className='relative group bg-green-600'>Browse all categories</button>
            {/* DROPDOWN OF CONTENT */}
            <div className={`bg-white ${isBrowseClick ? 'visible' : 'invisible'} z-10 p-8 px-5 w-1/3 h-screen fixed -mt-[122px] -ml-6`}>
                <div className='flex place-content-between bg-green-700'>  
                    <div>Categories</div>
                    <div onClick={handleClick} className='bg-yellow-600'><HiMiniXMark /></div>
                </div>
                <div className='bg-orange-500 h-full flex flex-col gap-10 relative'>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('protein')} className='w-2/5 bg-yellow-700 p-2 h-10'>protein</button>
                        <div className={`bg-purple-500 absolute ml-44 ${activeSection === 'protein' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/protein/all'>All protein</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/protein/blend'>blend protein</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/protein/whey'>whey protein</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/protein/iso'>isolate protein</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex '>
                        <button onClick={() =>  handleSectionClick('mass')} className='w-2/5 bg-yellow-700 p-2'>mass & muscle gainer</button>
                        <div className={`bg-purple-500 absolute ml-44 -mt-20 group-visited:visible ${activeSection === 'mass' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-2 border-black p-2 py-6'><a  href='/shop/mass&muscleGainer'>All mass & muscle gainer</a></div>
                            <div className='border-2 border-black p-2 py-6'><a  href='/shop/mass&muscleGainer'>mass & muscle gainer</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('weight loss')} className='w-2/5 bg-yellow-700 p-2'>weight loss</button>
                        <div className={`bg-purple-500  absolute ml-44 -mt-40 group-visited:visible ${activeSection === 'weight loss' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/weightloss/all'>All weight loss</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/weightloss/L-carnitine'>l carnitine</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/weightloss/fatburners'>fat  burner</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/weightloss/CLA'>cla</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('essentials')} className='w-2/5 bg-yellow-700 p-2'>essentials</button>
                        <div className={`bg-purple-500  absolute ml-44 -mt-60 group-visited:visible ${activeSection === 'essentials' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/essentials/all'>all essentials</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/essentials/energypowder'>Energy Powder</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/essentials/bcaa-amino'>BCAA & Amino</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/essentials/preworkout'>Pre Workout</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/essentials/glutamine'>Glutamine</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/essentials/creatine'>creatine</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/essentials/gymessentials'>gym essentials</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('health & Wellness')} className='w-2/5 bg-yellow-700 p-2'>health & Wellness</button>
                        <div className={`bg-purple-500  absolute ml-44 -mt-80 group-visited:visible ${activeSection === 'health & Wellness' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/healthwellness/all'>All health & Wellness</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/healthwellness/multivitamins'>Multi vitamins</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/healthwellness/fishoil'>fish oil</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/healthwellness/digestiveenzymes'>digestive enzymes</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/healthwellness/testobooster'>testo booster</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/healthwellness/sportshealthy'>sports healthy</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/healthwellness/healthyjoints'>healthy joints</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('Muscle Pumping')} className='w-2/5 bg-yellow-700 p-2'>Muscle Pumping</button>
                        <div className={`bg-purple-500  absolute ml-44 -mt-[400px] group-visited:visible ${activeSection === 'Muscle Pumping' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/musclepumping/all'>All Muscle Pumping</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/musclepumping/l-arginine'>L-arginine</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/musclepumping/citruline'>Citrulline</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('stacks')} className='w-2/5 bg-yellow-700 p-2'>stacks</button>
                        <div className={`bg-purple-500  absolute ml-44 -mt-[480px] group-visited:visible ${activeSection === 'stacks' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/stacks/all'>All stacks</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/stacks/bulkbody'>Bulk body</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/stacks/fatloss'>fat loss</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/stacks/massgaining'>muscle gaining</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/stacks/musclegaining'>mass gaining</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/stacks/sizegaining'>size gaining</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/stacks/cuttingstack'>cutting stack</a></div>
                        </div>
                    </div>
                    <div className='w-full  flex'>
                        <button onClick={() => handleSectionClick('carbo')} className='w-2/5 bg-yellow-700 p-2'>carbo</button>
                        <div className={`bg-purple-500  absolute ml-44 -mt-[560px] group-visited:visible ${activeSection === 'carbo' ? 'block' : 'hidden'}  w-3/5 `}>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/carbo/all'>All carbo</a></div>
                            <div className='border-2 border-black p-2 py-6'><a href='/shop/carbo/carbo'>carbo</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-6 bg-orange-400 h-16'>
                <div className='h-full'>
                    <div className='relative group flex items-center justify-center bg-gray-700 h-full'>
                        <div className=''>Brands</div>
                        <RiArrowDropDownLine />
                        <div className='absolute mt-[556px] rounded-2xl ml-[735px] invisible group-hover:visible bg-green-300 gap-10 w-[800px] h-[490px] grid grid-rows-11 grid-cols-3 grid-flow-col p-5 px-auto z-50 '>
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
                    <div className='group flex  items-center justify-center bg-gray-700 h-full'>
                        <div>Goals</div>
                        <RiArrowDropDownLine />
                        <div className='absolute mt-[320px] ml-40 rounded-2xl invisible p-4 gap-4  group-hover:visible bg-green-300  w-fit h-fit grid grid-flow-row z-50 '>
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
                    <div className='group flex items-center justify-center bg-gray-700 h-full'>
                        <p>Deals</p>
                        <div className='absolute mt-[240px] ml-20 invisible p-4 gap-4 rounded-2xl group-hover:visible bg-green-300 w-fit h-fit grid  grid-flow-row z-50'>
                                <p>Pick of the day</p>
                                <p>star x sale</p>
                                <p>super saving sale</p>
                                <p>gnc deals</p>
                        </div>
                    </div>
                </div>
                <p>Blogs</p>
                <div className='flex items-center h-full'>
                    <div className='group flex items-center justify-center bg-gray-700 h-full'>
                        <p>Customer Support</p>
                        <RiArrowDropDownLine />
                        <div className='absolute mt-[440px] ml-20 invisible w-64 gap-4 p-4 rounded-2xl  group-hover:visible bg-green-300  w- h-fit grid grid-flow-row z-50'>
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
                <img className='w-full -z-10 h-44' src='https://www.supplementsvilla.com/uploads/sliders/65c4d43fc691d.jpg'/>
            </div>
        </div>

        <div className='flex gap-10 p-6 border-y-2 border-black'>{/* browse all category bar */}
            <div className='flex items-center gap-6'>
                <div className='flex items-baseline'>
                    <CiHome />
                    <p>Home</p>
                </div>
                <div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='flex items-baseline'>
                    <p>shop</p>
                </div>
                <div>
                    <MdKeyboardArrowRight />
                </div>
                <div className='flex items-center'>
                    <p>Proteins</p>
                </div>
            </div>
        </div>

        <div className='w-screen flex'>
            <div className='w-1/3 bg-yellow-800'>
                dsaf
            </div>
            <div className='grid grid-cols-6 grid-flow-row gap-4 bg-slate-600 p-2'>
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
        </div>

        <div className='p-20 flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
                <div className='text-4xl'>
                    What are proteins
                </div>
                <div>
                    Proteins are large molecules made up of the building blocks known as amino acids. Carbon, hydrogen, oxygen, nitrogen, sulphur, and other elements are found in proteins. One or more twisted and folded strands of amino acids combine to produce enormous, complex structures known as protein molecules. The most fundamental and significant parts of life actively involve proteins, which are extremely complex molecules. These include molecular recognition, cellular communication, mobility, defense, and metabolism.
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='text-4xl'>
                        What are the benefits of protein?
                    </div>
                    <div>
                        Three main benefits of protein: All of the necessary amino acids are present in high-quality proteins, which are also abundant in branched-chain amino acids (BCAAs). One of these BCAAs, leucine, is essential for stimulating muscle development and recovery during resistance and endurance training. Animal-based foods such as lean chicken, beef, fish, dairy, egg products, and whole eggs are sources of these high-quality proteins. When ingested consistently throughout the day, protein also aids in maintaining your muscle mass. Maintaining your metabolism also depends on having enough muscular mass. The fact some people are continually hungry is one of the primary problems for those attempting to lose weight and for athletes who burn a lot of calories. Because protein helps you feel full for a longer amount of time than carbs or fat, it can be very helpful in this situation. Therefore, choose snacks that are richer in protein if you're seeking to cut back on unhealthy eating.
                    </div>
                </div>
            <div className='flex flex-col gap-3'>
                <div className='text-4xl'>
                    Where to buy protein
                </div>
                <div>
                    There are many different ways to get protein supplements, including powders you combine with milk or water, shakes that are already mixed and ready to drink, and bars. Whey, casein, and soy are the three most often utilized protein forms. Whey and casein are milk-based proteins; vegetarians and anyone with dairy allergies should go for soy instead. Although there are other possibilities in India, trust SupplemenntsVilla when purchasing protein. You don't have to worry about the price or packaging because they have the greatest brands.
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='text-4xl'>
                    Top five brands of Whey Protein
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl'>
                        1. Star X
                    </div>
                    <div>
                        Imagine a protein supplement with a dessert-like flavor. Exactly that is what Star X. A protein powder with all the essential ingredients and mouth watering flavors. Given that it includes no fats, carbs, or sweets, this protein powder is among the best for helping people lose weight. This protein powder's unique fat-burning combination assists in developing a lean physique. The range of protein powder was created specifically for women and includes calcium, vitamin D, and folic acid.
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl'>
                        1. Star X
                    </div>
                    <div>
                        Imagine a protein supplement with a dessert-like flavor. Exactly that is what Star X. A protein powder with all the essential ingredients and mouth watering flavors. Given that it includes no fats, carbs, or sweets, this protein powder is among the best for helping people lose weight. This protein powder's unique fat-burning combination assists in developing a lean physique. The range of protein powder was created specifically for women and includes calcium, vitamin D, and folic acid.
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl'>
                        1. Star X
                    </div>
                    <div>
                        Imagine a protein supplement with a dessert-like flavor. Exactly that is what Star X. A protein powder with all the essential ingredients and mouth watering flavors. Given that it includes no fats, carbs, or sweets, this protein powder is among the best for helping people lose weight. This protein powder's unique fat-burning combination assists in developing a lean physique. The range of protein powder was created specifically for women and includes calcium, vitamin D, and folic acid.
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl'>
                        1. Star X
                    </div>
                    <div>
                        Imagine a protein supplement with a dessert-like flavor. Exactly that is what Star X. A protein powder with all the essential ingredients and mouth watering flavors. Given that it includes no fats, carbs, or sweets, this protein powder is among the best for helping people lose weight. This protein powder's unique fat-burning combination assists in developing a lean physique. The range of protein powder was created specifically for women and includes calcium, vitamin D, and folic acid.
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl'>
                        1. Star X
                    </div>
                    <div>
                        Imagine a protein supplement with a dessert-like flavor. Exactly that is what Star X. A protein powder with all the essential ingredients and mouth watering flavors. Given that it includes no fats, carbs, or sweets, this protein powder is among the best for helping people lose weight. This protein powder's unique fat-burning combination assists in developing a lean physique. The range of protein powder was created specifically for women and includes calcium, vitamin D, and folic acid.
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='text-4xl'>
                    FAQs
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl'>
                        1. How to use protein powder?
                    </div>
                    <div>
                        You can use Whey protein powder before a workout or consume amino acids through soy or egg protein. If you want to get additional nutrients, consume rice protein powder. If you want slow digestion, try pea protein powder.
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl'>
                        2. Is protein powder good for health?
                    </div>
                    <div>
                        Protein powders are typically regarded as safe, but if you consume a lot of it, you can encounter digestive adverse effects. Dairy-based protein powder may cause stomach distress, bloating, and gas if you are lactose intolerant or otherwise sensitive to lactose.
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl'>
                        3. Can non-gym people require protein powder?
                    </div>
                    <div>
                        Of course, a typical person can take protein powder to meet their nutritional requirements. Why not? However, it is advised if you can meet your needs through a natural diet or by supplementing your regular diet with eggs, poultry, or extra vegetables, along with leading a healthy lifestyle that keeps you active and fit.
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl'>
                        4. How to buy genuine protein powders in India?
                    </div>
                    <div>
                        If you are looking where to buy protein and want to know about protein, I would suggest going for SupplementsVilla. They have the best Whey proteins, Isolate proteins, Blend proteins, and whatnot. Not only that, they have a huge range of supplements for bodybuilding, and fitness, and those will help in improving your lifestyle real quick. Also, you can shop for the best brands from them at affordable prices.
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='text-4xl'>
                        5. When should we take protein powder?
                    </div>
                    <div>
                        Depending on your desired level of fitness and health, depending on whether you want to gain or lose muscle, you might want to ingest it at a specific time of day. Here are the ideal protein intake timings based on your individual objectives.

                        <div>
                            When you want to lose weight
                        </div>
                        <div>
                            When you are trying to prevent muscle loss
                        </div>
                        <div>
                            When you are exercising or recovering
                        </div>
                        <div>
                            When you are building muscle
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex gap-6 pb-16'>
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

export default indexFull