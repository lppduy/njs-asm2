import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="images/hotel_1.webp"
          alt=""
          className="fpImg"
        />
        <span className="fpName"><a href="./hotels/0" target="_blank">Aparthotel Stare Miasto</a></span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="images/hotel_2.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName"><a href="./hotels/0" target="_blank">Comfort Suites Airport</a></span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="images/hotel_3.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName"><a href="./hotels/0" target="_blank">Four Seasons Hotel</a></span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="images/hotel_4.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName"><a href="./hotels/0" target="_blank">Hilton Garden Inn</a></span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
