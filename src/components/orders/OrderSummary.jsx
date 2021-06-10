import {useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../hooks/contexts/AuthContext";
import { ProductsContext } from "../../hooks/contexts/ProductsContext";
import ProductsFinder from "../../services/apis/ProductsFinder";


import { Container, SummaryHeader } from "./Order.Style";

const OrderSummary = () => {

    let history = useHistory();
    const { currentUser } = useContext(AuthContext);
    const { summary, setSummary, orders, setOrders, orderConfirm, setOrderConfirm } = useContext(ProductsContext);

    const formatCurrency = (num) =>  {
        return Number(num.toFixed(2)).toLocaleString();
    }

    useEffect(() => {
        setSummary(orders.reduce((res, product) => {
            res.units = res.units + product.amount;
            res.amount = res.amount + (product.amount ? product.amount * product.price : 0) 
            return (res)
            }, {units:0, amount:0}))
    }, [orders])

    const handleOrder = async () =>{
        const newOrder = [];
        const newOrderConfirm = [];

        orders.filter((order) => {
            if(order.amount > 0 ) {
                newOrder.push({product_id: order.product_id, product_price: order.price, amount: order.amount})
                newOrderConfirm.push(order)
            }
        })

        try {
            const response = await ProductsFinder.orderCreate(currentUser.user_id,newOrder);
            
            if (response.message === 'ok'){
                const dataOrder = localStorage.getItem('order')
                setOrders(JSON.parse(dataOrder))


                await setOrderConfirm(newOrderConfirm)
                history.push('/ordersConfirm');
            }
    
        } catch (err) { console.log(err)}
    };
    
    return (
        <Container>
            {orders[0] && orders[0].order_id > 0
                ? <h1>Resumen del pedido No {orders[0].order_id} de {currentUser.name} </h1>
                : <h1>Resumen del pedido de {currentUser.name} </h1>
            }
            <SummaryHeader>
                {
                (summary.units > 0) 
                ? <>
                    <p>unidades: {summary.units ? formatCurrency(summary.units) : 0 }</p>
                    <p>Monto : {formatCurrency(summary.amount)} </p>
                    <button
                        onClick={handleOrder}
                        >
                        Enviar el pedido
                    </button>
                </>
                : <p> Coloque las unidades que desea del producto </p>
                }
            </SummaryHeader>
        </Container>
    )
}

export default OrderSummary
