import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./featured.css";

const Featured = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/hotels/countByCity');
        console.log('Fetched Cities:', res.data); // Debugging log
        setCities(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCities();
  }, []);

  console.log('Rendered Cities:', cities); // Debugging log
  return (
    <div div className="featured" >
      {
        cities.map(
          city => (
            <div className="featuredItem">
              <img
                src={`http://localhost:5000/${city.image}`}
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>{city.city}</h1>
                <h2>{city.count} properties</h2>
              </div>
            </div>
          )
        )
      }

    </div >
  );
};

export default Featured;
