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
import Purchase from './Pages/Shared/Purchase';
import Dashboard from './Pages/Shared/Dashboard/Dashboard';
import RequireAuth from './Pages/Components/RequireAuth';
import MyBlogs from './Pages/Shared/MyBlogs';
import Portfolio from './Pages/Shared/Portfolio';
import MyOrders from './Pages/Shared/Dashboard/MyOrders';
import AddReview from './Pages/Shared/Dashboard/AddReview';
import MyProfile from './Pages/Shared/Dashboard/MyProfile';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* Home Page related Routing  */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>


        <Route path="orderProcess" element={<OrderProcess></OrderProcess>}></Route>
        <Route path="contactUs" element={<ContactUs></ContactUs>}></Route>

        {/* Shared Page Routing  */}
        <Route path="Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="blogs" element={<MyBlogs></MyBlogs>}></Route>
        <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>

        {/* Login Page related Routing  */}
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="forgetPassword" element={<ForgetPassword></ForgetPassword>}></Route>

        {/* Shared Page Routing  */}

        <Route path="/part/:id" element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>

        {/* Dashboard Routing  */}

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>} />
          <Route path="/dashboard/addReview" element={<AddReview></AddReview>} />
          <Route path="/dashboard/myProfile" element={<MyProfile></MyProfile>} />
        </Route>

        {/* <Route path="/dashboard/users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>} /> */}

        {/* Error 404 related Routing  */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}



export default App;
