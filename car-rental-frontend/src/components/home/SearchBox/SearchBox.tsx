import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search-box">

      <div className="search-field">
        <label>Location</label>
        <input
          type="text"
          placeholder="Enter pickup location"
        />
      </div>

      <div className="search-field">
        <label>Pick-up</label>
        <input type="date" />
      </div>

      <div className="search-field">
        <label>Return</label>
        <input type="date" />
      </div>

      <div className="search-field">
        <label>Vehicle</label>

        <select>
          <option>All Cars</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Luxury</option>
          <option>Electric</option>
        </select>

      </div>

      <button className="search-btn">
        Search Cars
      </button>

    </div>
  );
};

export default SearchBox;