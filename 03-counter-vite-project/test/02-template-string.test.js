// JEST
import { getSaludo } from '../src/base-pruebas/02-template-string';

describe('Pruebas en DemoComponent', () => { 
    test('getSaludo debe retornar Hola Josa', ()=> {
        const name = 'Josa';
        const message = getSaludo( name );
        expect(message).toBe(`Hola ${ name }`);
    })
})
// VITEST

// import { describe, it , expect} from 'vitest';

// describe('Pruebas en DemoComponent', () => { 
//     it('Esta prueba no debe de fallar', ()=> {
//             expect(getSaludo('Josa')).toBe('Hola Josa');
//     })
// })