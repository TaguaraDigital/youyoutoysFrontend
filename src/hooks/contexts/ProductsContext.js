import React, { useState, createContext } from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [orderConfirm, setOrderConfirm] = useState([])
    const [summary, setSummary] = useState({units: 0, amount: 0})
    const [selectedProduct, setSelectedProduct] = useState(null)

    const addProducts = (newProduct) => {
        setProducts([...products, newProduct])
    }

    const value = {
        products,
        setProducts,
        orders,
        setOrders,
        orderConfirm,
        setOrderConfirm,
        summary,
        setSummary,
        addProducts,
        selectedProduct,
        setSelectedProduct
    }
    
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )

}

export default ProductsContextProvider;