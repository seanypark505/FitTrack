import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Navigation(props) {
  return (
    <Button to={props.path} as={Link} variant='primary'>
      {props.icon}
      {props.page}
    </Button>
  );
}

export default Navigation;
