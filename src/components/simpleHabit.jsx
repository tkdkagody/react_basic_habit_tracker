import React, { Component, useCallback, useRef, useState } from 'react';

const SimpleHabit = props => {
    const [count, setCount] = useState(0); 
    const spanRef = useRef(); //한번만들어 메모리에 저장해두고 그것을 다시 사용한다.  simplehabit호출시마다 재호출되는것을 막아야함 

    const handleIncrement = useCallback(() => {

        setCount(count + 1);

      });

    return (
        <li className="habit">
          <span ref={spanRef} className="habit-name">Reading</span>
          <span className="habit-count">{count}</span>
          <button
            className="habit-button habit-increase"
            onClick={handleIncrement}
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </li>
      );
};

export default SimpleHabit;



