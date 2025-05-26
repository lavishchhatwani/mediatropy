import React, { useState } from 'react';
import './AddShoeForm.css';

function AddShoeForm({ onAdd }) {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && brand) {
      onAdd({ name, brand });
      setName('');
      setBrand('');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add a New Shoe</h2>
      <input
        className="form-input"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        className="form-input"
        placeholder="Brand"
        value={brand}
        onChange={e => setBrand(e.target.value)}
      />
      <button className="form-button" type="submit">Add Shoe</button>
    </form>
  );
}

export default AddShoeForm;
