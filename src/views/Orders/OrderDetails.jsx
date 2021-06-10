import { useContext, } from 'react';

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

import OrderHeader from '../../components/orders/OrderHeader';
import OrderDetailList from '../../components/orders/OrderDetailList';


import {AuthContext} from '../../hooks/contexts/AuthContext';

const OrdersDetails = () => {

    const { currentUser, setCurrentUser, setAuth} = useContext(AuthContext);

    return (
        <>
            <Header page="orders" />
            <OrderHeader />
            <OrderDetailList />
            <Footer id="contact" />
        </>
    )
}

export default OrdersDetails;