import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const products = JSON.parse(localStorage.getItem("products"));
    const product = products.filter((ele)=>ele.id == id);
    const editedProducts = products.filter((ele)=>ele.id != id);
    const [title, setTitle] = useState(product[0].title);
    const [image, setImage] = useState(product[0].image);
    const [price, setPrice] = useState(product[0].price);
    const [description, setDescription] = useState(product[0].description);
    const [category, setCategory] = useState(product[0].category);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(title.trim().length < 5 || 
            category.trim().length < 5 || 
            image.trim().length <5|| 
            description.trim().length < 5 || 
            price.trim().length < 1)
        {
                toast.error('All fields are required and should be at least 5 characters long');
                return;
        }
        const product = {
            id,
            title,
            image,
            price,
            description,
            category : category.trim(),
            rating : {
                rate : 4.5,
                count : 15
            }
        }
        localStorage.setItem("products",JSON.stringify([...editedProducts, product]));
        toast.success("Product updated successfully");
        navigate('/');
    }
  return (
    <form 
        onSubmit={handleSubmit}
        className='relative w-full flex flex-col items-center justify-center m-6 border-white border gap-4'>
        <h1 className='w-[50%] border-orange-500 border-4 rounded-md py-4 flex justify-center items-center font-mono font-bold text-white text-2xl bg-orange-500'>Edit Product</h1>
        <input type="text" className='bg-zinc-200 text-black px-3 py-4 rounded-md w-1/2 outline-blue-500 ' placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <input type="url" className='bg-zinc-200 text-black px-3 py-4 rounded-md w-1/2 outline-blue-500 ' placeholder='Image url' onChange={(e)=>setImage(e.target.value)} value={image}/>
        <div className='flex w-1/2 justify-between items-center'>
            <input type="text" className='bg-zinc-200 text-black px-3 py-4 rounded-md w-[48%] outline-blue-500 ' placeholder='Category' onChange={(e)=>setCategory(e.target.value)} value={category}/>
            <input type="number" className='bg-zinc-200 text-black px-3 py-4 rounded-md w-[48%] outline-blue-500 ' placeholder='Price' onChange={(e)=>setPrice(e.target.value)} value={price}/>
        </div>
        <textarea rows={3} className='bg-zinc-200 text-black px-3 py-4 rounded-md w-[50%] outline-blue-500 ' placeholder='Enter Product Description' onChange={(e)=>setDescription(e.target.value)} value={description}/>
        <div className='w-1/2 flex justify-start'>
            <button className='w-[50%] border-blue-500 border-4 rounded-md py-4 flex justify-center items-center font-mono font-bold text-blue-500 text-2xl hover:bg-blue-500 hover:text-white duration-100 '>Edit Product</button>
        </div>
    </form>
  )
}

export default Edit
