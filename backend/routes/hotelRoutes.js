const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

// Get the number of hotels by city
router.get('/countByCity', hotelController.countByCity);

// Get the number of hotels by type
router.get('/countByType', hotelController.countByType);

// Get top 3 hotels with the highest ratings
router.get('/topRated', hotelController.topRated);

module.exports = router;