import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components";

describe('Pruebas en GifGridItem', () => {

    const title = 'Goku';
    const url = 'http://jopsavicente.dev/';

    test('Debe de hacer match con el snapshot ', () => {  

        const { container } = render( <GifGridItem title={title} url={url}/> )
        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y ALT indicado', () => {  

        render( <GifGridItem title={title} url={url}/> )
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('De de mostrar el título en el component', () => { 


        render( <GifGridItem title={title} url={url}/> )
        expect(screen.getByText(title)).toBeTruthy();

    });


});
