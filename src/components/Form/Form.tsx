import React, { useState } from 'react';
import './Form.css';

interface FormProps {
  onSearch: (pokemonName: string) => void;
}

const Form: React.FC<FormProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Pokemon name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
