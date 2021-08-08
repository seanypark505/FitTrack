import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Navigation(props) {
  return (
    <Button as={Link} to={props.path} color='blue'>
      {props.icon}
      {props.page}
    </Button>
  );
}

export default Navigation;
