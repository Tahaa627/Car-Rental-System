import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <h2>Velocis</h2>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#">Fleet</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">My Rentals</a></li>
          </ul>
        </nav>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;