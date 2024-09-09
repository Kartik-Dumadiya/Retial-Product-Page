import React from 'react'
import Nav from './Nav'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'


const Home = () => {
    const products = JSON.parse(localStorage.getItem("products"))
    const {category} = useParams();
    const navigate = useNavigate()
    const maap = products?.filter((product)=> category ? product.category == category : true);
  return (
    <>
        <Nav/>
        <div className='w-[80%] h-[100%] bg-white text-black p-3 flex flex-col justify-center ml-[20%]' style={{scrollbarWidth : 'none'}}>
          <div className='relative flex w-full h-[60px] border-y-2 gap-8 items-center justify-center'>
            {category ? <button onClick={()=>navigate('/')} className='absolute left-6 bg-blue-700 text-white rounded-md px-6 py-2'>{'\u21D0'} Home</button> : ""}
            <p className=' w-[100%] h-[60px] justify-center flex items-center text-2xl'>{category ? category : "Home"}</p>
          </div>
          <div className={`w-[100%] text-black p-3 flex justify-center  overflow-auto`} style={{scrollbarWidth : 'none', height : 'calc(100% - 60px)'}}>
            {
              products ? (
                  <div className='grid grid-cols-5 gap-9 h-full p-3 overflow-auto' style={{scrollbarWidth : 'none'}}>
                    {maap?.map((product,index)=>{
                        return <Link key={index} to={`/details/${product.id}`} className='w-[200px] h-[40vh] border-2 border-black rounded-md overflow-hidden flex flex-col justify-between'>
                                    <div className='w-full h-[65%] overflow-hidden p-2'>
                                    <img className='h-[100%] w-full object-contain bg-white hover:scale-150 duration-200' src={product.image} />
                                    </div>
                                    <h1 className='text-lg px-2 pt-3 w-full h-[25%] z-10 flex justify-center items-center overflow-scroll leading-6' style={{scrollbarWidth : 'none'}}>{product.title}</h1>
                                </Link>
                    })}
                  </div> 
              ) : (
                <Loading/>
              )
            }
          </div>
        </div>
    </>
  )
}

export default Home
