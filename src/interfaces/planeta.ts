interface PlanetaConID extends Planeta {
  id: string;
}

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

interface Planeta {
  nombre: string;
  periodo_rotacion: string;
  periodo_orbital: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  agua_superficial: string;
  poblacion: string;
  residentes: string[];
  peliculas: string[];
  creado: string;
  editado: string;
  url: string;
}
