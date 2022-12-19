import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';

const TimeInterval = () => {
    const [count, setCount] = useState(0);
    const [inputText, setInputText] = useState("");
    const numberElement = useRef<any>();

    useLayoutEffect(() => {
        console.log('useLayoutEffect');
    }, []);

    useEffect(() => {
        console.log('useEffect');
        const intervalId = setInterval(() => setCount((count) => count + 1), 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const focusInput = () => {
        numberElement.current.focus();
    };

    return (
        <React.Fragment>
            <div>
                <input
                    type={"text"}
                    value={inputText}
                    onChange={(e) => {
                    setInputText(e.target.value);
                        }   
                    }
                />
            </div>
            <div>
                <input 
                    type={"number"}
                    ref={numberElement}
                />
                <button 
                    onClick={focusInput}
                >value</button>
            </div>
        </React.Fragment>
    );
};

export default TimeInterval;