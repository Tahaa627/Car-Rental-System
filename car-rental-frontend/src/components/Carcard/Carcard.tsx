import "./CarCard.css";

interface CarProps {
  name: string;
  type: string;
  price: number;
  image: string;
}

const CarCard = ({
  name,
  type,
  price,
  image,
}: CarProps) => {
  return (
    <div className="car-card">

      <img src={image} alt={name} />

      <div className="car-info">

        <h3>{name}</h3>

        <p>{type}</p>

        <h4>${price}/day</h4>

        <button>
          Rent Now
        </button>

      </div>

    </div>
  );
};

export default CarCard;