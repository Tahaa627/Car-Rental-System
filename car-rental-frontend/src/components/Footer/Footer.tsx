import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h2>Velocis</h2>

          <p>
            Premium car rentals designed for comfort,
            luxury and unforgettable journeys.
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#">Home</a></li>

            <li><a href="#">Fleet</a></li>

            <li><a href="#">About</a></li>

            <li><a href="#">Contact</a></li>

          </ul>

        </div>

        <div className="footer-column">

          <h3>Services</h3>

          <ul>

            <li>Luxury Cars</li>

            <li>Airport Pickup</li>

            <li>Corporate Rental</li>

            <li>Long Term Rental</li>

          </ul>

        </div>

        <div className="footer-column">

          <h3>Contact</h3>

          <ul>

            <li>📞 +92 300 1234567</li>

            <li>✉ info@velocis.com</li>

            <li>📍 Lahore, Pakistan</li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Velocis. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;