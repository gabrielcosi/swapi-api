import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  endpoint: 'http://localhost:8000',
});
const TABLE_NAME = 'Planetas';

export const PlanetaModel = {
  create: async (planeta: Planeta): Promise<PlanetaConID> => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: uuidv4(),
        ...planeta,
      },
    };

    try {
      await dynamoDB.put(params).promise();
      return params.Item as PlanetaConID;
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo crear el planeta.');
    }
  },

  getById: async (id: string): Promise<PlanetaConID | null> => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: id,
      },
    };

    try {
      const result = await dynamoDB.get(params).promise();
      return result.Item as PlanetaConID;
    } catch (error) {
      throw new Error('No se pudo obtener el planeta.');
    }
  },
};
