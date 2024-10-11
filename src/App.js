import './App.css';
import HeaderLayout from './Components/HomePage/Header/HeaderLayout';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <HeaderLayout />
      <Outlet />

    </div>
  );
}

export default App;
