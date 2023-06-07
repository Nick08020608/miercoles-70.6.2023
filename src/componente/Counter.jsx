import React, {useState} from 'react';

const Counter = () => {
    const [Count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(Count + 1);
    };

    const handleDecrement = () => {
        setCount(Count - 1);
    };

    return (
        <div>
            <h1>Contador</h1>
            <p>El valor actual es: {Count}</p>
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decremento</button>
        </div>
    );
};

export default Counter;