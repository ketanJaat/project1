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
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaCartPlus } from "react-icons/fa";
import axios from 'axios'


const LandingSm = () => {

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


    const [rightSwipe1 , setRightSwipe1] = useState(0);

    // const handleRightSwipe = () => {
    //     setRightSwipe(!rightSwipe);
    // }


    const handleRightSwipe1 = () => {
        console.log('right clicked')
        setRightSwipe1((prevSwipe) => (prevSwipe < 900 ? prevSwipe + 300 : 0));
        console.log(rightSwipe1)
    }

    const handleLeftSwipe1 = () => {
        console.log('left clickeds')
        setRightSwipe1((prevSwipe) => (prevSwipe > 0 ? prevSwipe - 300 : 0));
        console.log(rightSwipe1)
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

     ////////////////////

     const [rightSwipe6 , setRightSwipe6] = useState(0);

     // const handleRightSwipe = () => {
     //     setRightSwipe(!rightSwipe);
     // }
 
     const handleRightSwipe6 = () => {
         setRightSwipe6((prevSwipe) => (prevSwipe < 900 ? prevSwipe + 1520 : 0));
     }
 
     const handleLeftSwipe6 = () => {
         setRightSwipe6((prevSwipe) => (prevSwipe > 0 ? prevSwipe - 1520 : 0));
     }
 

  return (
    <div className='overflow-x-hidden text-gray-400'>
        <div className=' mt- relative'>{/*poster */}
            <div className='flex items-center w-full bg-black'>
                <div className='absolute flex w-screen place-content-between px-10 z-20'>
                    <PiArrowSquareLeftDuotone onClick={handleLeftSwipe5} className='text-white'/>
                    <PiArrowSquareRightDuotone onClick={handleRightSwipe5} className='text-white'/>
                </div>
                <div className='w-full z-10 flex items-center transform transition-transform duration-300'
                    style={{transform: `translateX(-${rightSwipe5}px)`}}>
                    <img className='min-w-full h-fit' src='https://www.supplementsvilla.com/uploads/sliders/65c4d43fc691d.jpg'/>
                    <img className='min-w-full h-fit' src={blocks}/>
                </div>
            </div>
        </div>

        <div className='h-screen bg-black -mt-6 flex flex-col py-4 gap-4'>
            <p className='p-6 flex items-center justify-center '>Featured Product</p>
            <div className='flex place-content-between items-center px-1 h-1/2 bg-gradient-to-b from-black via-gray-800 to-black'>
                <button onClick={handleLeftSwipe1} className='group'>
                <PiArrowSquareLeftDuotone className='text-3xl text-gray-950 '/>
                </button>
                <div className=' w-5/6 h-full overflow-hidden items-center gap-3 group-hover:translate-x-[200px] relative rounded-xl bg-gradient-to-b from-gray-700 via-gray-400 to-zinc-700 grid grid-flow-col px-2'>
                    {
                        filterData.length > 0 && 
                        filterData.map(
                            (products) => {
                                return(
                                    <div className='bg-gray-800 rounded-2xl min-w-40 h-full flex flex-col place-content-evenly px-2 transform transition-transform duration-300' 
                                        style={{transform: `translateX(-${rightSwipe1}px)`}}
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
                                                <div className='flex items-center gap-2 text-gray-200'>
                                                    <FaCartPlus className='text-xl'/>
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

                <PiArrowSquareRightDuotone onClick={handleRightSwipe1} className='text-gray-950 text-3xl group'/>
            </div>

            <div className='bg-black grid grid-cols-1 grid-rows-1 gap-4 px-10 mt-6'>
                <div>
                    <img className='rounded-xl' src={blocks}/>
                </div>
            </div>
        </div>

        <div className='flex justify-center gap-7 pt-1 w-screen p-10 bg-gradient-to-b from-black via-gray-800 to-black'>

            <button onClick={handleLeftSwipe2} className='group'>
                <PiArrowSquareLeftDuotone  className='text-gray-950 text-3xl'/>
            </button>

            <div className='w-5/6 h-full overflow-hidden place-content-evenly px-2 flex bg-gradient-to-b from-black via-gray-800 to-black'>    
                <div className='h-full w-full flex transform transition-transform duration-300'
                    style={{transform: `translateX(-${rightSwipe2}px)`}}>
                    <img className='w-fit' src={poster}/>
                    <img className='w-fit' src={poster}/>
                </div>            
            </div>
            
            <button className='group'>
                <PiArrowSquareRightDuotone onClick={handleRightSwipe2} className='text-gray-950 text-3xl'/>
            </button>

        </div>

        <div className='h-screen bg-black flex flex-col py-4 gap-4'>
            <p className=' flex items-center ml-12 pb-5 -mt-4 '>gnc deal</p>
            <div className='flex place-content-between items-center px-1 h-1/2 bg-gradient-to-b from-black via-gray-800 to-black'>
                <button className='group'>
                    <PiArrowSquareLeftDuotone onClick={handleLeftSwipe3} className='text-gray-950 text-3xl'/>
                </button>
                <div className=' w-5/6 h-full overflow-hidden items-center gap-3 group-hover:translate-x-[200px] relative bg-gradient-to-b from-gray-700 via-gray-400 to-zinc-700 rounded-2xl grid grid-flow-col px-2'>
                    {
                        gncFilter.length > 0 && 
                        gncFilter.map(
                            (products) => {
                                return(
                                    <div className='bg-gray-800 rounded-2xl min-w-40 h-full flex flex-col place-content-evenly px-2 transform transition-transform duration-300' 
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
                                                    <FaCartPlus className='text-xl textg-gray-200'/>
                                                    <p lassName='text-gray-200'>Cart</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>

                <PiArrowSquareRightDuotone onClick={handleRightSwipe3} className='text-gray-950 text-3xl group'/>
            </div>

            
        </div>

        <div className='h-screen bg-black flex flex-col -mt-64 gap-4'>
            <p className='ml-12 mt-8 mb-5 flex items-center '>gnc deal</p>
            <div className='flex place-content-between items-center px-1 h-1/2 bg-gradient-to-b from-black via-gray-800 to-black'>
                <button className='group'>
                    <PiArrowSquareLeftDuotone onClick={handleLeftSwipe3} className='text-gray-950 text-3xl'/>
                </button>
                <div className=' w-5/6 h-full overflow-hidden items-center gap-3 group-hover:translate-x-[200px] relative bg-gradient-to-b from-gray-700 via-gray-400 to-zinc-700 rounded-2xl grid grid-flow-col px-2'>
                    {
                        gncFilter.length > 0 && 
                        gncFilter.map(
                            (products) => {
                                return(
                                    <div className='bg-gray-800 rounded-2xl min-w-40 h-full flex flex-col place-content-evenly px-2 transform transition-transform duration-300' 
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
                                                    <FaCartPlus className='text-xl text-gray-200'/>
                                                    <p lassName='text-gray-200'>Cart</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>

                <PiArrowSquareRightDuotone onClick={handleRightSwipe3} className='text-gray-950 text-3xl group'/>
            </div>

            
        </div>

        <div className='h-screen bg-black flex flex-col -mt-64 gap-4'>
            <p className='ml-12 mt-20 mb-5 flex items-center '>gnc deal</p>
            <div className='flex place-content-between items-center px-1 h-1/2 bg-gradient-to-b from-black via-gray-800 to-black'>
                <button className='group'>
                    <PiArrowSquareLeftDuotone onClick={handleLeftSwipe3} className='text-gray-950 text-3xl'/>
                </button>
                <div className=' w-5/6 h-full overflow-hidden items-center gap-3 group-hover:translate-x-[200px] relative bg-gradient-to-b from-gray-700 via-gray-400 to-zinc-700 rounded-2xl grid grid-flow-col px-2'>
                    {
                        gncFilter.length > 0 && 
                        gncFilter.map(
                            (products) => {
                                return(
                                    <div className='bg-gray-800 rounded-2xl min-w-40 h-full flex flex-col place-content-evenly px-2 transform transition-transform duration-300' 
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
                                                    <FaCartPlus className='text-xl text-gray-200'/>
                                                    <p lassName='text-gray-200'>Cart</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>

                <PiArrowSquareRightDuotone onClick={handleRightSwipe3} className='text-gray-950 text-3xl group'/>
            </div>

            
        </div>

        {/* <div className='grid grid-cols-2 grid-rows-1 bg-gray-500 px-10 h-52 gap-3'>
            <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl'>
                <img className='rounded-xl h-32' src={brand}/>
                <p>international protein</p>
            </div>
            <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl'>
                <img className='rounded-xl h-32' src={brand}/>
                <p>international protein</p>
            </div>
        </div> */}
        <div className='flex -mt-28 bg-gray-500 px-10 h-52 m-auto w-[1380px]  justify-center overflow-x-hidden group'>
            <div className='group flex bg-gradient-to-b from-black via-gray-500 to-black  gap-8 transform transition-transform duration-300 animate-slide hover:animate-none'>
                <div className=' flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center border-2 border-black rounded-2xl min-w-36'>
                    <img className='rounded-xl h-32' src={brand}/>
                    <p>international protein</p>
                </div>
            </div>
            
            
            
        </div>

        <div className='flex place-content-center flex-col'>
            <div className='bg-gradient-to-b from-black via-gray-800 to-black px-10 flex justify-center h-80 items-center'>
                <video className='h-64 border-gray-600 border-2 rounded-2xl bg-black' src={video} type='video/mp4' autoPlay muted/>
            </div>
            <div className=' bg-gradient-to-b from-black via-gray-800 to-black flex flex-col gap-5 justify-center px-10 pb-10 text-gray-300'>
                <div className='text-4xl font-bold'> We Are</div>
                <div className='text-4xl font-bold'>Supplements Villa Family</div>
                <div>Supplements Villa is India's Finest supplements store that aims to provide you authentic supplements, health, fitness & wellness products at pocket friendly prices at free of delivery cost.</div>
                <div>
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>

        <div className='flex gap-9 flex-col px-10 py-10 bg-black'>
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

        <div className='flex gap-6 pb-16 flex-col justify-center items-center bg-black'>
            <div className='flex flex-col justify-center items-center gap-3 w-2/3 px-10'>
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
                <div className='flex flex-col gap-2'>
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
                <div className='flex flex-col gap-2'>
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
                <div className='flex flex-col gap-2'>
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
                <div className='flex flex-col gap-2'>
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

        <footer className='flex place-content-between p-8 border-y-2 border-black bg-black'>
            <div className='text-base'>
                <p className='text-gray-600'>Copyright © 2024, supplementsvilla.com</p>
            </div>
            
        </footer>
    </div>
  )
}

export default LandingSm