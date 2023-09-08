import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { PersonajeModel } from '../models/personajeModel';
import { Swapi } from '../utils/swapi';

export const getPersonaje = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const id = event.pathParameters?.id;
    if (!id) throw new Error('ID no proporcionado');

    const personajeTraducido = await Swapi.getPersonajeById(Number(id));

    return {
      statusCode: 200,
      body: JSON.stringify(personajeTraducido),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export const crearPersonaje = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '');
    const nuevoPersonaje = await PersonajeModel.create(body);

    return {
      statusCode: 201,
      body: JSON.stringify({ id: nuevoPersonaje.id }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
