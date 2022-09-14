// JEST

import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
      test('getUser debe retornar un objeto', ()=> {
            const testUser = {
                  uid: 'ABC123',
                  username: 'El_Papi1502'
            }

            const user = getUser();

            expect(testUser).toStrictEqual(user);
      })
})

describe('Pruebas en 05-funciones', () => { 
      test('getUsuarioActivo debe retornar un objeto', ()=> {
            
            
            const nombre = 'Josa';
            const testUser = {
                  uid: 'ABC567',
                  username: `${nombre}`
            }

            const user = getUsuarioActivo(nombre);

            expect(testUser).toStrictEqual(user);
      })
})
// VITEST

// import { describe, it , expect} from 'vitest';

// describe('Pruebas en 05-funciones', () => { 
//       it('getUser debe retornar un objeto', ()=> {
//             const testUser = {
//                   uid: 'ABC123',
//                   username: 'El_Papi1502'
//             }

//             const user = getUser();

//             expect(testUser).toStrictEqual(user);
//       })
// })