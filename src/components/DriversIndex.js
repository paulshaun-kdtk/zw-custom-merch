import NavBar from "./layouts/NavBar";
import { DriversList } from "./trip_components/DriversList";

function DriversIndex() {
  return (
    <div>
      <NavBar />
      <DriversList />
    </div>
  );
}

export default DriversIndex;
