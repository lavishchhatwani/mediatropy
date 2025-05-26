import React, { useEffect, useState } from 'react';
import ShoeList from './components/ShoeList';
import AddShoeForm from './components/AddShoeForm';
import { fetchShoes, addShoe, deleteShoe } from './services/api';

function App() {
  const [shoes, setShoes] = useState([]);

  const loadShoes = async () => {
    const data = await fetchShoes();
    setShoes(data);
  };

  useEffect(() => {
    loadShoes();
  }, []);

  const handleAdd = async (shoe) => {
    await addShoe(shoe);
    loadShoes();
  };

  const handleDelete = async (id) => {
    await deleteShoe(id);
    loadShoes();
  };

  return (
    <div>
      <h1>Shoe Collection</h1>
      <AddShoeForm onAdd={handleAdd} />
      <ShoeList shoes={shoes} onDelete={handleDelete} />
    </div>
  );
}

export default App;
