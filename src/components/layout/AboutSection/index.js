import React from 'react';
import InfoSection from '../InfoSection/InfoSection'
import { infoData } from "../../../data/InfoData";

import {
    AboutContainer,
    AboutContent,
    AboutTitle,
    AboutText,
    
} from './About.Styles'

const AboutSection = ({ id, title, classes, bgClr="#ff00ff" }) => {
    return (
        <AboutContainer id={id} bgClr={bgClr}>
            <AboutContent>
                <AboutTitle className={classes}> {title} </AboutTitle>
                <AboutText> 
                    Fundada en 2012, Inversiones You You Toys ha creado una reputación de contar con los mejores juguetes y productos para los niños venezolanos.
                </AboutText>
                <AboutText> 
                    La empresa ha mantenido siempre una sólida postura de liderazgo ofreciendo las mejores marcas y juguetes de alta calidad, excelente relación precio-valor, y un altísimo valor de juego.
                </AboutText>
                <AboutText> 
                    Los tiempos cambian, y los juegos también. Por eso nuestro equipo de especialistas reevalúa constantemente las necesidades de los niños y ubica en el mercado internacional los productos que proporcionen los mejores beneficios a nuestros pequeños clientes.
                </AboutText>
            </AboutContent>
        </AboutContainer>
    )
}

export default AboutSection
