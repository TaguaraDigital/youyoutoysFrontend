import { useContext, } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProductsList from '../../components/products/ProductList';
import {AuthContext} from '../../hooks/contexts/AuthContext';
import ProductFinder from '../../components/products/ProductFinder';

const Products = () => {

    const { currentUser, setCurrentUser, setAuth} = useContext(AuthContext);

    return (
        <>
            <Header page="orders" />
            <ProductFinder />
            <ProductsList />
            <Footer id="contact" />
        </>
    )
}

export default Products;