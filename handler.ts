import { APIGatewayProxyHandler } from 'aws-lambda';

import {
  getPersonaje,
  crearPersonaje,
} from './src/controllers/personajeController';

import { getPlaneta, crearPlaneta } from './src/controllers/planetaController';

// Handler for GET request to retrieve a personaje by ID
export const getPersonajeById: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  return getPersonaje(event);
};

// Handler for POST request to create a new personaje
export const createPersonaje: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  return crearPersonaje(event);
};

// Handler for GET request to retrieve a planeta by ID
export const getPlanetaById: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  return getPlaneta(event);
};

// Handler for POST request to create a new planeta
export const createPlaneta: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  return crearPlaneta(event);
};
