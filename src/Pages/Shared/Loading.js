import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loading = () => {
    return (
        <Triangle
            height="50"
            width="380"
            className="item-center"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    );
};

export default Loading;