import React from 'react';
import './App.css';
 const AtmDrop= ({ label, value, options, onChange }) => {
  return (
         
          <label >
            {label}
            <select value={ value}onChange={onChange} className='atmstyle' >
              {options.map((option) => (
                <option value={option.label } className='options'>{option.label}</option>
              ))}
            </select>
          </label>
        );
      };

export default AtmDrop;