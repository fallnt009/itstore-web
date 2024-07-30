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
import DrawerContextProvider from './contexts/DrawerContext';
import CategoryContextProvider from './contexts/CategoryContext';
import AdminContextProvider from './contexts/AdminContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoadingContextProvider>
      <DrawerContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <CategoryContextProvider>
              <ProductContextProvider>
                <AddressContextProvider>
                  <CheckoutContextProvider>
                    <OrderContextProvider>
                      <AdminContextProvider>
                        <App />
                      </AdminContextProvider>
                    </OrderContextProvider>
                  </CheckoutContextProvider>
                </AddressContextProvider>
              </ProductContextProvider>
            </CategoryContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </DrawerContextProvider>
    </LoadingContextProvider>
  </React.StrictMode>
);
