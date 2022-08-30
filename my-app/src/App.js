import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import { routes } from './constants/constants';
import LoginPage from './components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.login} element={<LoginPage/>}/>
        <Route path='*' element={<Navigate to={routes.login} />} />
      </Routes>
    </Router>
  );
}

export default App;
