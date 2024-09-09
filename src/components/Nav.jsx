import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  let distinct_category = products && products.reduce((ac,cv)=> [...ac,cv.category], []);
  distinct_category = [...new Set(distinct_category)];
  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.8)`
  }
  return (
    <nav className='w-[20%] bg-zinc-50 p-2 flex flex-col items-center gap-2 h-[100vh] fixed border-r pr-3'>
        <Link to='/create' className='w-[100%] border-orange-500 border-4 rounded-md py-3 flex justify-center items-center font-mono font-bold text-orange-500 text-2xl hover:bg-orange-500 hover:text-white duration-100'>Add New Product</Link>
        <hr className='w-full'/>
        <h1 className='bg-gray-600 flex justify-start w-[100%] px-3 py-3 text-lg'>Category</h1>
        <ul className='flex flex-col gap-2 justify-start w-full px-1 py-3 text-[#000] rounded-md'>
          {distinct_category.map((category,index)=>{
            return <NavLink 
                      key={index}
                      style={(e)=>{
                        return e.isActive ? {
                          backgroundColor: '#dfd8d882',
                          color: 'red',
                          borderRadius: '0.375rem'
                        } :
                        {}
                      }} 
                      to={`/product/${category}`} className='border-b border-white py-1 border-l px-3 flex justify-between items-center rounded-md'><p>{category}</p><div style={{backgroundColor : color()}} className='h-4 w-4 rounded-full'></div>
                    </NavLink>
          })}
        </ul>
    </nav>
  )
}

export default Nav
