import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './Pages/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import Provider from './Context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "/products",
        element: <ProductsPage />
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);



