import React from 'react';
import Exercise from './Exercise';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function ExerciseList({ exercises, onDelete, onEdit }) {
  return (
    <Container>
      <Table
        striped
        bordered
        hover
        variant='dark'
        id='exercises'
        className='mb-4'
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, i) => (
            <Exercise
              key={i}
              exercise={exercise}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ExerciseList;
