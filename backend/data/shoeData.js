let shoes = [];

exports.getAll = async () => shoes;

exports.add = async (shoe) => {
  shoes.push(shoe);
  return shoe;
};

exports.remove = async (id) => {
  shoes = shoes.filter(s => s.id !== id);
};
