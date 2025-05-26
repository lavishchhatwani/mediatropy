const shoeService = require('../services/shoeService');

exports.getAllShoes = async (req, res) => {
  const shoes = await shoeService.getShoes();
  res.json(shoes);
};

exports.addShoe = async (req, res) => {
  const { name, brand } = req.body;
  const newShoe = await shoeService.addShoe({ name, brand });
  res.status(201).json(newShoe);
};

exports.deleteShoe = async (req, res) => {
  const { id } = req.params;
  await shoeService.deleteShoe(id);
  res.status(204).end();
};
