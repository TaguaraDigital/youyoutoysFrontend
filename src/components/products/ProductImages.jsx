import { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {Image} from 'cloudinary-react';
import { ProductsContext } from "../../hooks/contexts/ProductsContext";
import ProductsFinder from "../../services/apis/ProductsFinder";

import {
    ImagesContainer, ProductInfo, ButtonUpload,
} from "./Products.Styles";


const ProductImages = () => {
    const { id } = useParams();
    const history = useHistory();

    const { selectedProduct, setSelectedProduct } = useContext(ProductsContext);

    useEffect(() => {
        const fetchData = async (id) => {
            const response = await ProductsFinder.byId(id);
            setSelectedProduct(response.data);
        };
    
        fetchData(id);
    }, []);

    return (
        <ProductInfo>
            {
                selectedProduct && <>
                    <h2>Imagenes del Producto</h2>
                    <ImagesContainer>
                        {selectedProduct.images.map((image) => {
                            return <Image key={image.image_id} cloudName="taguara" publicId={image.image_id} width="300" crop="scale"/>
                        })}
                    </ImagesContainer>
                </>
            }
            <ButtonUpload
                // onClick={() => history.go(-1)}
                onClick={() => history.push("/orders")}
            >
                regresar    
            </ButtonUpload>
        </ProductInfo>
    )
}

export default ProductImages