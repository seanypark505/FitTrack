import React from 'react';
import { useState, useEffect } from 'react';
import ExerciseList from '../components/ExerciseList';
import Navigation from '../components/Navigation';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
  const [exercises, setExercises] = useState([]);
  const history = useHistory();

  const loadExercises = async () => {
    const res = await fetch('/exercises', { method: 'GET' });
    const data = await res.json();
    setExercises(data);
  };

  const onDelete = async (_id) => {
    const res = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
    if (res.status === 204) {
      setExercises(exercises.filter((exercise) => exercise._id !== _id));
    } else {
      console.error(
        `Status Code: ${res.status} - Failed to delete exercise with ${_id}.`
      );
    }
  };

  const onEdit = (exercise) => {
    setExerciseToEdit(exercise);
    history.push('/edit-exercise');
  };

  useEffect(() => {
    loadExercises();
  }, []);

  return (
    <>
      <h2>Exercise Log</h2>
      <ExerciseList
        exercises={exercises}
        onDelete={onDelete}
        onEdit={onEdit}
      ></ExerciseList>
      <Navigation path='/add-exercise' page='Create New Exercise'></Navigation>
    </>
  );
}

export default HomePage;
