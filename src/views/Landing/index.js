import React from 'react';
import { SliderData } from "../../data/SliderData";

import Header from "../../components/layout/Header";
// import HeroSection from '../../components/layout/HeroSection'
import Hero from '../../components/layout/Hero/Hero'
import InfoSection from '../../components/layout/InfoSection/InfoSection'
import AboutSection from '../../components/layout/AboutSection'
import ProductsSection from '../../components/layout/ProductSection'
import FlashCardList from '../../components/flashCard/FlashCardList'
import Footer from '../../components/layout/Footer';

import { infoData } from "../../data/InfoData";

const Home = () => {
    return (
        <div>
            <Header page="landing" />
            <Hero id="home" slides={SliderData} />
            <AboutSection  id="about" title="La Empresa" bgClr={'var(--greenClr)'} />
            <InfoSection infoData={infoData[0]} />
            <ProductsSection  id="product" title="Tenemos los mejores productos del Mercado" bgClr={'var(--lightBlueClr)'}/>
            <FlashCardList />
            <InfoSection infoData={infoData[1]} />
            <InfoSection infoData={infoData[2]} />
            <InfoSection infoData={infoData[3]} />
            <Footer id="contact" />
        </div>
    )
}

export default Home
