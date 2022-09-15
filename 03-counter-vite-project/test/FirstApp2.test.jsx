import { FirstApp } from "../src/FirstApp";
import { render, screen } from '@testing-library/react';

describe('Pruebas en FirstApp', () => { 
      
      const title = 'Hola soy Goku';
      const message = '666';

      test('Debe de hacer match con el snapshot', () => {
            
            const { container } = render(<FirstApp title= { title }/>)
            expect( container ).toMatchSnapshot();
      });

      test('Debe de mostrar el mensaje Hola soy Goku', () => {
            render(<FirstApp title= { title }/>)
            expect( screen.getByText(title)).toBeTruthy();
      })
      test('Debe de mostrar el título en un h1', () => {

            render(<FirstApp title= { title }/>)
            expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)

            // const { container, getByText, getByTestId } = 
            // expect( getByText(title) ).toBeTruthy();
            // expect(getByTestId('test-title')).toBeTruthy();
            // expect(getByTestId('test-title').innerHTML).toContain(title);
      }) 

      test('Debe de mostrar el message enviado por props', () => {

            render(
                  <FirstApp 
                        title= { title }
                        message={ message }
                  />)
            // expect( getByText(message) ).toBeTruthy();

            // // const h1 = container.querySelector('h1');
            // // console.log(h1.innerHTML);
            // // expect(h1.innerHTML).toContain(title);
            // // expect(getByTestId('test-title')).toBeTruthy();
            // // expect(getByTestId('test-title').innerHTML).toContain(title);
            expect (screen.getAllByText(message).length).toBe(1)
      })
})
