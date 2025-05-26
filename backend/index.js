const express = require('express');
const cors = require('cors');
const shoeRoutes = require('./routes/shoes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/shoes', shoeRoutes);

app.listen(3001, () => console.log('Server running on port 3001'));
