import React, { useState } from 'react';
import './Radio.css'; // Importing styles

export const Radio = () => {
  const [gender, setGender] = useState('male');

  return (
    <div className="radio-container">
      <h1 className="title">Select Gender</h1>

      <div className="radio-group">
        {['male', 'female', 'other'].map((value) => (
          <label key={value} className="radio-label">
            <input
              type="radio"
              name="gender"
              value={value}
              checked={gender === value}
              onChange={(e) => setGender(e.target.value)}
            />
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </label>
        ))}
      </div>

      <h2 className="result-title">Selected Gender:</h2>
      <p className="result-text">This is a gender: <strong>{gender}</strong></p>
    </div>
  );
};