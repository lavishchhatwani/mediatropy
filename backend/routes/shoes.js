const express = require('express');
const router = express.Router();
const shoeController = require('../controllers/shoeController');

router.get('/', shoeController.getAllShoes);
router.post('/', shoeController.addShoe);
router.delete('/:id', shoeController.deleteShoe);

module.exports = router;
