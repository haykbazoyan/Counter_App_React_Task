import React from 'react'

export default function Input({ type, inputName, defaultValue, onChange }) {
  return (
      <label>
        { `${inputName}: ` }
        <input type={type} defaultValue={defaultValue} onChange={onChange} />
      </label>
  );
} 