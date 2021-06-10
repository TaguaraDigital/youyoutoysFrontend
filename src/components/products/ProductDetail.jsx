/* import {useEffect, useContext, useState} from "react";
import ProductsFinder from "../../services/apis/ProductsFinder";
import { AuthContext } from "../../hooks/contexts/AuthContext";

import {Input, SmallImg} from "./Products.Styles"

const ProductsDetail = () => {

    const [orders, setOrders] = useState([]);
    const { currentUser, setCurrentUser, checkAuthenticated, products, setProducts, } = useContext(AuthContext);
    
    const handleChange = (e, id) => {
      
      const newProducts = products.map((product, i) => {

        if(id === product.product_id) { 
          return {
            ...product, order: parseInt(e.target.value)
          }
        }
        return product;
      })
      
      setProducts(newProducts);
    }    

    const formatCurrency = (num) =>  {
      return Number(num.toFixed(2)).toLocaleString();
    }

    useEffect(() => {
      const fetchData = async () => {

        try {
            const response = await ProductsFinder.all();
            if (response.message === 'ok'){
                setProducts(response.data.products.map((product, i) => ({...product, order: 0})))
            }

        } catch (err) { console.log(err)}
      };
      fetchData();
  
    }, [])

    return (
      <div className="list-group">
        <tr key={product.product_id}>
          <td data-col-title="Codigo">  {product.product_code} </td>
          <td data-col-title="Marca"> {product.brand } </td>
          <td data-col-title="Categoria"> {product.category } </td>
          <td data-col-title="Descripcion"> {product.description} </td>
          <td data-col-title="Imagen"> <SmallImg src={image1} /> </td>
          <td data-col-title="Stock "> {formatCurrency(product.inventory)} </td>
          <td data-col-title="UXB"> {product.pack} </td>
          <td data-col-title="Precio"> {formatCurrency(product.price)} </td>
          <td data-col-title="Pedido">
            <Input
              type="number"
              name={"order"+product.product_id}
              id={"order"+product.product_id}
              value={product.order}
              onChange={(e) => handleChange(e, product.product_id)}
            />
          </td>
          <td data-col-title="Monto "> {formatCurrency(product.order * product.price)} </td>
        </tr>
      </div>
    );
}

export default ProductsDetail;
*/