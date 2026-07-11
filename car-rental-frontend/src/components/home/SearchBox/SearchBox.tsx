import "./SearchBox.css";

import Container from "../../common/Container";
import Button from "../../common/Button";

const SearchBox = () => {
  return (
    <section className="search-section">
      <Container>

        <div className="search-box">

          <div className="input-group">
            <label>Pickup Location</label>
            <input
              type="text"
              placeholder="Enter city"
            />
          </div>

          <div className="input-group">
            <label>Return Location</label>
            <input
              type="text"
              placeholder="Enter city"
            />
          </div>

          <div className="input-group">
            <label>Pickup Date</label>
            <input type="date" />
          </div>

          <div className="input-group">
            <label>Return Date</label>
            <input type="date" />
          </div>

          <div className="input-group">
            <label>Car Type</label>

            <select>

              <option>Any</option>

              <option>Sedan</option>

              <option>SUV</option>

              <option>Luxury</option>

              <option>Sports</option>

            </select>

          </div>

          <Button>
            Search 
          </Button>

        </div>

      </Container>
    </section>
  );
};

export default SearchBox;