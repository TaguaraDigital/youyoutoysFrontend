import {useEffect, useContext, useState} from "react";
import { useParams } from "react-router-dom";

import OrdersFinder from "../../services/apis/OrdersFinder";
import { AuthContext } from "../../hooks/contexts/AuthContext";

const OrdersDetailList = () => {

    const [orders, setOrders] = useState([]);
    const { currentUser, setCurrentUser, checkAuthenticated, products, setProducts, } = useContext(AuthContext);
    const { id } = useParams();

    const formatCurrency = (num) =>  {
      return Number(num.toFixed(2)).toLocaleString();
    }

    useEffect(() => {

      const fetchData = async () => {

        try {
            const response = await OrdersFinder.byId(id);
            if (response.message === 'ok') {
                setOrders(await response.data.orders)
            }

        } catch (err) { console.log(err)}
      };
      fetchData();
  
    }, [])

    return (
        <div className="list-group">
          <table className="smart-table">
            <thead>
              <tr>
                <th scope="row"> Orden </th>
                <th> User </th>
                <th> Product </th>
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
                    key={order.order_id}
                  >
                    <td data-col-title="Order">  {order.order_id} </td>
                    <td data-col-title="User"> {order.user_id } </td>
                    <td data-col-title="Product"> {order.product_id } </td>
                    <td data-col-title="Price"> {order.product_price} </td>
                    <td data-col-title="Units"> {order.amount} </td>
                    <td data-col-title="Monto "> {formatCurrency(order.product_price * order.amount)} </td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
    );
}

export default OrdersDetailList;