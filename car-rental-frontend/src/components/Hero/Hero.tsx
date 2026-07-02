import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="overlay">

        <div className="hero-content">

          <span className="tag">
            Premium Mobility Solutions
          </span>

          <h1>
            Precision in Every Mile,
            Velocity in Every Turn.
          </h1>

          <p>
            Experience premium luxury rentals
            engineered for comfort,
            performance and elegance.
          </p>

          <div className="hero-buttons">

            <button className="primary">
              Book Now
            </button>

            <button className="secondary">
              Explore Fleet
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;