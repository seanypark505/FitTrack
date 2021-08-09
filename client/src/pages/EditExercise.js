import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function EditExercise({ exerciseToEdit }) {
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);

  console.log(typeof exerciseToEdit.date);
  const history = useHistory();

  const editExercise = async () => {
    const editedExercise = {
      name,
      reps,
      weight,
      unit,
      date,
    };
    const res = await fetch(`/exercises/${exerciseToEdit._id}`, {
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
      <Form>
        <Form.Group>
          <FloatingLabel label='Exercise Name' className='mb-3'>
            <Form.Control
              placeholder='Exercise Name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel label='Reps' className='mb-3'>
            <Form.Control
              placeholder='Reps'
              type='number'
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
        </Form.Group>
        <Row>
          <Form.Group as={Col}>
            <FloatingLabel label='Weight' className='mb-3'>
              <Form.Control
                type='number'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col}>
            <FloatingLabel label='Unit' className='mb-3'>
              <Form.Select
                aria-label='Floating label select'
                type='select'
                name='unit'
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value='lbs'>lbs (pounds)</option>
                <option value='kg'>kg (kilograms)</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Form.Group>
          <FloatingLabel label='Date (MM-DD-YY)' className='mb-3'>
            <Form.Control
              placeholder='Date (MM-DD-YY)'
              type='text'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
        </Form.Group>
        <Button
          className='my-3 mx-3'
          type='button'
          variant='success'
          onClick={editExercise}
        >
          Update Exercise
        </Button>
      </Form>
      <Navigation path='/' page='Home Page'></Navigation>
    </div>
  );
}

export default EditExercise;
