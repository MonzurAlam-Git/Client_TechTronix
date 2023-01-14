import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    // const { data, isLoading } = useQuery('partsDetails', () => {
    //     fetch('/public/products.json')
    //         .then(res => res.json())
    // })
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h1 className="text-4xl font-bold">S E R V I C E S</h1>
            <div className='flex justify-center'>
                {parts.map(part => <Part key={part._id} part={part}></Part>)}
            </div>

        </div>
    );
};

export default Parts;