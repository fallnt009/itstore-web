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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <AddressContextProvider>
              <App />
            </AddressContextProvider>
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </LoadingContextProvider>
  </React.StrictMode>
);
