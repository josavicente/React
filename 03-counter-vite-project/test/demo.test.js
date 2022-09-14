// JEST

describe('Pruebas en DemoComponent', () => { 
      test('Esta prueba no debe de fallar', ()=> {
            // 1 Inicialización
            const message1 = 'Hola Mundo!';
            // 2 Estímulo
            const message2 = message1.trim();
            // 3 Observar el comportamiento... esperado
            expect(message1).toBe(message2);
      })
})
// VITEST

// import { describe, it , expect} from 'vitest';

// describe('Pruebas en DemoComponent', () => { 
//       it('Esta prueba no debe de fallar', ()=> {
//             // 1 Inicialización
//             const message1 = 'Hola Mundo!';
//             // 2 Estímulo
//             const message2 = message1.trim();
//             // 3 Observar el comportamiento... esperado
//             expect(message1).toBe(message2);
//       })
// })

