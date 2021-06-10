import {useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import OrdersFinder from "../../services/apis/OrdersFinder";
import { OrdersContext } from "../../hooks/contexts/OrdersContext";

const OrdersGetAll = () => {

  let history = useHistory();

  const { ordersAll, setOrdersAll } = useContext(OrdersContext);

  const formatCurrency = (num) =>  {
    return Number(num.toFixed(2)).toLocaleString();
  }
 
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await OrdersFinder.all();
        if (response.message === 'ok'){
            setOrdersAll(response.data.orders)
        }

      } catch (err) { console.log(err)}
    };
    fetchData();

  }, [])

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await OrdersFinder.delete(id);
      setOrdersAll(
        ordersAll.filter((order) => {
          return order.order_id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleOrderSelect = (id) => {
    console.log('go to order', id)
    history.push(`/ordersDetails/${id}`);
  };

    return (
    <div className="list-group">
    <table className="smart-table">
      <thead>
        <tr>
          <th> Order </th>
          <th> User </th>
          <th> Name </th>
          <th> Units </th>
          <th> Amount </th>
          <th> Status </th>
          <th >Edit</th>
          <th >Delete</th>
        </tr>
      </thead>
      <tbody>
      { ordersAll && ordersAll.length > 0 &&  
        ordersAll.map((order) => {
          return (
            <tr key={order.order_id}
                onClick={() => handleOrderSelect(order.order_id)}
            >
              <td data-col-title="Order">  {order.order_id} </td>
              <td data-col-title="User"> {order.user_id } </td>
              <td data-col-title="Name"> {order.name } </td>
              <td data-col-title="Units"> {order.units} </td>
              <td data-col-title="Amount"> {(order.totalOrder)} </td>
              <td data-col-title="Status"> {(order.order_status)} </td>
              <td>
                <button
                  className="btn btn-warning"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => handleDelete(e, order.order_id)}
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

export default OrdersGetAll;