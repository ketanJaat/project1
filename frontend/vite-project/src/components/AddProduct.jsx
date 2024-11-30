import axios from 'axios';
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import NavbarFull from './NavbarFull';


const AddProduct = () => {

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
    const [img1 , setImg1] = useState(null);
    const [img2 , setImg2] = useState(null);
    const [img3 , setImg3] = useState(null);

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
            formdata.append("img1", img1); // Image file
            formdata.append("img2", img2);
            formdata.append("img3", img3);

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
    <div>

        <NavbarFull/>

        add product

        {/* INPUT COMING BIG CODE */}
        <div className='flex flex-col w-1/2 gap-2'>
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
                        placeholder='enter image 1'
                        type='file'
                        accept='image/*'
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                setImg1(e.target.files[0]); // Correctly set the selected file to state
                            }
                        }}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter image 2'
                        type='file'
                        accept='image/*'
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                setImg2(e.target.files[0]); // Correctly set the selected file to state
                            }
                        }}
                    />
                    <input className='border-2 border-black'
                        placeholder='enter image 3'
                        type='file'
                        accept='image/*'
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                                setImg3(e.target.files[0]); // Correctly set the selected file to state
                            }
                        }}
                    />
                    <button className='border-2 border-black' onClick={handleSubmit}>Submit</button>
                </div>
    </div>
  )
}

export default AddProduct