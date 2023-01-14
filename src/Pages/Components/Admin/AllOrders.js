import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // axios.get('http://localhost:5000/orders').then(res => setOrders(res));
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div >
            <h1 className="text-xl font-bold"> total Orders : {orders.length}</h1>
            <div className="overflow-x-auto px-28">
                <table className="table w-full ">
                    {/* <!-- head --> */}
                    <thead >
                        <tr >
                            <th>SL.</th>
                            <th>name</th>
                            <th>email</th>
                            <th>quantity</th>
                            <th>address</th>
                            <th>phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.quantity}</td>
                                <td>{order.address}</td>
                                <td>{order.phoneNumber}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllOrders;