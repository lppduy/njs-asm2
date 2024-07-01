import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/hotels/topRated');
        setTopRated(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTopRated();
  }, []);

  return (
    <div className="fp">
      {topRated.map((property) => (
        <div className="fpItem" key={property._id}>
          <img
            src={property.photos[0]} // Assuming the first photo is the main one
            alt={property.name}
            className="fpImg"
          />
          <span className="fpName"><a href={`./hotels/${property._id}`} target="_blank">{property.name}</a></span>
          <span className="fpCity">{property.city}</span>
          <span className="fpPrice">Starting from ${property.cheapestPrice}</span>
          <div className="fpRating">
            <button>{property.rating}</button>
            <span>{property.rating >= 9 ? 'Exceptional' : property.rating >= 8 ? 'Excellent' : 'Good'}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
