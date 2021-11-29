import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import './index.css';

const MAX_VALUE = process.env.REACT_APP_MAX_VALUE || 1000;
const putURL = 'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json';

const Counter = ({ initialValue, setIsSaving }) => {
  const [value, setValue] = useState();
  const [timerID, setTimerID] = useState(null);
  const inputField = useRef();

  useEffect(() => {
    inputField.current.style.width = (15 * MAX_VALUE.toString().length).toString() + 'px';
    setValue(initialValue);
  }, [initialValue]);

  const onValueChange = newVal => {
    if(isNaN(newVal)) newVal = 0;
    if(newVal !== value && newVal <= MAX_VALUE) {
      clearTimeout(timerID);
      setIsSaving(true);
      setTimerID(setTimeout(() => {
        axios.put(putURL, { sentienta: newVal }).then(() => setIsSaving(false));
      }, 300));
      setValue(newVal);
    }
  }

  return (
    <div className='Counter'>
      <button className='decrement' onClick={() => onValueChange(value - 1)}>-</button>

      <input type='text'
        ref={inputField}
        value={value}
        onChange={e => onValueChange(parseInt(e.target.value))}
      />

      <button className='increment' onClick={() => 
        value < MAX_VALUE ? onValueChange(value + 1) : null
      }>+</button>
    </div>
  );
}

export default Counter;