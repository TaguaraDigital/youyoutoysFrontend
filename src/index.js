import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthContextProvider from "./hooks/contexts/AuthContext";
import ProductsContextProvider from "./hooks/contexts/ProductsContext";
import OrdersContextProvider from "./hooks/contexts/OrdersContext";

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <AuthContextProvider>
        <ProductsContextProvider>
          <OrdersContextProvider>
            <App />
          </OrdersContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
