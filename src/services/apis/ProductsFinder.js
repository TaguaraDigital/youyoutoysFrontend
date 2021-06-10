const ProductsFinder = {};
// const URL = "http://localhost:3500/api/v1/products/"
const URL = "https://youyoutoysbackend.vercel.app/api/v1/products/";

ProductsFinder.all = async () => {
  const response = await fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

ProductsFinder.order = async (user_id) => {
  const response = await fetch(`${URL}${user_id}/ordersGet`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};

ProductsFinder.create = async ({
  code,
  brand,
  category,
  description,
  inventory,
  price,
  pack,
}) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      code,
      brand,
      category,
      description,
      inventory,
      price,
      pack,
    }),
  });
  return await response.json();
};

ProductsFinder.byId = async (id) => {
  const response = await fetch(URL + id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

ProductsFinder.orderCreate = async (user_id, orders) => {
  const response = await fetch(`${URL}${user_id}/ordersCreate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orders),
  });

  return await response.json();
};

ProductsFinder.orderConfirm = async (user_id, order_id) => {
  const response = await fetch(`${URL}${user_id}/ordersConfirm`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id, order_id }),
  });

  return await response.json();
};

export default ProductsFinder;
