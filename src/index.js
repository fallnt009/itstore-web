import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import LoadingContextProvider from './contexts/LoadingContext';
import CartContextProvider from './contexts/CartContext';
import ProductContextProvider from './contexts/ProductContext';
import AddressContextProvider from './contexts/AddressContext';
import CheckoutContextProvider from './contexts/CheckoutContext';
import OrderContextProvider from './contexts/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <AddressContextProvider>
              <CheckoutContextProvider>
                <OrderContextProvider>
                  <App />
                </OrderContextProvider>
              </CheckoutContextProvider>
            </AddressContextProvider>
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </LoadingContextProvider>
  </React.StrictMode>
);
