// JEST
import { retornaArreglo } from '../src/base-pruebas/07-deses-arr';

describe('Pruebas en Desestructuración arreglos', () => { 
      test('Debe retornar un string y un número', ()=> {
            const [ letters, numbers ] = retornaArreglo();
            expect(letters).toBe('ABC');
            expect(numbers).toBe(123);
            expect(typeof(letters)).toBe('string');
            expect(typeof(numbers)).toBe('number');
      })
})
// VITEST

// import { describe, it , expect} from 'vitest';

// describe('Pruebas en Desestructuración arreglos', () => { 
//       it('Debe retornar un string y un número', ()=> {
//             const [ letters, numbers ] = retornaArreglo();
//             expect(letters).toBe('ABC');
//             expect(numbers).toBe(123);
//             expect(typeof(letters)).toBe('string');
//             expect(typeof(numbers)).toBe('number');
//       })
// })