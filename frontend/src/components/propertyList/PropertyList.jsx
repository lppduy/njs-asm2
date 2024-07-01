import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./propertyList.css";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/hotels/countByType');
        setProperties(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="pList">
      {properties.map((property) => (
        <div className="pListItem" key={property.type}>
          <img
            src={property.image}
            alt={property.type}
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</h1>
            <h2>{property.count} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
