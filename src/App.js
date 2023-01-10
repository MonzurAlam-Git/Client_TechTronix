import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Components/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import 'swiper/css';
import PartDetails from './Pages/Components/Home/PartDetails';
import OrderProcess from './Pages/Components/Home/OrderProcess';
import ContactUs from './Pages/Components/Home/ContactUs';
import Login from './Pages/Components/Login/Login';
import Register from './Pages/Components/Login/Register';
import ForgetPassword from './Pages/Components/Login/ForgetPassword';
import NotFound from './Pages/NotFound';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* Home Page related Routing  */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="partDetails" element={<PartDetails></PartDetails>}></Route>
        <Route path="orderProcess" element={<OrderProcess></OrderProcess>}></Route>
        <Route path="contactUs" element={<ContactUs></ContactUs>}></Route>
        {/* Login Page related Routing  */}
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="forgetPassword" element={<ForgetPassword></ForgetPassword>}></Route>
        {/* Error 404 related Routing  */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}



export default App;
