import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { GiWeightLiftingUp } from 'react-icons/gi';

ReactDOM.render(
  <React.StrictMode>
    <Navbar bg='dark' variant='dark' fixed='top'>
      <Container>
        <Navbar.Brand>
          <GiWeightLiftingUp></GiWeightLiftingUp>
        </Navbar.Brand>
        <Navbar.Text className='me-auto'>FitTrack by Sean Park</Navbar.Text>
      </Container>
    </Navbar>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
