import React, {useState} from 'react';
import Num from './Num';
import ButtonGroup from './ButtonGroup';

const Counter = () => {
  const [num, setNumxx] = useState(0);

  const decreaseNum = () => {
    setNumxx( num - 1 )
  }

  const inreaseNum = () => {
    setNumxx( num + 1 )
  }

  return (
    <div className="container">
      <Num num={num} />
      <ButtonGroup 
        num={num}
        inreaseNum={inreaseNum}
        decreaseNum={decreaseNum}
        setNumxx={setNumxx}
        />
    </div>
  );
};

export default Counter;