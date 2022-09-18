import { useParams } from "react-router-dom";

// IMPORT ARRAY
import cars from "../cars";

// IMPORT CSS
import "./CarDetails.css";

const CarDetails = () => {
  let params = useParams();
  console.log(params.id);
  // -1 because the array was not numbered correctly
  let pkw = cars[params.id - 1];
  let picture = `https://source.unsplash.com/600x600/?${pkw.CarMake}`;
  return (
    <div className="car-detail-wrapper">
      <img src={picture} alt="" />
      <h2>{pkw.CarModel}</h2>
      <h2>{pkw.CarMake}</h2>
      <h2>{pkw.CarYear}</h2>
    </div>
  );
};

export default CarDetails;
