import {useState} from "react";
import {Image} from 'cloudinary-react';
import {CloudinaryContext, Transformation} from 'cloudinary-react';

import {
    ButtonUpload,
    FormInput,
    ImgSelected,
    InputContainer,
    InputFile
} from "./ImagesStyle";

const ImagesSlider = () => {

    const [fileInput, setFileInput] = useState('');
    const [previewSource, setPreviewSource] = useState();
    const [selectedFile, setSelectedFile] = useState('');

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }

    const uploadImage = async (base64EncodedImage) => {
        const URL = "http://localhost:3500/images/"
        // const URL = "https://saint-node-server.herokuapp.com/invoices/"


        try {
            await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({data: base64EncodedImage}),
                headers: { 'Content-Type': 'application/json' }
            })
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
            <div>
                <h1>Alguna de las fotos subidas</h1>            
                <h1>Funcion solo del adminitrador </h1>
                <Image cloudName="taguara" publicId="oshx2ocrwng92zzehgsa" width="300" crop="scale"/>
                <Image cloudName="taguara" publicId="mfunc5xwkdozekvs0dfl" width="300" crop="scale"/>

                {/* <CloudinaryContext cloudName="taguara">
                    <Image publicId="nyyiiwo1cy3yy7or1awz">
                        <Transformation width="200" crop="scale" angle="45"/>
                    </Image>
                </CloudinaryContext> */}
            </div>
        </InputContainer>
    )
}

export default ImagesSlider
