import './App.css';
import HeaderLayout from './Components/HomePage/Header/HeaderLayout';
import { Outlet } from 'react-router-dom';
import Layout from './Components/HomePage/Layout';
import Footer from './Components/HomePage/Footer/Footer';
import './utility.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
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
