import React from "react";
import './index.css';

const CounterValue = ({ value }) => {
  return (
    <div className='Counter-value'>
      <p>Counter value : {value}</p>
    </div>
  );
}

export default CounterValue;