import './App.css';
import HeaderLayout from './Components/HomePage/Header/HeaderLayout';
import { Outlet } from 'react-router-dom';
import Layout from './Components/HomePage/Layout';
import Footer from './Components/HomePage/Footer/Footer';
import './utility.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollUp } from './utils';
function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollUp(false, 'smooth', 0, 0)
  }, [pathname])
  return (
    <div className="App">
      <HeaderLayout />
      <Outlet />
      <Layout className={"mb-3 "}><Footer /></Layout>
    </div>
  );
}

export default App;
