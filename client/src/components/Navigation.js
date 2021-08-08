import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
      <Link to={props.path}>
        <button type='button' className='block-btn'>
          {props.icon}
          {props.page}
        </button>
      </Link>
  );
}

export default Navigation;