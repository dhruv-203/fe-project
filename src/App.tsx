import { useEffect } from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./Components/HomePage/Footer/Footer";
import HeaderLayout from "./Components/HomePage/Header/HeaderLayout";
import Layout from "./Components/HomePage/Layout";
import { RootState } from "./Store";
import {
  useCheckUserMutation,
  useRefreshTokenMutation,
} from "./Store/Slices/authApi";
import { useLazyInitialQuery } from "./Store/Slices/productsApi";
import "./utility.css";
import { scrollUp } from "./utils";

function App() {
  const { pathname } = useLocation();
  const [initialFetchTrigger] = useLazyInitialQuery();
  useEffect(() => {
    initialFetchTrigger(6);
  }, []);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [checkUser, { isLoading: isCheckUserLoading }] = useCheckUserMutation();
  const [refreshTokenMut, { isLoading: isRefreshLoading }] =
    useRefreshTokenMutation();

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
    if (!isAuthenticated) check();
  }, [isAuthenticated]);

  return (
    <div className="App" id="App">
      <ToastContainer position="top-right" />
      {isCheckUserLoading || isRefreshLoading ? (
        <div
          className="container-fluid d-flex align-items-center justify-content-center"
          style={{ height: "70vh" }}
        >
          <ReactLoading type="spin" color="#007bff" height={100} width={100} />
        </div>
      ) : (
        <>
          <HeaderLayout />
          <Outlet />
          <Layout className={"mb-3 "}>
            <Footer />
          </Layout>
        </>
      )}
    </div>
  );
}

export default App;
