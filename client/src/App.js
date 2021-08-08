import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddExercise from './pages/AddExercise';
import EditExercise from './pages/EditExercise';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <Route path='/' exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path='/add-exercise'>
            <AddExercise />
          </Route>
          <Route path='/edit-exercise' exerciseToEdit={exerciseToEdit}>
            <EditExercise />
          </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;
