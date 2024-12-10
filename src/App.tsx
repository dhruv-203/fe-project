import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./Components/HomePage/Footer/Footer";
import HeaderLayout from "./Components/HomePage/Header/HeaderLayout";
import Layout from "./Components/HomePage/Layout";
import { giveData } from "./Pages/ProductsPage/data2";
import { initializeCategoryList, initializeProducts } from "./Store";
import {
  useCheckUserMutation,
  useRefreshTokenMutation,
} from "./Store/Slices/authApi";
import { Product } from "./Store/Slices/productsSlice";
import "./utility.css";
import { scrollUp } from "./utils";

function App() {
  const { pathname } = useLocation();
  const dispatcher = useDispatch();
  const [checkUser] = useCheckUserMutation();
  const [refreshTokenMut] = useRefreshTokenMutation();
  useEffect(() => {
    scrollUp(false, "smooth", 0, 0);
  }, [pathname]);

  // checking user exists or not in the cookies
  const check = async () => {
    try {
      await checkUser().unwrap();
    } catch (error: any) {
      console.log(error);
      // if not internal server try resetting the credentials
      if (error?.status < 500) {
        try {
          await refreshTokenMut().unwrap();
          await checkUser().unwrap();
          return;
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  useEffect(() => {
    const categoryList = giveData().reduce((acc: string[], curr: Product) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    }, []);
    check();
    dispatcher(initializeProducts(giveData()));
    dispatcher(initializeCategoryList(categoryList));
  }, []);

  return (
    <div className="App">
      <ToastContainer position="top-right" />
      <HeaderLayout />
      <Outlet />
      <Layout className={"mb-3 "}>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
