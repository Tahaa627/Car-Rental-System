import "./Testimonials.css";
import { testimonials } from "../../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="section-title">
        <h2>What Our Customers Say</h2>

        <p>
          Thousands of satisfied customers trust Velocis
          for their travel needs.
        </p>
      </div>

      <div className="testimonial-grid">

        {testimonials.map((customer) => (

          <div
            className="testimonial-card"
            key={customer.id}
          >

            <img
              src={customer.image}
              alt={customer.name}
            />

            <h3>{customer.name}</h3>

            <span>{customer.role}</span>

            <div className="stars">
              {"⭐".repeat(customer.rating)}
            </div>

            <p>{customer.review}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Testimonials;