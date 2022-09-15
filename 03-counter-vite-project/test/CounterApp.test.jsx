import { CounterApp } from "../src/CounterApp";
import { render, screen } from '@testing-library/react';

describe('Pruebas en CounterApp', () => { 
      
      const initValue = 100
      test('TEST: Debe de hacer match con el snapshot', () => {
            
            const { container } = render(<CounterApp value= { initValue }/>)
            expect( container ).toMatchSnapshot();
      });

      test('TEST: Debe de mostrar el valor inicial de 100', () => {
            
            render(<CounterApp value= { 100 }/>);
            expect ( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('100');
      });

});