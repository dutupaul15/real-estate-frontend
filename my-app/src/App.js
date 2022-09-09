import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";

import { routes } from "./constants/constants";
import LoginPage from "./components/Login/Login";
import RegisterPage from "./components/Register/Register";
import DashboardPage from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.register} element={<RegisterPage />} />
        <Route path={routes.dashboard} element={<DashboardPage/>}/>
        <Route path="*" element={<Navigate to={routes.login} />} />
      </Routes>
    </Router>
  );
}

export default App;
