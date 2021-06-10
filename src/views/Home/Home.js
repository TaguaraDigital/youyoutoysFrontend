import { useContext, useEffect } from 'react';
import InfoSection from '../../components/layout/InfoSection/InfoSection'
import Header from "../../components/layout/Header";
import {AuthContext} from "../../hooks/contexts/AuthContext"

import { infoData } from "../../data/InfoData";
import HeroSection from '../../components/layout/HeroSection';
import Footer from '../../components/layout/Footer';
const Home = () => {

    const { currentUser, setCurrentUser, checkAuthenticated, setAuth, logout} = useContext(AuthContext);
    
    useEffect(() => {
        checkAuthenticated()
    },[])

    return (
        <>
            <Header page="home" />
            <HeroSection />
            <InfoSection infoData={infoData[4]} id="oferta" />
            <Footer id="contact" />

        </>
    )
}

export default Home;