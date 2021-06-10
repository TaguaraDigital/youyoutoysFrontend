import { useContext, } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import OrderConfirmList from '../../components/orders/OrderConfirmList';
import {AuthContext} from '../../hooks/contexts/AuthContext';

const OrderConfirm = () => {

    const { currentUser, setCurrentUser, setAuth} = useContext(AuthContext);

    return (
        <>
            <Header page="orders" />
            <OrderConfirmList />
            <Footer id="contact" />
        </>
    )
}

export default OrderConfirm;