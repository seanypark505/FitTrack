import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function AddExercise() {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('lbs');
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
          onClick={addExercise}
        >
          Add Exercise
        </Button>
      </Form>
      <Navigation path='/' page='Home Page'></Navigation>
    </div>
  );
}

export default AddExercise;
