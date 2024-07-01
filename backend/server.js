const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const connectDB = require('./config/db');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/test', (req, res) => {
  res.send('Hello World!');
});

app.use('/images', express.static(path.join(__dirname, 'data/City Image')));

app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
