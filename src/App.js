import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Dashboard from "./components/TripDashBoard";
import DriversIndex from "./components/DriversIndex";
import Home from "./components/Home";
import LandingPage from "./components/auth/LandingPage";
import { LoginPage } from "./components/auth/LoginPage";
import { SignupPage } from "./components/auth/SignupPage";
import AdminPanel from "./components/Admin";
import BudgetAssist from "./components/BudgetAssist";
import PrivateRoute from "./redux/budget_assist/privateRoute";
import store from "./redux/store"; // importing the store directly

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="landing/" element={<LandingPage />} />
        <Route
          path="home/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="trips/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="trips/drivers"
          element={
            <PrivateRoute>
              <DriversIndex />
            </PrivateRoute>
          }
        />
        <Route path="" element={<LoginPage />} />
        <Route path="signup/" element={<SignupPage />} />
        <Route
          path="kdtk/admin/"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route
          path="kdtk/personal/budget-assist/"
          element={
            <PrivateRoute>
              <BudgetAssist />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
