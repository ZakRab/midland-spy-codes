import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import GamePage from './components/GamePage';
import RulesPage from './components/RulesPage'
import WelcomePage from './components/WelcomePage';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/about' element={< AboutPage />}></Route>
        <Route exact path='/game/:lobby' element={< GamePage />}></Route>
        <Route exact path='/rules' element={< RulesPage />}></Route>
        <Route exact path='/welcome' element={< WelcomePage />}></Route>
        <Route exact path='*' element={<Navigate to='/home' />} />


      </Routes>
    </Router>
  );
}

export default App;