import styled from 'styled-components';

export const ProductsContainer = styled.section`
    width: 100%;
    height: 100%;

    background-color: ${props => props.bgClr};
    padding: var(--header-height) 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const ProductsHeader = styled.div`
    z-index: 30;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const ProductsTitle = styled.h1`
    color: var(--blueClr);
    font-size: clamp(1rem, 8vw, 4rem);

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const ProductsText = styled.p`
    color: var(--blueClr);
    max-width: 800px;
    font-size: 2rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        max-width: 350px;
        font-size: 1.2rem;
    }
`;

export const ProductsCards = styled.div`
    width:100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;