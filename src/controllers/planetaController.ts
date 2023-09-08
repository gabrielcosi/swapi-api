import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Swapi } from '../utils/swapi';
import { PlanetaModel } from '../models/planetaModel';

export const getPlaneta = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const id = event.pathParameters?.id;
    if (!id) throw new Error('ID no proporcionado');

    const planetaTraducido = await Swapi.getPlanetaById(Number(id));

    return {
      statusCode: 200,
      body: JSON.stringify(planetaTraducido),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export const crearPlaneta = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '');
    const nuevoPlaneta = await PlanetaModel.create(body);

    return {
      statusCode: 201,
      body: JSON.stringify({ id: nuevoPlaneta.id }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
