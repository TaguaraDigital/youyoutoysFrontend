import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { AuthContext } from "../../hooks/contexts/AuthContext";
import OrdersFinder from "../../services/apis/OrdersFinder";

import { Container } from "./Order.Style";

const OrderHeader = () => {

    let history = useHistory();
    const { currentUser } = useContext(AuthContext);
    const { id } = useParams();

    const [summaryOrder, setSummaryOrder] = useState({})

    const formatCurrency = (num) =>  {
        return Number(num.toFixed(2)).toLocaleString();
      }

      useEffect(() => {

        const fetchData = async () => {
  
          try {
            const response = await OrdersFinder.orderById(id);
            if (response.message === 'ok') {
                setSummaryOrder( await response.data.orders)
            }
  
          } catch (err) { console.log(err)}
        };
        fetchData();
    
      }, [])
  
  
   
    return (
        <Container>
            {(summaryOrder && summaryOrder.length > 0)
                ?<>
                <h1>Resumen del pedido {summaryOrder[0].order_id} de {summaryOrder[0].name} </h1>
                <div className="flex">
                    <p>Cliente : {summaryOrder[0].user_id} - {summaryOrder[0].name} </p>
                    <p>Tota Pedido : {summaryOrder[0].totalOrder}</p>
                    <p>Total Unidades : {summaryOrder[0].units}</p>
                </div>
                </>
                : console.log('no')
            }
        </Container>
    )
}

export default OrderHeader
