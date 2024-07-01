const Hotel = require('../models/hotel');

// Mapping of cities to their image URLs
const cityImages = {
  'Ha Noi': 'images/Ha Noi.jpg',
  'Ho Chi Minh': 'images/HCM.jpg',
  'Da Nang': 'images/Da Nang.jpg'
};

// Mapping of types to their image URLs
const typeImages = {
  'hotel': 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
  'apartments': 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
  'resorts': 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
  'villas': 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
  'cabins': 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg'
};

// Get the number of hotels by city
exports.countByCity = async (req, res) => {
  try {
    const cities = ['Ha Noi', 'Ho Chi Minh', 'Da Nang'];
    const counts = await Promise.all(cities.map(async (city) => {
      const count = await Hotel.countDocuments({ city });
      return { city, count, image: cityImages[city] };
    }));
    res.status(200).json(counts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get the number of hotels by type
exports.countByType = async (req, res) => {
  try {
    const types = ['hotel', 'apartments', 'resorts', 'villas', 'cabins'];
    const counts = await Promise.all(types.map(async (type) => {
      const count = await Hotel.countDocuments({ type });
      return { type, count, image: typeImages[type] };
    }));
    res.status(200).json(counts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get top 3 hotels with the highest ratings
exports.topRated = async (req, res) => {
  try {
    const topHotels = await Hotel.find().sort({ rating: -1 }).limit(3);
    res.status(200).json(topHotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
