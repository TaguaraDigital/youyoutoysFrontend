import styled, {css} from "styled-components/macro";
import {IoMdArrowRoundForward} from "react-icons/io";
import {IoArrowForward, IoArrowBack} from "react-icons/io5"


export const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: .5rem;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: var(--mainClr);
    cursor: pointer;
    background-color: var(--darkClr);
    border-radius: 50%;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background-color: var(--ctaClr);
        transform: scale(.95);
    }
`;

export const Next = styled(IoArrowForward)`
    ${arrowButtons};
`;

export const Prev = styled(IoArrowBack)`
    ${arrowButtons};
`;

export const  HeroSection = styled.section`
    height: calc(100vh - var(--header-height));
    position: relative;
    overflow: hidden;
`;

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
`;

export const HeroSlide = styled.div`
    width: 100%;
    height: 100%;
`;

export const HeroSlider = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, .6);
        position: absolute;
        z-index: 1;
    }
`;

export const HeroImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
`;

export const HeroContent = styled.div`
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--lightClr);

    h1 {
        font-size: clamp(1rem, 8vw, 4rem)
    }
`;

export const SlideButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 100;
`; 