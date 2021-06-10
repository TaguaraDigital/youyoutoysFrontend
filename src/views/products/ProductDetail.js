import { useContext } from 'react';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {AuthContext} from "../../hooks/contexts/AuthContext"
import ProductsBody from '../../components/products/ProductBody';
import ProductsImages from '../../components/products/ProductImages';
const ProductDetails = () => {

    const { currentUser, setCurrentUser, setAuth} = useContext(AuthContext);

    return (
        <>
            <Header page="orders" />
            <ProductsBody />
            <ProductsImages />
            <Footer id="contact" />
  
        </>
    )
}

export default ProductDetails;