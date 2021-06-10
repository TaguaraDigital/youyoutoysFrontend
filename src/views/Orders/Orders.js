import { useContext, } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

import OrderList from '../../components/orders/OrderList';
import OrderSummary from '../../components/orders/OrderSummary';

import {AuthContext} from '../../hooks/contexts/AuthContext';

const Orders = () => {

    const { currentUser, setCurrentUser, setAuth} = useContext(AuthContext);

    return (
        <>
            <Header page="orders" />
            <OrderSummary />
            <OrderList />
            <Footer id="contact" />
        </>
    )
}

export default Orders;