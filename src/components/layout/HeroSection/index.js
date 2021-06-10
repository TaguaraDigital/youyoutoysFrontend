import { useContext, } from 'react';

import {AuthContext} from "../../../hooks/contexts/AuthContext"
import Imagen from '../../../assets/image/pictures/img-6.jpg'
import {Button} from "../../Button"

import {
    HeroContainer,
    HeroBg,
    ImgBg,
    HeroContent,
    HeroTitle,
    HeroText,
    
} from './Hero.Styles'

const HeroSection = ({ video="public", user }) => {

    const { currentUser, logout} = useContext(AuthContext);

    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImgBg src={Imagen} alt="bg-images"/>
            </HeroBg>
            <HeroContent>
                <HeroTitle>Bienvenido {currentUser.name} </HeroTitle>
                <HeroText>Estamos en el Home Page de los clientes </HeroText>
                <HeroText> para llegar aqui se debe autenticado </HeroText>
                <br/>
                <br/>
                <Button to="/" onClick={ (e) => logout(e)}>Log out</Button>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
