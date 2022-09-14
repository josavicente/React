import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas";


describe('Pruebas en 09-Promesas', () => { 
      test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
            
            const id = 1;
            const heroes = getHeroeByIdAsync(id)
                  .then ( hero => {

                        expect(hero).toEqual({
                              id: 1,
                              name: 'Batman',
                              owner: 'DC'
                        })
                        done();
                  } );
      })

      test('getHeroeByIdAsync debe obtener un error', (done) => {
            
            const id = 100;
            const heroes = getHeroeByIdAsync(id)
                  .then (hero => {
                        expect(hero).toBeFalsy();
                        done();
                  })
                  .catch( error => {
                        expect(error).toBe('No se pudo encontrar el héroe')
                        done();
                  } );


      })
})