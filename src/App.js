import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/TripDashBoard";
import DriversIndex from "./components/DriversIndex";
import Home from "./components/Home";
import LandingPage from "./components/auth/LandingPage";
import { LoginPage } from "./components/auth/LoginPage";
import { SignupPage } from "./components/auth/SignupPage";

// end imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="landing/" element={<LandingPage />} />
        <Route path="home/" element={<Home />} />
        <Route path="trips/dashboard" element={<Dashboard />} />
        <Route path="trips/drivers" element={<DriversIndex />} />
        <Route path="" element={<LoginPage />} />
        <Route path="signup/" element={<SignupPage />} />
        {/* <Route path="/categories" element={<Components />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
