import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Components/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import 'swiper/css';
import PartDetails from './Pages/Components/Home/PartDetails';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="partDetails" element={<PartDetails></PartDetails>}></Route>
      </Routes>

    </div>
  );
}



export default App;
