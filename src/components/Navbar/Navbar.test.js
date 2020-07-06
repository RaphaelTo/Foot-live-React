import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import NavBar from './Navbar';

it('renders component NavBar' , () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
});

it('renders a 4 li', () => {
    const { getByTestId } = render(<NavBar />) 
    const numberElementChild = getByTestId('ulValue').childElementCount 
    expect(numberElementChild).toBe(4)
})

it('each li get function', () => {
    //const { getByTestId}
})