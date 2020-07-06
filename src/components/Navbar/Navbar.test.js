import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import NavBar from './Navbar';

it('renders component NavBar' , () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
});

it('renders a 4 li', () => {
    const { getByTestId } = render(<NavBar />); 
    const numberElementChild = getByTestId('ulValue').childElementCount; 
    expect(numberElementChild).toBe(2);
})

it('each li get function', () => {
    const { getByTestId } = render(<NavBar />)

    for(let i = 0; i < 2; i++ ){
        let getFunctionInChild = getByTestId('ulValue').children.item(i);
        fireEvent.click(getFunctionInChild) 
    }
})