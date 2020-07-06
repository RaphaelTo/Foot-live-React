import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import NavBar from './Navbar';

it('renders component NavBar' , () => {
    const div = createElement('div');
    ReactDOM.render(<NavBar />, div);
})