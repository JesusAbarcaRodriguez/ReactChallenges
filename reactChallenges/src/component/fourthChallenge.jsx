import React, { useState } from 'react';

function InputLabel() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div class="flex flex-col">
      <label htmlFor="input">Data Binding</label>
      <input  type="text" id="input" value={inputValue} onChange={handleInputChange} placeholder="Digite texto"/>
      <label>{inputValue}</label>
    </div>
  );
}

export default InputLabel;
