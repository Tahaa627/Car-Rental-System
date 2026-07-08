import "./Navbar.css";

import Container from "../../common/Container";
import Button from "../../common/Button";

const Navbar = () => {
  return (
    <header className="navbar">

      <Container>

        <div className="navbar-content">

          {/* Logo */}

          <div className="logo">
            <h2>Velocis</h2>
          </div>

          {/* Navigation */}

          <nav>

            <ul className="nav-links">

              <li><a href="#">Home</a></li>

              <li><a href="#">Fleet</a></li>

              <li><a href="#">Locations</a></li>

              <li><a href="#">Deals</a></li>

              <li><a href="#">Contact</a></li>

            </ul>

          </nav>

          {/* Buttons */}

          <div className="navbar-buttons">

            <Button variant="secondary">
              Login
            </Button>

            <Button>
              Book Now
            </Button>

          </div>

        </div>

      </Container>

    </header>
  );
};

export default Navbar;