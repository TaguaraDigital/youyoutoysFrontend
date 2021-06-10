import { useContext, } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import {AuthContext} from '../../hooks/contexts/AuthContext';
import OrdersAll from '../../components/orders/OrderSummaryFinder';
import OrderFinder from '../../components/orders/OrderFinder';
// import OrdersFinder from '../../components/orders/OrderFinder';

const Orders = () => {

    const { currentUser, setCurrentUser, setAuth} = useContext(AuthContext);

    return (
        <>
            <Header page="orders" />
            <OrderFinder/>
            <OrdersAll/>
            <Footer id="contact" />
        </>
    )
}

export default Orders;