import "./Hero.css";

import Button from "../../common/Button";
import Container from "../../common/Container";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,.55), rgba(15,23,42,.55)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000')",
      }}
    >
      <Container>
        <div className="hero-content">

          <div className="hero-text">

            <span className="hero-badge">
              Premium Mobility Solutions
            </span>

            <h1>
              Precision in Every Mile,
              <br />
              Velocity in Every Turn.
            </h1>

            <p>
              Experience premium luxury rentals engineered for comfort,
              performance and elegance.
            </p>

            <div className="hero-buttons">

              <Button>
                Book Now
              </Button>

              <Button variant="secondary">
                Explore Fleet
              </Button>

            </div>

            <div className="hero-stats">

              <div>
                <h2>250+</h2>
                <span>Luxury Cars</span>
              </div>

              <div>
                <h2>40+</h2>
                <span>Locations</span>
              </div>

              <div>
                <h2>5K+</h2>
                <span>Happy Clients</span>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;