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
import HomePage from "./components/HomePage/HomePage";
import Menu from "./components/Menu";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/game/:lobby" element={<GamePage />}></Route>
        <Route exact path="/rules" element={<RulesPage />}></Route>
        <Route exact path="/home" element={<HomePage />}></Route>
        <Route exact path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Typography mt={2} variant="h6" align={"center"}>
        Created by 1&&0
      </Typography>
    </Router>
  );
};

export default App;
