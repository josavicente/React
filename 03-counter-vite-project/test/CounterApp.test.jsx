
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => { 
      
      const initValue = 100
      
      test('TEST: Debe de hacer match con el snapshot', () => {
            
            const { container } = render(<CounterApp value= { initValue }/>)
            expect( container ).toMatchSnapshot();
      });

      // test('TEST: Debe de mostrar el valor inicial de 100', () => {
            
      //       render(<CounterApp value= { 100 }/>);
      //       expect ( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('100');
      // });

      test('TEST: Click en el botón + 1', () => {
            render( <CounterApp value= { initValue }/> );
            fireEvent.click( screen.getByText('+1'))
            screen.debug();
            expect(screen.getByText('101')).toBeTruthy();
      });

      test('TEST: Click en el botón - 1', () => {
            render( <CounterApp value= { initValue }/> );
            fireEvent.click( screen.getByText('-1'))
            screen.debug();
            expect(screen.getByText('99')).toBeTruthy();
      });

      test('TEST: Click en el botón Resewt', () => {
            render( <CounterApp value= { initValue }/> );
            fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
            expect(screen.getByText('100')).toBeTruthy();
      });

});