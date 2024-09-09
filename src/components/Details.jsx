import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'

const Details = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    const navigate = useNavigate();
    const {id} = useParams();
    const product = products.filter((ele)=>id == ele.id);

    const handleDelete = () => {
        localStorage.setItem("products", JSON.stringify(products.filter((ele)=>ele.id != id)));
        navigate(`/`);
    }
    return products ? (<div className=' w-[80%] text-black rounded-md m-auto flex gap-2 flex-col'>
                        <button onClick={()=>navigate('/')} className='bg-blue-700 text-white rounded-md px-6 py-2 w-fit'>{'\u21D0'} Home</button>
                        <div className='w-full h-[95%] border-2 border-black text-black rounded-md m-auto p-3 flex gap-3'>
                                <div className='h-full w-[30%] rounded-md overflow-hidden flex justify-center items-center p-2' >
                                    <img src={product[0].image} className=' object-cover bg-black'/>
                                </div>
                                <div className='w-[70%] px-4 py-3 flex flex-col gap-2'>
                                    <div className='text-4xl font-semibold'>{product[0].title}</div>
                                    <div className='text-xl text-slate-500'>{product[0].category}</div>
                                    <div className='text-4xl'>{product[0].price}/-</div>
                                    <div className='text-lg p-2 border border-white rounded-md'>Description : {product[0].description}</div>
                                    <div className='text-2xl '>Rating : {product[0].rating.rate}/{product[0].rating.count}</div>
                                    <div className='flex gap-2'>
                                        <Link to={`/edit/${id}`} className='px-10 py-2 bg-green-500 rounded-mg text-xl rounded-md'>Edit</Link>
                                        <button onClick={handleDelete} className='px-10 py-2 bg-red-500 rounded-mg text-xl rounded-md'>Delete</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                            )
                            : (<Loading />)
}

export default Details
