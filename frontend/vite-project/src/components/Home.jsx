import React, { useState , useEffect } from 'react'
import logo from '../assets/logo.png'
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import NavbarFull from './NavbarFull';
import Navbarlg from './NavbarLg';
import NavbarSm from './NavbarSm';
import LandingFull from './LandingFull';
import LandingLg from './LandingLg';
import LandingSm from './LandingSm';
import ProductFull from './productFull';
import ProductLg from './ProductLg'
import ProductSm from './ProductSm'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addProductToCart } from '../redux/ProductSlice';
import ShopSm from './ShopSm';
import ShopLg from './ShopLg';
import Shop from './shop';
import axios from "axios"

const Home = () => {

    const [name , setName] = useState('');
    const [saving , setSaving] = useState();
    const [price , setPrice] = useState('');
    const [serving , setServing] = useState();
    const [weight , setWeight] = useState('');
    const [servingSize , setServingSize] = useState('');
    const [vegetarian , setVegetarian] = useState('');
    const [flavour , setFlavour] = useState('');
    const [country , setCountry] = useState('');
    const [brand , setBrand] = useState('');
    const [packaging , setPackaging] = useState('');
    const [goal , setGoal] = useState('');
    const [expdate , setExpdate] = useState('');
    const [lifestage , setLifestage] = useState('');
    const [gender , setGender] = useState('');
    const [description , setDescription] = useState('');
    const [ingredients , setIngredients] = useState('');
    const [directionforuse , setDirectionforuse] = useState('');
    const [searchParams , setSerachParams] = useSearchParams();
    const [img , setImg] = useState(null);


    const productId = searchParams.get('productId');
    const allProducts = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
      if(productId){
        const product = allProducts.find((p) => p._id === productId)
        setName(product.name),
        setBrand(product.brand)
      }
    }, [productId])
    


    // function createProduct(){
    //     const product = {
    //         name : name,
    //         saving : saving,
    //         price : price,
    //         serving : serving,
    //         weight: weight,
    //         servingSize : servingSize,
    //         vegetarian : vegetarian,
    //         flavour : flavour,
    //         country : country,
    //         brand : brand,
    //         packaging : packaging,
    //         goal : goal,
    //         expdate : expdate,
    //         lifestage : lifestage,
    //         gender : gender,
    //         description : description,
    //         ingredients : ingredients,
    //         directionforuse : directionforuse,
    //         img : img,
    //         _id : Date.now().toString(36),
    //         createdAt : new Date().toLocaleString()
    //     }

    //     if(productId){
    //         console.log('product already there');
    //     }
    //     else{
    //         dispatch(addProduct(product));
    //     }

    //     setName('');
    //     setBrand('');
    // }

    const handleSubmit = async() => {
        try{
            const formdata = new FormData();

            // Append all fields to formdata
            formdata.append("name", name);
            formdata.append("saving", saving);
            formdata.append("price", price);
            formdata.append("serving", serving);
            formdata.append("weight", weight);
            formdata.append("servingSize", servingSize);
            formdata.append("vegetarian", vegetarian);
            formdata.append("flavour", flavour);
            formdata.append("country", country);
            formdata.append("brand", brand);
            formdata.append("packaging", packaging);
            formdata.append("goal", goal);
            formdata.append("expdate", expdate);
            formdata.append("lifestage", lifestage);
            formdata.append("gender", gender);
            formdata.append("description", description);
            formdata.append("ingredients", ingredients);
            formdata.append("directionforuse", directionforuse);
            formdata.append("id", Date.now().toString(36)); // Unique ID
            formdata.append("createdAt", new Date().toLocaleString());
            formdata.append("img", img); // Image file

            const res = await axios.post('http://localhost:4000/api/v1/createproduct' , formdata , {
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            });

            console.log('responese is : ' , res.data);
        }
        catch(error){
            console.error(error.message);
        }
    }


  return (
    <div >
        <nav>
            <div className='hidden lg:block xl:block'>
                <NavbarFull/>
                <LandingFull/>
                {/* INPUT COMING BIG CODE */}
                {/* <div className='flex flex-col w-1/2 gap-2'>
                    <input className='border-2 border-black'
                        placeholder='enter name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter saving'
                        type='text'
                        value={saving}
                        onChange={(e) => setSaving(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter price'
                        type='text'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter serving'
                        type='text'
                        value={serving}
                        onChange={(e) => setServing(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter weight'
                        type='text'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter serving size'
                        type='text'
                        value={servingSize}
                        onChange={(e) => setServingSize(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter vegetarian'
                        type='text'
                        value={vegetarian}
                        onChange={(e) => setVegetarian(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter flavour'
                        type='text'
                        value={flavour}
                        onChange={(e) => setFlavour(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter country'
                        type='text'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter brand'
                        type='text'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter packaging'
                        type='text'
                        value={packaging}
                        onChange={(e) => setPackaging(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter goal'
                        type='text'
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter exp. date'
                        type='text'
                        value={expdate}
                        onChange={(e) => setExpdate(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter lifestage'
                        type='text'
                        value={lifestage}
                        onChange={(e) => setLifestage(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter gender'
                        type='text'
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter description'
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter ingredients'
                        type='text'
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                     <input className='border-2 border-black'
                        placeholder='enter direction for use'
                        type='text'
                        value={directionforuse}
                        onChange={(e) => setDirectionforuse(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter image'
                        type='file'
                        accept='image/*'
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                setImg(e.target.files[0]); // Correctly set the selected file to state
                            }
                        }}
                    />
                    <button className='border-2 border-black' onClick={handleSubmit}>Submit</button>
                </div> */}
                {/* <ProductFull/> */}
                {/* <div>
                    <input className='border-2 border-black'
                        placeholder='enter name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter brand'
                        type='text'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                    <button className='border-2 border-black' onClick={createProduct}>Submit</button>
                </div> */}
                
            </div>
            <div className='hidden tab:block'>
                <Navbarlg/>
                <LandingLg/>
                {/* <ProductLg/> */}
            </div>
            <div className='hidden m-lg:block m-md:block m-sm:block'>
                <NavbarSm/>
                <LandingSm/>
                {/* <ProductSm/> */}
            </div>
        </nav>
        
    </div>
  )
}

export default Home