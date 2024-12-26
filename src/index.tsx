import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "react-toastify/ReactToastify.css";
import App from "./App";
import contactImg from "./Assets/AboutUs/contact.png";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import ContextProvider from "./Context/context";
import "./index.css";
import AboutUs from "./Pages/AboutUsPage/AboutUs";
import Login from "./Pages/AuthPages/Login";
import Registration from "./Pages/AuthPages/Registration";
import Cart from "./Pages/Cart/Cart";
import ContactUs from "./Pages/ContactUs/ContactUs";
import HomePage from "./Pages/HomePage/HomePage";
import Orders from "./Pages/Orders";
import ProductDetails from "./Pages/ProductDetailPage/ProductDetails";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import Profile from "./Pages/Profile/Profile";
import { store } from "./Store";

const rootElement = document.getElementById("root");
const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to={"home"} />,
  },
  {
    path: "home",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs img={contactImg} />,
      },
      {
        path: "cart",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Cart />,
          },
        ],
      },
      {
        path: "orders",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Orders />,
          },
        ],
      },
      {
        path: "profile",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: <ProtectedRoute />,
    children: [
      {
        path: "register",
        element: <App />,
        children: [
          {
            path: "",
            element: <Registration />,
          },
        ],
      },
      {
        path: "login",
        element: <App />,
        children: [
          {
            path: "",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ContextProvider>
          <RouterProvider router={router} />
        </ContextProvider>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
