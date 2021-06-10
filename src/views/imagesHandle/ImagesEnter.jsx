import {useState} from "react";

import {
    ButtonUpload,
    FormInput,
    ImgSelected,
    InputContainer,
    InputFile
} from "./ImagesStyle";

const ImagesEnter = () => {

    const [fileInput, setFileInput] = useState('');
    const [previewSource, setPreviewSource] = useState();
    const [selectedFile, setSelectedFile] = useState('');

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }

    const uploadImage = async (base64EncodedImage) => {
        const URL = "http://localhost:3500/api/v1/images/"
        // const URL = "https://saint-node-server.herokuapp.com/invoices/"


        try {
            const response = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({data: base64EncodedImage}),
                headers: { 'Content-Type': 'application/json' }
            })
            // await response.json()
            console.log( await response.json())
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!previewSource) return;
        uploadImage(previewSource);


    }

    const previewFile = (file) => {

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    return (
        <InputContainer>
            <h1>Subir Archivos al servidor de imagenes </h1>            
            <h1>Funcion solo del adminitrador </h1>

            <FormInput
                onSubmit={handleSubmit}
            >
                <InputFile
                    type="file"
                    name="image"
                    placeholder="seleccionar archivo a subir"
                    onChange={handleFileInput}
                    value={fileInput}
                />
                <ButtonUpload
                    type="submit"
                >
                    Subir
                </ButtonUpload>
            </FormInput>
            {previewSource && (
                <ImgSelected src={previewSource} alt="" srcset=""/>
            )}
        </InputContainer>
    )
}

export default ImagesEnter
