import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';

function EditExercise({ exerciseToEdit }) {
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);

  const history = useHistory();

  const editExercise = async () => {
    const editedExercise = {
      name,
      reps,
      weight,
      unit,
      date,
    };
    const res = await fetch(`/exercises/${exerciseToEdit.id}`, {
      method: 'PUT',
      body: JSON.stringify(editedExercise),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status === 200) {
      alert('Exercise successfully edited!');
    } else {
      alert(`Status Code: ${res.status} - Failed to edit exercise`);
    }
    history.push('/');
  };

  return (
    <div>
      <h1>Edit Exercise</h1>
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
      <input
        type='select'
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      />
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={editExercise}>Update</button>
      <Navigation path='/' page='Home Page'></Navigation>
    </div>
  );
}

export default EditExercise;
