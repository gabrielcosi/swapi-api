import { getPersonaje } from '../controllers/personajeController';
import { Swapi } from '../utils/swapi';

describe('personajeController', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getPersonaje', () => {
    it('should return translated personaje data when SWAPI call is successful', async () => {
      const mockPersonaje = {
        nombre: 'Luke Skywalker',
        altura: '172',
        peso: '77',
        color_cabello: 'blond',
        color_piel: 'fair',
        color_ojos: 'blue',
        año_nacimiento: '19BBY',
        genero: 'male',
        planeta_origen: 'https://swapi.py4e.com/api/planets/1/',
        peliculas: [
          'https://swapi.py4e.com/api/films/1/',
          'https://swapi.py4e.com/api/films/2/',
          'https://swapi.py4e.com/api/films/3/',
          'https://swapi.py4e.com/api/films/6/',
          'https://swapi.py4e.com/api/films/7/',
        ],
        especies: ['https://swapi.py4e.com/api/species/1/'],
        vehiculos: [
          'https://swapi.py4e.com/api/vehicles/14/',
          'https://swapi.py4e.com/api/vehicles/30/',
        ],
        naves_espaciales: [
          'https://swapi.py4e.com/api/starships/12/',
          'https://swapi.py4e.com/api/starships/22/',
        ],
        creado: '2014-12-09T13:50:51.644000Z',
        editado: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.py4e.com/api/people/1/',
      };

      // Mock the SWAPI call
      jest.spyOn(Swapi, 'getPersonajeById').mockResolvedValue(mockPersonaje);

      const event = {
        pathParameters: {
          id: '1',
        },
      };

      const response = await getPersonaje(event as any);

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toMatchObject(mockPersonaje);
    });

    it('should return 500 when SWAPI call fails', async () => {
      // Mock the SWAPI call to throw an error
      jest
        .spyOn(Swapi, 'getPersonajeById')
        .mockRejectedValue(new Error('SWAPI call failed'));

      const event = {
        pathParameters: {
          id: '1',
        },
      };

      const response = await getPersonaje(event as any);

      expect(response.statusCode).toBe(500);
      expect(JSON.parse(response.body)).toMatchObject({
        error: 'SWAPI call failed',
      });
    });
  });
});
