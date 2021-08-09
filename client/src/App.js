import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercise from './pages/AddExercise';
import EditExercise from './pages/EditExercise';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className='App'>
      <Router>
        <div className='App-header'>
          <Route path='/' exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path='/add-exercise'>
            <AddExercise />
          </Route>
          <Route path='/edit-exercise'>
            <EditExercise exerciseToEdit={exerciseToEdit} />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
