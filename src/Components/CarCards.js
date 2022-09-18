import { Link } from "react-router-dom";

const CarCards = (props) => {
  return (
    <div className="grid-item">
      <p>{props.CarMake}</p>
      <Link to={`/${props.id}`}>Read more</Link>
    </div>
  );
};

export default CarCards;
