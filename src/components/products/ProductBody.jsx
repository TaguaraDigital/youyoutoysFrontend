import {useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductsFinder from "../../services/apis/ProductsFinder";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import { ProductsContext } from "../../hooks/contexts/ProductsContext";


import {Input, ProductInfo, SmallImg} from "./Products.Styles"

const ProductsBody = () => {
    const { id } = useParams();
    const { selectedProduct, setSelectedProduct } = useContext(ProductsContext);

    useEffect(() => {
        const fetchData = async (id) => {
            const response = await ProductsFinder.byId(id);
            setSelectedProduct(response.data);
        };
    
        fetchData(id);
    }, []);
    
    // const formatCurrency = (num) =>  {
    //   return Number(num.toFixed(2)).toLocaleString();
    // }

    return (
        <ProductInfo >
            {
                selectedProduct && <div>
                    <h1 className="text-center display-1">
                        { selectedProduct.product[0].description }
                    </h1>
                    <div className="group">
                        <p> <span className="bold">Codigo:  </span> {selectedProduct.product[0].product_code} </p>
                        <p> <span className="bold">Marca:  </span>{selectedProduct.product[0].brand } </p>
                        <p> <span className="bold">Categoria:  </span>{selectedProduct.product[0].category } </p>
                    </div>
                    <p> <span className="bold">Descripcion:  </span>{selectedProduct.product[0].description} </p>
                    <div className="group">
                        <p> <span className="bold">Stock:  </span>{selectedProduct.product[0].inventory} </p>
                        <p> <span className="bold">U X B:  </span>{selectedProduct.product[0].pack} </p>
                        <p> <span className="bold">Precio:  </span>{selectedProduct.product[0].price} </p>
                    </div>
                </div>
            }
      </ProductInfo>
    );
}

export default ProductsBody ;