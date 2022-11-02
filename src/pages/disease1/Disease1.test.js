import React from 'react';
import ReactDOM from 'react-dom';
import Disease1 from './Disease1'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Disease1 />, div);
});
