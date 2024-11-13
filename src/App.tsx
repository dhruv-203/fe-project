import './App.css';
import HeaderLayout from './Components/HomePage/Header/HeaderLayout';
import { Outlet } from 'react-router-dom';
import Layout from './Components/HomePage/Layout';
import Footer from './Components/HomePage/Footer/Footer';
import './utility.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollUp } from './utils';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, initializeCategoryList, initializeProducts } from './Store';
import { filterByCategory, Product } from './Store/Slices/productsSlice';
import { giveData } from './Pages/ProductsPage/data2';

function App() {
  const { pathname } = useLocation()
  const dispatcher = useDispatch()
  useEffect(() => {
    scrollUp(false, 'smooth', 0, 0)
  }, [pathname])
  useEffect(() => {
    const categoryList = giveData().reduce((acc: string[], curr: Product) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category)
      }
      return acc
    }, [])
    dispatcher(initializeProducts(giveData()))
    dispatcher(initializeCategoryList(categoryList))
  }, [])



  return (
    <div className="App">
      <HeaderLayout />
      <Outlet />
      <Layout className={"mb-3 "}><Footer /></Layout>
    </div>
  );
}

export default App;
