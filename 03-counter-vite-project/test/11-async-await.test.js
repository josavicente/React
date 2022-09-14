import { getImagen } from "../src/base-pruebas/11-async-await"

describe('Pruebas en 11-Async', () => { 
      test('getImagen debe de retornar un url', async() => {
            const url = await getImagen();
            console.log(url);
            expect(typeof url).toBe('string');
      })

      test('getImagen debe de retornar un url', async() => {
            const response = await getImagen();
            expect(response).toBe('No se encontró la imagen');
      })

})