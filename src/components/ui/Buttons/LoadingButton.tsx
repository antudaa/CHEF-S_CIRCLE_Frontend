import React from 'react';
import { Button } from 'antd';

const LoadingButton = () => {

    return (
        <Button className='w-full h-10 rounded-md' type="primary" loading>
            Loading
        </Button>
    );
};

export default LoadingButton;