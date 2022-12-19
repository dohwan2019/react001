import React from 'react';

const ButtonGroup = (props: any) => {
    const { num, inreaseNum, decreaseNum, setNumxx } = props;
    
    return (
        <div>
            <div>
                <button onClick={inreaseNum}>+</button>
                <button onClick={decreaseNum}>-</button>
                <button onClick={() => setNumxx(num * 2)}>* 2</button>
                <button onClick={() => setNumxx(num / 2)}>/ 2</button>
            </div>
        </div>
    );
};

export default ButtonGroup;