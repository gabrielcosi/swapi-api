import { getPlaneta } from '../controllers/planetaController';
import { Swapi } from '../utils/swapi';

describe('planetaController', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getPlaneta', () => {
    it('should return translated planeta data when SWAPI call is successful', async () => {
      const mockPlaneta = {
        nombre: 'Tatooine',
        periodo_rotacion: '23',
        periodo_orbital: '304',
        diametro: '10465',
        clima: 'arid',
        gravedad: '1 standard',
        terreno: 'desert',
        agua_superficial: '1',
        poblacion: '200000',
        residentes: [
          'https://swapi.py4e.com/api/people/1/',
          'https://swapi.py4e.com/api/people/2/',
          'https://swapi.py4e.com/api/people/4/',
          'https://swapi.py4e.com/api/people/6/',
          'https://swapi.py4e.com/api/people/7/',
          'https://swapi.py4e.com/api/people/8/',
          'https://swapi.py4e.com/api/people/9/',
          'https://swapi.py4e.com/api/people/11/',
          'https://swapi.py4e.com/api/people/43/',
          'https://swapi.py4e.com/api/people/62/',
        ],
        peliculas: [
          'https://swapi.py4e.com/api/films/1/',
          'https://swapi.py4e.com/api/films/3/',
          'https://swapi.py4e.com/api/films/4/',
          'https://swapi.py4e.com/api/films/5/',
          'https://swapi.py4e.com/api/films/6/',
        ],
        creado: '2014-12-09T13:50:49.641000Z',
        editado: '2014-12-20T20:58:18.411000Z',
        url: 'https://swapi.py4e.com/api/planets/1/',
      };

      // Mock the SWAPI call
      jest.spyOn(Swapi, 'getPlanetaById').mockResolvedValue(mockPlaneta);

      const event = {
        pathParameters: {
          id: '1',
        },
      };

      const response = await getPlaneta(event as any);

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toMatchObject(mockPlaneta);
    });

    it('should return 500 when SWAPI call fails', async () => {
      // Mock the SWAPI call to throw an error
      jest
        .spyOn(Swapi, 'getPlanetaById')
        .mockRejectedValue(new Error('SWAPI call failed'));

      const event = {
        pathParameters: {
          id: '1',
        },
      };

      const response = await getPlaneta(event as any);

      expect(response.statusCode).toBe(500);
      expect(JSON.parse(response.body)).toMatchObject({
        error: 'SWAPI call failed',
      });
    });
  });
});
