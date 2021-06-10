import {useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import { ProductsContext } from "../../hooks/contexts/ProductsContext";
import ProductsFinder from "../../services/apis/ProductsFinder";

import {Image} from 'cloudinary-react';
import { ButtonContainer, ButtonText, Container } from "./Order.Style";

const OrderConfirm = () => {

  let history = useHistory();
  const { currentUser, checkAuthenticated } = useContext(AuthContext);
  const { orderConfirm, setOrderConfirm } = useContext(ProductsContext);

  let totalUnits= 0; 
  let totalAmount= 0; 

  const formatCurrency = (num) =>  {
    return Number(num.toFixed(2)).toLocaleString();
  }

  useEffect(() => {
    checkAuthenticated()
  },[])

  const handleProductSelect = (id) => {
    history.push(`/products/${id}`);
  };

  const handleConfirmOrder = (id) => {
    const fetchData = async () => {
      try {
        const response = await ProductsFinder.orderConfirm(currentUser.user_id,orderConfirm[0].order_id);
        console.log('confirmando el pedido ', currentUser.user_id, '--', orderConfirm[0].order_id)
        if (response.message === 'ok'){
          console.log(response.data)
        }

      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
    history.go(-1);
  };

  
  return (
    <Container>
    
    <div className="list-group">
    <h1>Este es el pedido que esta realizando, pulse enter para que sea procesado</h1>
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
        { orderConfirm && orderConfirm.length > 0 &&  
          orderConfirm.map((order) => {
            totalUnits += order.amount;
            totalAmount += order.amount * order.price;
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
                    max-width="120"
                    height="100"
                    
                    onClick={() => handleProductSelect(order.product_id)}
                  />
                </td>
                <td data-col-title="Stock "> {formatCurrency(order.inventory)} </td>
                <td data-col-title="UXB"> {order.pack} </td>
                <td data-col-title="Precio"> {formatCurrency(order.price)} </td>
                <td data-col-title="Pedido"> {formatCurrency(order.amount ? order.amount : 0)}</td>
                <td data-col-title="Monto "> {formatCurrency((order.amount ? order.amount : 0) * order.price)} </td>
                </tr>
            );
            })
          }
    
        </tbody>
      </table>
      { (totalUnits > 0)
        ? <p> Total unidades = {totalUnits}  Monto Pedido = {formatCurrency(totalAmount )} </p>
        :""}
    </div>
          <ButtonContainer className="abc111">
            <ButtonText
              primary={true}
              onClick={handleConfirmOrder}
            >
              Confirmar el pedido
            </ButtonText>
            <ButtonText primary={false} > Regresar</ButtonText>
          </ButtonContainer>

    </Container>
  );
}

export default OrderConfirm;