import {useEffect, useContext, useState} from "react";
import { useHistory } from "react-router-dom";
import ProductsFinder from "../../services/apis/ProductsFinder";
import { ProductsContext } from "../../hooks/contexts/ProductsContext";


import image1 from "../../assets/image/pictures/ser-1.jpg";

import {Input, SmallImg} from "./Products.Styles"

const ProductsAll = () => {

  let history = useHistory();

  const { products, setProducts } = useContext(ProductsContext);

    // const formatCurrency = (num) =>  {
    //   return Number(num.toFixed(2)).toLocaleString();
    // }

 
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await ProductsFinder.all();
        if (response.message === 'ok'){
            setProducts(response.data.products)
        }

      } catch (err) { console.log(err)}
    };
    fetchData();

  }, [])

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await ProductsFinder.delete(id);
      setProducts(
        products.filter((product) => {
          return product.product_id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/products/${id}/update`);
  };

  const handleProductSelect = (id) => {
    console.log('debe ir al detalle')
    history.push(`/products/${id}`);
  };

  return (
    <div className="list-group">
    <table className="smart-table">
      <thead>
        <tr>
          <th> Codigo </th>
          <th> Marca </th>
          <th> Categoria </th>
          <th> Descripcion </th>
          <th> Imagen </th>
          <th> Stock </th>
          <th> UXB </th>
          <th> Precio </th>
          <th >Edit</th>
          <th >Delete</th>
        </tr>
      </thead>
      <tbody>
      { products && products.length > 0 &&  
        products.map((product) => {
          return (
            <tr
              key={product.product_id}
              onClick={() => handleProductSelect(product.product_id)}

            >
              <td data-col-title="Codigo">  {product.product_code} </td>
              <td data-col-title="Marca"> {product.brand } </td>
              <td data-col-title="Categoria"> {product.category } </td>
              <td data-col-title="Descripcion"> {product.description} </td>
              <td data-col-title="Imagen">
                <SmallImg src={image1} />
              </td>
              <td data-col-title="Stock "> {(product.inventory)} </td>
              {/* <td data-col-title="Stock "> {formatCurrency(product.inventory)} </td> */}
              <td data-col-title="UXB"> {product.pack} </td>
              <td data-col-title="Precio"> {(product.price)} </td>
              {/* <td data-col-title="Precio"> {formatCurrency(product.price)} </td> */}
              <td>
                <button
                  onClick={(e) => handleUpdate(e, product.product_id)}
                  className="btn btn-warning"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => handleDelete(e, product.product_id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
            );
          })
        }
      </tbody>
    </table>
    </div>
  );
}

export default ProductsAll;