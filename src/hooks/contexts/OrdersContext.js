import React, { useState, createContext } from 'react';

export const OrdersContext = createContext();

const OrdersContextProvider = ({ children }) => {
    
    const [ordersAll, setOrdersAll] = useState([]);

    const value = {
        ordersAll,
        setOrdersAll,
    }
    
    return (
        <OrdersContext.Provider value={value}>
            {children}
        </OrdersContext.Provider>
    )

}

export default OrdersContextProvider;