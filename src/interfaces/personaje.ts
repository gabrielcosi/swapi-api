interface PersonajeConID extends Personaje {
  id: string;
}

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface Personaje {
  nombre: string;
  altura: string;
  peso: string;
  color_cabello: string;
  color_piel: string;
  color_ojos: string;
  año_nacimiento: string;
  genero: string;
  planeta_origen: string;
  peliculas: string[];
  especies: string[];
  vehiculos: string[];
  naves_espaciales: string[];
  creado: string;
  editado: string;
  url: string;
}
