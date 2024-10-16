import './App.css';
import HeaderLayout from './Components/HomePage/Header/HeaderLayout';
import { Outlet } from 'react-router-dom';
import Layout from './Components/HomePage/Layout';
import Footer from './Components/HomePage/Footer/Footer';
import './utility.css'
function App() {

  return (
    <div className="App">
      <HeaderLayout />
      <Outlet />
      <Layout className={"mb-3 "}><Footer /></Layout>
    </div>
  );
}

export default App;
