import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AOS from "aos"


AOS.init({duration:100});
ReactDOM.render(<App />,document.getElementById('root'));