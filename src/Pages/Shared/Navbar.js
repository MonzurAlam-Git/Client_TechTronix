import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="navbar px-8 py-0 h-4">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Login
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Login</a></li>
                                <li><a>Register</a></li>
                            </ul>
                        </li>
                        <li><a >Item 3</a></li>
                    </ul>
                </div>
                {/* <h1 className='text-xl font-bold'>TechTronix</h1> */}
                <Link to="/home"> <img className='h-24' style={{ height: '250px' }} src="https://i.ibb.co/xSrmRyC/Whats-App-Image-2023-01-09-at-7-09-16-PM-removebg-preview.jpg" alt="" /></Link>

            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>SignIn</a></li> */}
                    {/* <li tabIndex={0}>
                        <a>
                            Login
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </li> */}
                    {/* <li><Link to='/part/:id'>Purchase</Link></li> */}
                    <li><Link to='/Dashboard'>Dashboard</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    {
                        user ?
                            <div className="dropdown dropdown-bottom">
                                <label tabIndex={0} className="btn btn-ghost rounded-btn">Profile </label>
                                <ul tabIndex={0} className="menu dropdown-content p-2 shadow rounded-box w-52 mt-4">
                                    <li> <button onClick={() => signOut(auth)} className="btn bg-blue-50 ">Log Out</button> </li>
                                    {/* <li> <Link to='/register'> Register</Link> </li> */}
                                </ul>
                            </div>
                            :
                            <div>
                                <div className="dropdown dropdown-bottom">
                                    <label tabIndex={0} className="btn btn-ghost rounded-btn">Log In</label>
                                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                        <li> <Link to='/login'> Login</Link> </li>
                                        <li> <Link to='/register'> Register</Link> </li>
                                    </ul>
                                </div>
                            </div>

                    }


                </ul>
            </div>
        </div>
    );
};

export default Navbar;