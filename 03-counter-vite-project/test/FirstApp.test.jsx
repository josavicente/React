import { FirstApp } from "../src/FirstApp";
import { render } from '@testing-library/react';

describe('Pruebas en FirstApp', () => { 

      test('Debe de hacer match con el snapshot', () => {
            const title = 'Hola soy Goku'
            const { container } = render(<FirstApp title= { title }/>)

            expect( container ).toMatchSnapshot();
      });
      test('Debe de mostrar el título en un h1', () => {
            const title = 'Hola soy Goku'
            const { container, getByText } = render(<FirstApp title= { title }/>)

            expect( getByText(title) ).toBeTruthy();
      }) 
})
