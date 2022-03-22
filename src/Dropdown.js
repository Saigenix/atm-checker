import React from 'react';
import './App.css';
 const Dropdown = ({ label, value, options, onChange }) => {
  return (
          <label >
            {label}
            <select value={ value} onChange={onChange} className='Search'>
              {options.map((option) => (
                <option value={option.value}>{"... " + option.label}</option>
              ))}
            </select>
          </label>
        );
      };

export default Dropdown