import {useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import ProductsFinder from "../../services/apis/ProductsFinder";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import { ProductsContext } from "../../hooks/contexts/ProductsContext";

import {Image} from 'cloudinary-react';

import {Input} from "../../components/products/Products.Styles"

const OrderProductsAll = () => {

  let history = useHistory();
  const { currentUser, checkAuthenticated } = useContext(AuthContext);
  const { orders, setOrders } = useContext(ProductsContext);

  const formatCurrency = (num) =>  {
    return Number(num.toFixed(2)).toLocaleString();
  }

  useEffect(() => {
    checkAuthenticated()
  },[])

  useEffect(() => {
    const dataOrder = localStorage.getItem('order')
    if (!dataOrder) {
      const fetchData = async () => {
        try {
          const response = await ProductsFinder.order(currentUser.user_id);
          if (response.message === 'ok'){

            localStorage.setItem("order", JSON.stringify(await response.data));
            await setOrders(response.data)
          }
  
        } catch (err) {
          console.log(err)
        }
      };

      fetchData();
    } else {
        setOrders(JSON.parse(dataOrder))
    }
  }, [])

  const handleChange = (e, id) => {
    const newProducts = orders.map((order) => {
      if(id === order.product_id) { 
        return {
          ...order, amount: parseInt(e.target.value)
        }
      }
      return order
    })
    localStorage.setItem("order", JSON.stringify(newProducts));
    setOrders((prev) => newProducts)
  }

  const handleProductSelect = (id) => {
    history.push(`/products/${id}`);
  };
  
  return (
    <div className="list-group">
    <table className="smart-table">
      <thead>
        <tr>
          <th scope="row"> Codigo </th>
          <th> Marca </th>
          <th> Categoria </th>
          <th> Descripcion </th>
          <th> Imagen </th>
          <th> Stock </th>
          <th> UXB </th>
          <th> Precio </th>
          <th> Pedido </th>
          <th> Monto </th>
        </tr>
      </thead>
      <tbody>
        { orders && orders.length > 0 &&  
          orders.map((order) => {
            return (
              <tr
                key={order.product_id}
              >
                <td data-col-title="Codigo">  {order.product_code} </td>
                <td data-col-title="Marca"> {order.brand } </td>
                <td data-col-title="Categoria"> {order.category } </td>
                <td data-col-title="Descripcion"> {order.description} </td>
                <td data-col-title="Imagen">
                  <Image
                    cloudName="taguara"
                    publicId={order.image_id}
                    max-width="110"
                    height="100 "
                    
                    onClick={() => handleProductSelect(order.product_id)}
                  />
                </td>
                <td data-col-title="Stock "> {formatCurrency(order.inventory)} </td>
                <td data-col-title="UXB"> {order.pack} </td>
                <td data-col-title="Precio"> {formatCurrency(order.price)} </td>
                <td data-col-title="Pedido">
                  <Input
                    name={"order"+order.product_id}
                    id={"order"+order.product_id}
                    value={formatCurrency(order.amount ? order.amount : 0)}
                    onChange={(e) =>  handleChange(e, order.product_id)}
                  />
                </td>
                <td data-col-title="Monto "> {formatCurrency((order.amount ? order.amount : 0) * order.price)} </td>
                </tr>
            );
            })
          }

        </tbody>
      </table>
    </div>
  );
}

export default OrderProductsAll;