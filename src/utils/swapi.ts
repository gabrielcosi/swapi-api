import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.py4e.com/api';

export const Swapi = {
  getPersonajeById: async (id: number): Promise<Personaje> => {
    try {
      const response = await axios.get(`${SWAPI_BASE_URL}/people/${id}/`);

      if (!response.data) {
        throw new Error('Personaje no encontrado.');
      }

      const personaje: Person = response.data;
      return {
        nombre: personaje.name,
        altura: personaje.height,
        peso: personaje.mass,
        color_cabello: personaje.hair_color,
        color_piel: personaje.skin_color,
        color_ojos: personaje.eye_color,
        año_nacimiento: personaje.birth_year,
        genero: personaje.gender,
        planeta_origen: personaje.homeworld,
        peliculas: personaje.films,
        especies: personaje.species,
        vehiculos: personaje.vehicles,
        naves_espaciales: personaje.starships,
        creado: personaje.created,
        editado: personaje.edited,
        url: personaje.url,
      };
    } catch (error) {
      throw new Error('No se pudo obtener el personaje.');
    }
  },

  getPlanetaById: async (id: number) => {
    try {
      const response = await axios.get(`${SWAPI_BASE_URL}/planets/${id}/`);
      if (!response.data) {
        throw new Error('Planeta no encontrado.');
      }

      const planeta: Planet = response.data;
      return {
        nombre: planeta.name,
        periodo_rotacion: planeta.rotation_period,
        periodo_orbital: planeta.orbital_period,
        diametro: planeta.diameter,
        clima: planeta.climate,
        gravedad: planeta.gravity,
        terreno: planeta.terrain,
        agua_superficial: planeta.surface_water,
        poblacion: planeta.population,
        residentes: planeta.residents,
        peliculas: planeta.films,
        creado: planeta.created,
        editado: planeta.edited,
        url: planeta.url,
      };
    } catch (error) {
      throw new Error('No se pudo obtener el planeta.');
    }
  },
};
