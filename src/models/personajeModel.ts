import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  endpoint: 'http://localhost:8000',
});
const TABLE_NAME = 'Personajes';

export const PersonajeModel = {
  create: async (personaje: Personaje): Promise<PersonajeConID> => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: uuidv4(),
        ...personaje,
      },
    };

    try {
      await dynamoDB.put(params).promise();
      return params.Item as PersonajeConID;
    } catch (error) {
      throw new Error('No se pudo crear el personaje.');
    }
  },

  getById: async (id: string): Promise<PersonajeConID | null> => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: id,
      },
    };

    try {
      const result = await dynamoDB.get(params).promise();
      return result.Item as PersonajeConID;
    } catch (error) {
      throw new Error('No se pudo obtener el personaje.');
    }
  },
};
