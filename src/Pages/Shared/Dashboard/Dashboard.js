import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile mt-4">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h1 className='text-3xl font-bold text-purple-600 text-center'>Welcome to  Dashboard -- <span className="">{user.displayName}</span> </h1>
                {/* element upper Outlet will exist upper in all routes in nested routing */}
                {/* <h1 className='text-3xl font-bold text-blue-600'>Outlet experiencing</h1> */}

                <Outlet></Outlet>

                {/* element lower Outlet will exist lower in all routes in nested routing */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                {/* <h1 className='text-3xl font-bold text-blue-600'>Outlet experiencing</h1> */}


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='font-semibold'><Link to="/dashboard">My Orders</Link></li>
                    <li className='font-semibold'><Link to="/dashboard/addReview">My Review</Link></li>
                    <li className='font-semibold'><Link to="/dashboard/myProfile">My Profile</Link></li>
                    {/* {admin && <li><Link to="/dashboard/users">All Users</Link></li>} */}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;