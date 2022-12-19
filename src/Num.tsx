import React from 'react';

const Num = (props: any) => {
    const { num } = props;

    return (
        <div>
            <h1>{num}</h1>
        </div>
    );
};

export default Num;