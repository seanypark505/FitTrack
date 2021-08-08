import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';

function AddExercise() {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('');
  const [date, setDate] = useState('');

  const history = useHistory();

  const addExercise = async () => {
    const newExercise = {
      name,
      reps,
      weight,
      unit,
      date,
    };
    const res = await fetch('/exercises', {
      method: 'POST',
      body: JSON.stringify(newExercise),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status === 201) {
      alert('Exercise successfully logged!');
    } else {
      alert(`Status Code ${res.status} - Failed to log exercise.`);
    }
    history.push('/');
  };

  return (
    <div>
      <h1>Log A New Exercise</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='number'
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <input
        type='number'
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <select
        type='select'
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value='lbs'>lbs (pounds)</option>
        <option value='kg'>kg (kilograms)</option>
      </select>
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addExercise}>Add Exercise</button>
      <Navigation path='/' page='Home Page'></Navigation>
    </div>
  );
}

export default AddExercise;
