import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import GamePage from "./components/GamePage/GamePage";
import RulesPage from "./components/RulesPage/RulesPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/game/:lobby" element={<GamePage />}></Route>
        <Route exact path="/rules" element={<RulesPage />}></Route>
        <Route exact path="/welcome" element={<WelcomePage />}></Route>
        <Route exact path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
