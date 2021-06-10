import {useState, useRef, useEffect } from "react";
import styled, {css} from "styled-components/macro";

import { Button } from "../../Button";
import {
    Arrow,
    Next,
    Prev,
    SlideButtons,
    HeroImage,
    HeroContent,
    HeroSection,
    HeroSlide,
    HeroSlider,
    HeroWrapper,

} from "./HeroStyles";


const Hero = ({slides, id}) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);
    
    useEffect(() => {
        timeout.current = setTimeout(nextSlide, 5000)
        
        return () => {
            if(timeout.current ){
                clearTimeout(timeout.current)
            }
        }
    }, [currentSlide, length])
 
    const nextSlide = () => {
        
        if(timeout.current ){
            clearTimeout(timeout.current)
        }

        setCurrentSlide((current) => (current === length - 1) ? 0 : current + 1)
    }
    const prevSlide = () =>  {

        if(timeout.current ){
            clearTimeout(timeout.current)
        }

        setCurrentSlide((current) => (current === 0) ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    
    return (
        <HeroSection id={id}>
            <HeroWrapper>
                {slides.map((slide, i) => {
                    return (
                        <HeroSlide className="HeroSlide" key={i}>
                        {i === currentSlide && (
                            <HeroSlider className="HeroSlider">
                                <HeroImage src={slide.image} alt={slide.alt} />
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <h2>{slide.subtitle}</h2>
                                    <Button
                                        to={slide.path}
                                        primary="true"
                                        css={`max-width: 160px`}
                                    >
                                        {slide.label}
                                        <Arrow />
                                    </Button>
                                </HeroContent> 
                            </HeroSlider>
                        )}
                        </HeroSlide>
                    )
                }) }
                <SlideButtons>
                    <Prev onClick={prevSlide}/>
                    <Next onClick={nextSlide}/>
                </SlideButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
