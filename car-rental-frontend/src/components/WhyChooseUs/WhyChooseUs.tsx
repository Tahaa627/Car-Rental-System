import "./WhyChooseUs.css";
import { features } from "../../data/features";

const WhyChooseUs = () => {
  return (
    <section className="why-section">

      <div className="section-title">

        <h2>Why Choose Velocis?</h2>

        <p>
          Premium services designed to give you
          a smooth and reliable rental experience.
        </p>

      </div>

      <div className="feature-grid">

        {features.map((feature) => (

          <div
            className="feature-card"
            key={feature.id}
          >

            <div className="icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default WhyChooseUs;