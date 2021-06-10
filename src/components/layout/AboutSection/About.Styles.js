import styled from 'styled-components';
import img1 from "../../../assets/image/bgs/About.png";

export const AboutContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;             

    background-image: url(${img1});
    background-size: cover;
    padding: var(--header-height) 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        /* background-color: ${props => props.bgClr}; */
        background-color: rgba(0,0,0, .55);
    }
`;

export const AboutContent = styled.div`
    z-index: 30;
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const AboutTitle = styled.h1`
    color: var(--lightClr);
    font-size: 3.5rem;
    margin-bottom: 4rem;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const AboutText = styled.p`
    color: var(--lightClr);
    max-width: 1200px;
    font-size: 2rem;
    text-align: justify;

    @media screen and (max-width: 768px) {
        max-width: 350px;
        font-size: 1.2rem;
    }
`;