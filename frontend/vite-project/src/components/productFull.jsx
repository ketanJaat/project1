import React, { useEffect, useState } from 'react'
import { CiHome } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import proteinDabba from '../assets/proteinDabba.png'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import logo from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useParams, useSearchParams } from 'react-router-dom';
import { HiMiniXMark } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../redux/ProductSlice';
import axios from 'axios';
import middle from '../assets/middle.png'
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { PiArrowSquareRightDuotone } from "react-icons/pi";




const productFull = () => {
    
    const dispatch = useDispatch();


    const {id} = useParams();

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

    const product = products.filter((p) => p.id === id)[0];

    const [isBrowseClick , setIsBrowseClick] = useState(false);

    const handleClick = () => {
        setIsBrowseClick(!isBrowseClick);
    }

    const [activeSection, setActiveSection] = useState(null); // Tracks the active section

    const handleSectionClick = (section) => {
        setActiveSection((prevSection) => (prevSection === section ? null : section)); // Toggle the same section or activate a new one
    };

    const [allCartItem , setAllCartItem] = useState([]);


    useEffect(() => {

      const fetchProducts = async() => {
            try{
                const response = await axios.get('http://localhost:4000/api/v1/getcart');
                setAllCartItem(response.data.product);
            }
            catch(error){
                console.log('error occured during fetching products')
                console.error(error.message.products);
            }
        };

        fetchProducts();
      
    }, []);    

    const addToCart = async() => {
      try{
          const res = await axios.post('http://localhost:4000/api/v1/createCart' , {
          name : product?.name,
          saving : product?.saving,
          price : product?.price,
          serving : product?.serving,
          weight: product?.weight,
          servingSize : product?.servingSize,
          vegetarian : product?.vegetarian,
          flavour : product?.flavour,
          country : product?.country,
          brand : product?.brand,
          packaging : product?.packaging,
          goal : product?.goal,
          expdate : product?.expdate,
          lifestage : product?.lifestage,
          gender : product?.gender,
          description : product?.description,
          ingredients : product?.ingredients,
          directionforuse : product?.directionforuse,
          imageUrl1 : product?.imageUrl1 ,
          imageUrl2 : product?.imageUrl2 ,
          imageUrl3 : product?.imageUrl3 ,
          id : Date.now().toString(36),
          createdAt : new Date().toLocaleString()
          })

          console.log('responese is : ' , res.data);
      }
      catch(error){
          console.error(error.message);
      }
  }

  const [count , setCount] = useState(1);

  const handle1 = () => {
    setCount(1);
  }
  const handle2 = () => {
    setCount(2);
  }
  const handle3 = () => {
    setCount(3);
  }


  const [serachTerm , setSearchTerm] = useState('');

    const filterData = products.filter(
        (product) => product.name.toLowerCase()
        .includes(serachTerm.toLowerCase())
    );


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



  return (
    
    <div>

        <div className='flex relative gap-10 px-6 border-y-2 border-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>{/* browse all category bar */}
            <button onClick={handleClick} className='relative group '>Browse all categories</button>
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
            <div className='flex items-center gap-6 h-16'>
                <div className='h-full'>
                    <div className='relative group flex items-center justify-center h-full'>
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
                    <div className='group flex  items-center justify-center  h-full'>
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
                    <div className='group flex items-center justify-center  h-full'>
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
                    <div className='group flex items-center justify-center h-full'>
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

      <div className='flex gap-10 p-6 border-y-2 border-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>{/* browse all category bar */}
          <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2'>
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
              <div>
                  <MdKeyboardArrowRight />
              </div>
              <div className='flex items-center'>
                  <p>Whey protein</p>               
              </div>
              <div>
                  <MdKeyboardArrowRight />
              </div>
              <p>Proteins name</p>
          </div>
      </div>

      <div className='h-screen flex'>
          <div className='w-2/5 h-screen bg-black flex flex-col justify-center items-start'>
              <div className='bg-gray-600 h-4/5 w-full p-10' >
                  <img className='h-full' src={count === 1
                                                ? product?.imageUrl1
                                                : count === 2
                                                ? product?.imageUrl2
                                                : count === 3
                                                ? product?.imageUrl3
                                                : middle}
                    />
              </div>
              <div className='flex items-center justify-center bg-gradient-to-b from-black via-gray-800 to-black w-full  place-content-between'>
                  <div className='flex mt-5 gap-4'>
                      <img className='h-20' onClick={handle1} src={product?.imageUrl1}/>
                      <img className='h-20' onClick={handle2} src={product?.imageUrl2}/>
                      <img className='h-20' onClick={handle3} src={product?.imageUrl3}/>
                  </div>
              </div>
          </div>
          <div className='w-3/5 h-screen bg-black text-white flex flex-col gap-16 p-10'>
              <div className='flex flex-col gap-5'>
                  <p>{product?.name}</p>
                  <p>by {product?.country}</p>
                  <div className='flex gap-4'>
                      <div className='flex gap-2 items-center'>
                          <div className='flex'>
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                          </div>
                          <div className='flex items-center'>
                              <p>4</p>
                              <IoIosArrowDown />
                          </div>
                          
                      </div>

                      <p>(3 Rating & Reviews)</p>
                      
                  </div>
                  <div className='flex gap-4'>
                      <p>{product?.price}</p>
                      <p className=''>₹ 9,299.00</p>
                  </div>
                  <p>flavour</p>
                  <select className='w-1/2 text-black'>
                      <option value='Double Chocolate Cookie'>{product?.flavour}</option>
                  </select>
                  <p>Size</p>
                  <div>{product?.weight}</div>
                  <div className='flex gap-6'>
                      <div className='flex items-center gap-2'>
                          <FaCartPlus/>
                          <button onClick={addToCart}>ADD TO CART</button>
                      </div>
                  </div>
                  
              </div>
              <div>
                  Share this product
              </div>
          </div>
      </div>

      <div className='pl-36 w-full pt-16 flex flex-col gap-12 bg-black text-white'>
          <div className='flex gap-4'>
              <div>Description</div>
              <div>Videos</div>
              <div>Reviews</div>
          </div>
          <div>
              <div className='flex items-center gap-4'>
                  <FaTruck />
                  <p>Importer : </p>
              </div>
              <div>
                  {product?.brand} (✓ Brand Authorized)
              </div>
          </div>
          <div className='flex flex-col gap-7 bg-black'>
              <table className='border-2 border-white w-2/5'>
                  <caption className='border-2 border-white'>General Traits</caption>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Weight In Lbs.	</td>
                      <td >{product?.weight}</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Weight In kg</td>
                      <td>{product?.weight}</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Number of Servings	</td>
                      <td>{product?.serving}</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Serving Size		</td>
                      <td>{product?.servingSize}</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Vegetarian/Non-Vegetarian	</td>
                      <td>{product?.vegetarian}</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Flavour	</td>
                      <td>{product?.flavour}</td>
                  </tr>
              </table>
              <table className='border-2 border-white w-2/5'>
                  <caption className='border-2 border-white'>Additional Information</caption>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Country of Origin	</td>
                      <td>{product?.country}</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Brand Origin	</td>
                      <td>{product?.brand}</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Form</td>
                      <td>Powder</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Packaging</td>
                      <td>{product?.packaging}</td>
                  </tr>
                  <tr>
                      <td className='border-2 border-white'>Goal	</td>
                      <td>{product?.goal}</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Protein	</td>
                      <td>30g</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Exp Date		</td>
                      <td>{product?.expdate}</td>
                  </tr>
              </table>
              <table className='border-2 border-white w-2/5'>
                  <caption className='border-2 border-white'>Special Traits</caption>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>LifeStyle	</td>
                      <td>{product?.lifestage}</td>
                  </tr>
                  <tr className='border-2 border-white'>
                      <td className='border-2 border-white'>Gender	</td>
                      <td>{product?.gender}</td>
                  </tr>
              </table>
          </div>
              <div className='flex flex-col gap-4'>
                  <div>
                      Description
                  </div>
                  <div>
                      {product?.description}
                  </div>
              </div>
              <div className='flex flex-col gap-4'>
                  <div>
                      Ingredients:
                  </div>
                  <div>
                      {product?.ingredients}
                  </div>
              </div> 
              <div className='flex flex-col gap-4'>
                  <div>
                      Direction for use:
                  </div>
                  <div>
                      {product?.directionforuse}
                  </div>
              </div>
              <div className='flex flex-col gap-4'>
                  <div>
                      Warnings:
                  </div>
                  <div>
                      KEEP OUT OF REACH OF CHILDREN. Must be 18 years of age or older to purchase and/or use this product. Before taking PRO-ANTIUM
                  </div>
              </div>
      </div>

      <div className='h-screen bg-black flex items-center justify-center'>
          <div className='w-5/6 h-5/6 bg-gray-600 flex flex-col p-2 gap-2 '>
                <div className='text-3xl text-gray-200 '>
                    Related Products
                </div>
                <div className='w-full h-full p-2 gap-2 bg-gradient-to-b from-black via-gray-800 to-black'>
                    <div className='flex place-content-between items-center px-10 h-full bg-gradient-to-b from-black via-gray-800 to-black'>
                        <button onClick={handleLeftSwipe1} className='group m-0'>
                            <PiArrowSquareLeftDuotone className='text-6xl text-gray-950 '/>
                        </button>

                        <div className=' w- h-5/6 overflow-hidden items-center relative rounded-3xl bg-gradient-to-b from-gray-700 via-gray-400 to-zinc-700 grid grid-flow-col gap-10 grid-cols- grid-rows-1 px-7'>    

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

                        <button onClick={handleRightSwipe1} className='group m-0'>
                            <PiArrowSquareRightDuotone className='text-6xl text-gray-950 '/>
                        </button>

                        {/* <PiArrowSquareRightDuotone onClick={handleRightSwipe1}  className=' text-9xl group text-gray-950'/> */}
                    </div>
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

export default productFull


