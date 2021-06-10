const OrdersFinder = {};
// const URL = "http://localhost:3500/api/v1/orders/"
const URL = "https://youyoutoysbackend.vercel.app/api/v1/orders/";

// Get all Orders -- > summary [one line per order]
OrdersFinder.all = async () => {
  const response = await fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

// Get order by Id Summary -- > summary of and particular order [one line]
OrdersFinder.orderById = async (order_id) => {
  const response = await fetch(`${URL}${order_id}/header`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};

// Get order by Id -- > order detail at order id submit
OrdersFinder.byId = async (order_id) => {
  const response = await fetch(`${URL}${order_id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};

// Find order of a user
// Get all products join with orders of a customer
OrdersFinder.order = async (user_id) => {
  const response = await fetch(`${URL}${user_id}/ordersGet`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};
// Create a order for a user
OrdersFinder.orderCreate = async (user_id, orders) => {
  const response = await fetch(`${URL}${user_id}/ordersCreate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orders),
  });

  return await response.json();
};

OrdersFinder.orderConfirm = async (user_id, order_id) => {
  const response = await fetch(`${URL}${user_id}/ordersConfirm`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id, order_id }),
  });

  return await response.json();
};

OrdersFinder.delete = async (order_id) => {
  const response = await fetch(`${URL}${order_id}/orderDelete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
  return await response.json();
};

export default OrdersFinder;
