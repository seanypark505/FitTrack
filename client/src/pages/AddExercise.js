import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';

function AddExercise() {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('');
  const [date, setDate] = useState('');
}

export default AddExercise;
