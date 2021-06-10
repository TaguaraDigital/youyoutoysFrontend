import styled from "styled-components";

export const InputContainer = styled.section`
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const FormInput = styled.form`

`;

export const GroupForm = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
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