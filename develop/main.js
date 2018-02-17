import React from 'react';
import { render } from 'react-dom';
import App from './elements/App';

const mountNode = document.getElementById('app');

render(<App />, mountNode);
