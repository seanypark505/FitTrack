import React from 'react';

function Exercise({ exercise, onDelete, onEdit }) {
  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>{exercise.weight}</td>
      <td>{exercise.unit}</td>
      <td>{exercise.date}</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
  );
}

export default Exercise;
