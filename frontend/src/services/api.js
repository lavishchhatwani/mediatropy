const API_URL = 'http://localhost:3001/shoes';

export const fetchShoes = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addShoe = async (shoe) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(shoe)
  });
};

export const deleteShoe = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
