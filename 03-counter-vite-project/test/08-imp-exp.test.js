// JEST

import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp"
import { heroes } from "../src/base-pruebas/data/heroes"


describe('Pruebas en 08-imp-exp', () => { 
      test('Debe retornar un heroe', ()=> {
            expect(getHeroeById(2)).toEqual({
                        id: 2,
                        name: 'Spiderman',
                        owner: 'Marvel'
            })
      })

      test('Debe retornar un undefined', ()=> {
            expect(getHeroeById(100)).toBeUndefined();
      })

      test('Debe retornar DC', ()=> {
            const owner = 'DC'
            const heroesDC = getHeroesByOwner(owner);
            expect(heroesDC.length).toBe(3);
            expect(getHeroesByOwner('DC')).toEqual(heroesDC);

      });
      test('Debe retornar DC', ()=> {
            const owner = 'Marvel'
            const heroesMarvel = getHeroesByOwner(owner);
            expect(heroesMarvel.length).toBe(2);
            expect(getHeroesByOwner('Marvel')).toEqual(heroesMarvel);
      })

      test('Debe retornar Marvel', ()=> {
            expect(getHeroeById(100)).toBeUndefined();
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