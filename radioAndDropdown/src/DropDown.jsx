import React, { useState } from 'react';

export const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState('india');

  const countries = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'USA' },
    { value: 'uk', label: 'UK' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'japan', label: 'Japan' },
    { value: 'china', label: 'China' },
    { value: 'south africa', label: 'South Africa' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'germany', label: 'Germany' },
    { value: 'france', label: 'France' },
    { value: 'italy', label: 'Italy' },
    { value: 'spain', label: 'Spain' },
    { value: 'russia', label: 'Russia' },
    { value: 'south korea', label: 'South Korea' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'argentina', label: 'Argentina' },
    { value: 'netherlands', label: 'Netherlands' },
    { value: 'sweden', label: 'Sweden' },
    { value: 'norway', label: 'Norway' },
    { value: 'finland', label: 'Finland' },
    { value: 'denmark', label: 'Denmark' },
    { value: 'switzerland', label: 'Switzerland' },
    { value: 'belgium', label: 'Belgium' },
    { value: 'austria', label: 'Austria' },
    { value: 'poland', label: 'Poland' },
    { value: 'czech republic', label: 'Czech Republic' },
    { value: 'hungary', label: 'Hungary' },
    { value: 'portugal', label: 'Portugal' },
    { value: 'greece', label: 'Greece' },
    { value: 'turkey', label: 'Turkey' },
    { value: 'iran', label: 'Iran' },
    { value: 'israel', label: 'Israel' },
    { value: 'qatar', label: 'Qatar' },
    { value: 'saudi arabia', label: 'Saudi Arabia' },
    { value: 'uae', label: 'UAE' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '300px'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '20px', color: '#333' }}>🌍 Choose Country</h1>

        <select
          id="dropdown"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            border: '2px solid #999',
            borderRadius: '8px',
            fontSize: '16px',
            color: '#333',
            background: '#f0f0f0'
          }}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>

        <h2 style={{
          marginTop: '20px',
          textAlign: 'center',
          fontSize: '18px',
          color: '#444'
        }}>
          ✅ Selected: <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{selectedOption}</span>
        </h2>
      </div>
    </div>
  );
};
