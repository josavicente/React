import { FirstApp } from "../src/FirstApp";
import { getAllByAltText, render } from '@testing-library/react';

describe('Pruebas en FirstApp', () => { 

      // test('Debe de hacer match con el snapshot', () => {
      //       const title = 'Hola soy Goku'
      //       const { container } = render(<FirstApp title= { title }/>)

      //       expect( container ).toMatchSnapshot();
      // });
      test('Debe de mostrar el título en un h1', () => {
            const title = 'Hola soy Goku'
            const { container, getByText, getByTestId } = render(<FirstApp title= { title }/>)
            expect( getByText(title) ).toBeTruthy();

            // const h1 = container.querySelector('h1');
            // console.log(h1.innerHTML);
            // expect(h1.innerHTML).toContain(title);
            expect(getByTestId('test-title')).toBeTruthy();
            expect(getByTestId('test-title').innerHTML).toContain(title);
      }) 

      test('Debe de mostrar el message enviado por props', () => {
            const title = 'Hola soy Goku'
            const message = '666'
            const { container, getByText, getByTestId, getAllByText } = render(
                  <FirstApp 
                        title= { title }
                        message={ message }
                  />)
            expect( getByText(message) ).toBeTruthy();

            // const h1 = container.querySelector('h1');
            // console.log(h1.innerHTML);
            // expect(h1.innerHTML).toContain(title);
            // expect(getByTestId('test-title')).toBeTruthy();
            // expect(getByTestId('test-title').innerHTML).toContain(title);
            expect (getAllByText(message).length).toBe(1)
      })
})
