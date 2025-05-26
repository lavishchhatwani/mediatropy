const { v4: uuidv4 } = require('uuid');
const shoeData = require('../data/shoeData');

exports.getShoes = async () => shoeData.getAll();
exports.addShoe = async ({ name, brand }) => shoeData.add({ id: uuidv4(), name, brand });
exports.deleteShoe = async (id) => shoeData.remove(id);
