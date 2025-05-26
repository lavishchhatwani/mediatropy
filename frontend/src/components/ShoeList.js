import React from 'react';
import './ShoeList.css';

function ShoeList({ shoes, onDelete }) {
  return (
    <div className="shoe-list-container">
      <h2>Shoe Inventory</h2>
      <ul className="shoe-list">
        {shoes.map(shoe => (
          <li key={shoe.id} className="shoe-item">
            <div className="shoe-info">
              <span className="shoe-name">{shoe.name}</span>
              <span className="shoe-brand">{shoe.brand}</span>
            </div>
            <button className="delete-button" onClick={() => onDelete(shoe.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoeList;
