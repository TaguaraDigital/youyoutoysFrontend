import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProductInfo = styled.div`
    width:80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    
    h1, h2 {
        text-align: center;
        color: var(--mainClr);
    }

    p {
        font-size: 1.4rem;
        padding: 1rem;
    }
    
    span {
        font-weight: bold;
    }
    .group {
        display: flex;
        justify-content: start;
        align-items: center;
    }

`;

export const ImagesContainer = styled.section`
    width:100%;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 2rem;
    justify-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    padding: 2rem 4rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
`;

export const FormGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;

    label {
        width: 150px;
        margin-right: 1rem;
        font-size: 1.2rem;
    }

`;

export const Input = styled.input`
    width: 100%;
    height: 2.5rem;
    margin-bottom: 0;
    padding: 0 1rem;
    text-align: right;
    
    outline: none;
    border: 1px solid rgba(200,200,200, .3);
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    
    box-shadow: none;

    transition: all .5s ease-in-out;

    &::placeholder {
        color: rgba(200,200,200, .9);
    }

    &:not(:last-of-type) {
        border-bottom: 2px solid rgba(200,200,200,.3);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid var(--mainClr);
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 2.5rem;
    margin-bottom: 0;
    padding: 0 1rem;
    
    outline: none;
    border: 1px solid rgba(200,200,200, .3);
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    
    box-shadow: none;

    transition: all .5s ease-in-out;

    &::placeholder {
        color: rgba(200,200,200, .9);
    }

    &:not(:last-of-type) {
        border-bottom: 2px solid rgba(200,200,200,.3);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid var(--mainClr);
    }
`;

export const SmallImg = styled.img`
    margin: .5rem;
    border-radius: 100%;
    width: 75px;
    height: 75px;
    cursor: pointer;

    &:hover {
        transform: scale(.95);
    }
`;


export const InputFile = styled.input`
    width: 100%;
    height: 50px;
    border: 2px solid red;
`;

export const ButtonUpload = styled.button`
    display: inline-block;
    margin-bottom: 3rem;
`;

export const ImgSelected = styled.img`
    width: 300px;
    object-fit: contain;
    object-position: center;
`;


export const SearchContainer = styled.div`
    position: relative;
    top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 2rem;
 `;
 
 export const SearchForm = styled.form`
    width: 80%;
    height: 100px; 
    padding: 0 .5rem;
    z-index: 1;

    display: flex;
    justify-content: space-around;
    align-items: center; 
    flex-wrap: wrap;
    color: var(--darkClr);

    button{
        margin: 0;
        padding: .5rem 1rem;
        border-radius: 5px;
        background: var(--mainClr);
        color: var(--lightClr);
        cursor: pointer;
        &:hover{
            background: var(--altClr);
        }
    }
`;

export const InputSearch = styled.input`
    width: 300px;
    height: 2rem;
    padding: 0 1rem;
    
    outline: none;
    border: 1px solid rgba(200,200,200, .3);
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    
    box-shadow: none;

    transition: all .5s ease-in-out;

    &::placeholder {
        color: rgba(200,200,200, .9);
    }

    &:not(:last-of-type) {
        border-bottom: 2px solid rgba(200,200,200,.3);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid var(--mainClr);
    }
`;
