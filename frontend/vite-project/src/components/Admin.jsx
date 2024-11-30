// import axios from 'axios';
// import React, { useState } from 'react'
// import { useSearchParams } from 'react-router-dom';


// const Admin = () => {

//     const [name , setName] = useState('');
//     const [saving , setSaving] = useState();
//     const [price , setPrice] = useState('');
//     const [serving , setServing] = useState();
//     const [weight , setWeight] = useState('');
//     const [servingSize , setServingSize] = useState('');
//     const [vegetarian , setVegetarian] = useState('');
//     const [flavour , setFlavour] = useState('');
//     const [country , setCountry] = useState('');
//     const [brand , setBrand] = useState('');
//     const [packaging , setPackaging] = useState('');
//     const [goal , setGoal] = useState('');
//     const [expdate , setExpdate] = useState('');
//     const [lifestage , setLifestage] = useState('');
//     const [gender , setGender] = useState('');
//     const [description , setDescription] = useState('');
//     const [ingredients , setIngredients] = useState('');
//     const [directionforuse , setDirectionforuse] = useState('');
//     const [searchParams , setSerachParams] = useSearchParams();
//     const [img , setImg] = useState();

//     const handleSubmit = async() => {
//         try{
//             const res = await axios.post('http://localhost:4000/api/v1/createproduct' , {
//             name : name,
//             saving : saving,
//             price : price,
//             serving : serving,
//             weight: weight,
//             servingSize : servingSize,
//             vegetarian : vegetarian,
//             flavour : flavour,
//             country : country,
//             brand : brand,
//             packaging : packaging,
//             goal : goal,
//             expdate : expdate,
//             lifestage : lifestage,
//             gender : gender,
//             description : description,
//             ingredients : ingredients,
//             directionforuse : directionforuse,
//             id : Date.now().toString(36),
//             createdAt : new Date().toLocaleString()
//             })

//             console.log('responese is : ' , res.data);
//         }
//         catch(error){
//             console.error(error.message);
//         }
//     }


//   return (
//     <div>
//         add product

//         {/* INPUT COMING BIG CODE */}
//         <div className='flex flex-col w-1/2 gap-2'>
//                     <input className='border-2 border-black'
//                         placeholder='enter name'
//                         type='text'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter saving'
//                         type='text'
//                         value={saving}
//                         onChange={(e) => setSaving(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter price'
//                         type='text'
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter serving'
//                         type='text'
//                         value={serving}
//                         onChange={(e) => setServing(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter weight'
//                         type='text'
//                         value={weight}
//                         onChange={(e) => setWeight(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter serving size'
//                         type='text'
//                         value={servingSize}
//                         onChange={(e) => setServingSize(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter vegetarian'
//                         type='text'
//                         value={vegetarian}
//                         onChange={(e) => setVegetarian(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter flavour'
//                         type='text'
//                         value={flavour}
//                         onChange={(e) => setFlavour(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter country'
//                         type='text'
//                         value={country}
//                         onChange={(e) => setCountry(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter brand'
//                         type='text'
//                         value={brand}
//                         onChange={(e) => setBrand(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter packaging'
//                         type='text'
//                         value={packaging}
//                         onChange={(e) => setPackaging(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter goal'
//                         type='text'
//                         value={goal}
//                         onChange={(e) => setGoal(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter exp. date'
//                         type='text'
//                         value={expdate}
//                         onChange={(e) => setExpdate(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter lifestage'
//                         type='text'
//                         value={lifestage}
//                         onChange={(e) => setLifestage(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter gender'
//                         type='text'
//                         value={gender}
//                         onChange={(e) => setGender(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter description'
//                         type='text'
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter ingredients'
//                         type='text'
//                         value={ingredients}
//                         onChange={(e) => setIngredients(e.target.value)}
//                     />
//                      <input className='border-2 border-black'
//                         placeholder='enter direction for use'
//                         type='text'
//                         value={directionforuse}
//                         onChange={(e) => setDirectionforuse(e.target.value)}
//                     />
//                     <input className='border-2 border-black'
//                         placeholder='enter image'
//                         type='file'
//                         accept='image'
//                         value={img}
//                         onChange={(e) => setImg(e.target.value)}
//                     />
//                     <button className='border-2 border-black' onClick={handleSubmit}>Submit</button>
//                 </div>
//     </div>
//   )
// }

// export default Admin


import React, { useState } from 'react'
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { PiArrowSquareRightDuotone } from "react-icons/pi";
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterFull = () => {

    const navigate = useNavigate();

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

            navigate('/admin/addproduct')
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


    const [isBrowseClick , setIsBrowseClick] = useState(false);

    const handleClick = () => {
        setIsBrowseClick(!isBrowseClick);
    }

   
    const [activeSection, setActiveSection] = useState(null); // Tracks the active section

    const handleSectionClick = (section) => {
        setActiveSection((prevSection) => (prevSection === section ? null : section)); // Toggle the same section or activate a new one
    };

    const login = async() => {
        try{
            const res = await axios.post('http://localhost:4000/api/v1/login' , {
                email : email,
                password : password
            })

            if(res.data.success){
                const result = await axios.post('http://localhost:4000/api/v1/admin/shop' , {
                    token : res.data.token
                })


                // Check success status of the shop data API call
                if (result.data.success) {
                    if(res.data.user.role === 'admin'){
                        navigate('/admin/shop');
                    }
                    else{
                        alert('you are not admin')
                    }
                }                
            }
        }
        catch(error){
            console.log(error.message);
        }

        // setEmail('')
        // setPassword('')
    }

    const [forms , setForms] = useState('email');

    const handleForms = (e) => {
        setForms(e.target.value)
    }


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

        <div className='flex bg-green-300'>{/* browse all category bar */}
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
        </div>

        <div className='bg-orange-400 flex flex-col h-screen justify-center items-center gap-6'>
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
                        <div>
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
                                            <input 
                                                placeholder='email'
                                                type='text'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </label>
                                        <label className='flex flex-col'>
                                            password
                                            <input 
                                                placeholder='password'
                                                type='text'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </label>
                                        <button className='border-2 border-black' onClick={login}>login</button>
                                        <p>forgot your password</p>
                                        <a href='/sign-up'>don't have an account ? sign up now</a>
                                    </div>
                                )
                            }
                        </div>
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

export default RegisterFull