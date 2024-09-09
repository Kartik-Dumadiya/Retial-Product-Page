import React, { createContext, useState } from 'react'
import axios from '../utils/Axios'

export const productContext = createContext();
const Context = (props) => {
    const [products, setProducts] = useState(null);
    const getProducts = async () => {
        try {
            const {data} = await axios.get('/products');
            setProducts(data);
            localStorage.setItem("products", JSON.stringify(data))
        } catch (error) {
            console.log(error);
        } 
    }
  return (
    <productContext.Provider value={[products, setProducts]}>
        {props.children}
    </productContext.Provider>
  )
}

export default Context


