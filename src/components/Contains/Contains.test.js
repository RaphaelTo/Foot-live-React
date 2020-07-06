import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Contains from './Contains';

it('renders component Contains' , () => {
    const div = document.createElement('div');
    //ReactDOM.render(<Contains display={}/>, div);
});

it('get props object',  () => {
    const objectDisplay = {
        competition: true,
        match: false
    };

    //const a = render(<Contains display={objectDisplay}/>);
    //console.log(a)
})