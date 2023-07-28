// import * as app from './App.jsx';
import React from 'react';
import { getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

// beforeEach(()=>{
//     render(<App />);
// });

test('render', () => {
    const app = render(<App />);
    const variable = app.getByText('Hello world');
    expect(variable).toBeDefined();
});
// const app = render(<App />);

// describe('Comprobaciones iniciales', () => {
    // test('Prueba con toBe', () => {
        // expect(render(<App />).sumar(2, 2)).toBe(4);
    // });
    // test('Prueba 2 con .not', () => {
    //     expect(sumar(3, 2)).not.toBe(4);
    // });
// });
// describe('Comprobar si esta cargado en el DOM', () => {
//     test('el elemento main', () => {
//         expect(main).not.toBeNull();
//     });
// });