import React from 'react'
import { CiHome } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from 'react-redux';
import proteinDabba from '../../../../assets/proteinDabba.png'
import { FaCartPlus } from "react-icons/fa";
import logo from '../../../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from 'react'
import Navbarlg from '../../../Navbarlg';



const IndexLg = () => {


    const products = useSelector((state) => state.product.products);

    const [serachTerm , setSearchTerm] = useState('');

    const filterData = products.filter(
        (product) => product.name.toLowerCase()
        .includes('protein')
    );




  return (
    <div>
        <Navbarlg/>

        <div className='  relative '>{/*poster */}
            <div className='flex items-center w-full'>
                <img className='w-full -z-10 h-32' src='https://www.supplementsvilla.com/uploads/sliders/65c4d43fc691d.jpg'/>
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

        <div className='grid grid-cols-3 grid-flow-row gap-4 bg-slate-600 p-2'>
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

export default IndexLg