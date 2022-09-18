// IMPORT ARRAY
import cars from "../cars.js";

// IMPORT COMPONENTS
import CarCards from "../Components/CarCards";

const Home = () => {
  return (
    <div className="grid">
      {cars.map((cars, index) => (
        <CarCards
          key={"CarDetail" + index}
          carModel={cars.carModel}
          CarMake={cars.CarMake}
          CarYear={cars.CarYear}
          id={cars.id}
        />
      ))}
    </div>
  );
};

export default Home;
