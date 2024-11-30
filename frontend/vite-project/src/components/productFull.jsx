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



  return (
    
    <div>

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
          <div className='w-2/5 h-screen bg-yellow-400 flex flex-col justify-center items-start'>
              <div className='bg-green-500 h-4/5 w-full p-10' >
                  <img className='h-full' src={count === 1
                                                ? product?.imageUrl1
                                                : count === 2
                                                ? product?.imageUrl2
                                                : count === 3
                                                ? product?.imageUrl3
                                                : middle}
                    />
              </div>
              <div className='flex items-center bg-purple-400 w-4/5 place-content-between'>
                  <MdKeyboardArrowLeft />
                  <div className='flex'>
                      <img className='h-20' onClick={handle1} src={product?.imageUrl1}/>
                      <img className='h-20' onClick={handle2} src={product?.imageUrl2}/>
                      <img className='h-20' onClick={handle3} src={product?.imageUrl3}/>
                  </div>
                  <MdKeyboardArrowRight/>
              </div>
          </div>
          <div className='w-3/5 h-screen bg-orange-600 flex flex-col gap-16 p-10'>
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
                  <select className='w-1/2'>
                      <option value='Double Chocolate Cookie'>{product?.flavour}</option>
                  </select>
                  <p>Size</p>
                  <div>{product?.weight}</div>
                  <div className='flex gap-6'>
                      <div className='flex bg-gray-500 items-center gap-3'>
                          <FaMinus />
                          <p>1</p>
                          <FaPlus />
                      </div>
                      <div className='flex items-center gap-2'>
                          <FaCartPlus/>
                          <button onClick={addToCart}>ADD TO CART</button>
                      </div>
                      <div>
                          QUICK BUY
                      </div>
                  </div>
                  
              </div>
              <div className='flex flex-col gap-3 '>
                  <div className='flex gap-2 bg-yellow-500 w-2/5 place-content-between p-2'>
                      <input className='p-2 rounded-lg' placeholder='enter pincode'/>
                      <div className='rounded-full bg-green-600 p-1'>check</div>
                  </div>
                  <div>
                      enter pincode for exact delivery time/charges
                  </div>
              </div>
              <div>
                  Share this product
              </div>
          </div>
      </div>

      <div className='pl-36 w-5/6 pt-16 flex flex-col gap-12'>
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
          <div className='flex flex-col gap-7'>
              <table className='border-2 border-black w-2/5'>
                  <caption className='border-2 border-black'>General Traits</caption>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Weight In Lbs.	</td>
                      <td >{product?.weight}</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Weight In kg</td>
                      <td>{product?.weight}</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Number of Servings	</td>
                      <td>{product?.serving}</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Serving Size		</td>
                      <td>{product?.servingSize}</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Vegetarian/Non-Vegetarian	</td>
                      <td>{product?.vegetarian}</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Flavour	</td>
                      <td>{product?.flavour}</td>
                  </tr>
              </table>
              <table className='border-2 border-black w-2/5'>
                  <caption className='border-2 border-black'>Additional Information</caption>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Country of Origin	</td>
                      <td>{product?.country}</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Brand Origin	</td>
                      <td>{product?.brand}</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Form</td>
                      <td>Powder</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Packaging</td>
                      <td>{product?.packaging}</td>
                  </tr>
                  <tr>
                      <td className='border-2 border-black'>Goal	</td>
                      <td>{product?.goal}</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Protein	</td>
                      <td>30g</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Exp Date		</td>
                      <td>{product?.expdate}</td>
                  </tr>
              </table>
              <table className='border-2 border-black w-2/5'>
                  <caption className='border-2 border-black'>Special Traits</caption>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>LifeStyle	</td>
                      <td>{product?.lifestage}</td>
                  </tr>
                  <tr className='border-2 border-black'>
                      <td className='border-2 border-black'>Gender	</td>
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

      <div className='h-screen bg-orange-400 flex items-center justify-center'>
          <div className='w-5/6 h-5/6 bg-green-600 grid grid-cols-4 p-2 gap-2'>
              <div className='bg-gray-500'> dfsa</div>
              <div className='bg-gray-500'>dssdf</div>
              <div className='bg-gray-500'>asdf</div>
              <div className='bg-gray-500'>asdf</div>
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

export default productFull


