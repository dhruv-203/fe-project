import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/HomePage/Footer/Footer";
import HeaderLayout from "./Components/HomePage/Header/HeaderLayout";
import Layout from "./Components/HomePage/Layout";
import { giveData } from "./Pages/ProductsPage/data2";
import { initializeCategoryList, initializeProducts } from "./Store";
import { Product } from "./Store/Slices/productsSlice";
import "./utility.css";
import { scrollUp } from "./utils";

function App() {
  const { pathname } = useLocation();
  const dispatcher = useDispatch();
  useEffect(() => {
    scrollUp(false, "smooth", 0, 0);
  }, [pathname]);
  useEffect(() => {
    const categoryList = giveData().reduce((acc: string[], curr: Product) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    }, []);
    dispatcher(initializeProducts(giveData()));
    dispatcher(initializeCategoryList(categoryList));
  }, []);

  return (
    <div className="App">
      <HeaderLayout />
      <Outlet />
      <Layout className={"mb-3 "}>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
