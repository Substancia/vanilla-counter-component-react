import axios from "axios";
import React, { useEffect, useState } from "react";
import { Counter, CounterState, CounterValue } from "../../components";
import './index.css';

const getURL = 'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/sentienta.json';

const CounterContainer = () => {
  const [value, setValue] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [initialValue, setInitialValue] = useState(1);

  useEffect(() => {
    if(!isSaving) {
      axios.get(getURL).then(res => {
        setValue(res.data !== null ? res.data : 1);
        setInitialValue(res.data !== null ? res.data : 1);
      });
    }
  }, [isSaving]);

  return (
    <div className='Counter-container'>
      <div className='Counter-state-component'>
        <CounterState isSaving={isSaving} />
      </div>

      <div className='Counter-component'>
        <Counter
          initialValue={initialValue}
          setIsSaving={setIsSaving}
        />
      </div>

      <div className='Counter-value-component'>
        <CounterValue value={value} />
      </div>
    </div>
  );
}

export default CounterContainer;