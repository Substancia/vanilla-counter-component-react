import React from "react";
import './index.css';

const CounterState = ({ isSaving }) => {
  return (
    <div className='Counter-state'>
      {
        isSaving &&
        <div className='loaders'>
          <div className='loader-circle' />
          <p>Saving counter value</p>
        </div>
      }
    </div>
  );
}

export default CounterState;