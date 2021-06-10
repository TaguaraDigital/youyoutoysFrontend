import styled from "styled-components";

export const CardGrid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin: 1rem;
`;

export const Card = styled.div`
    height: 100%;
    min-height: 410px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: .5rem;
    border-radius: .25rem;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);
    background-color: var(--mainClr);
    color: var(--lightClr);
    transform-style: preserve-3d;
    transition: 150ms;
    cursor: pointer;
    transform: perspective(1000px) rotateY(var(--rotate-y, 0)) translateY(var(--translate-y, 0));

    img {
        width: 100%;
        height: 380px;
        object-fit: cover;
        object-position: center;
    }

    h1 {
        font-size: 1.2rem;
        text-align: center;
        text-transform: uppercase;
    }

    p {
        width: 100%;
        height: 100%;
        font-size: 1.2rem;
        text-align: center;
        padding: 2rem;
    }

    &:hover {
        --translate-y: -2px;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, .5);
    }

    &.front {
        left: 0;
    }

    &.flip {
        --rotate-y: 360deg;
    }

    &.front,
    &.back {
        position: absolute;
        backface-visibility: hidden;
    }

    &.back {
        width: 100%;
        height: 100%;
        transform: rotateY(180deg);
    }
`;