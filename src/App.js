import React from 'react';
import './App.css';
import Axios from 'axios';
import PatientPage from './components/PatientPage';







function App() {
  return (
    <div>
        <div className="app-container">
          <PatientPage/>
        </div>
    </div>

  );
}

export default App;
