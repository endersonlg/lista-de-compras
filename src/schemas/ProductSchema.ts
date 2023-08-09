import { ObjectSchema } from 'realm';

export default class RespositorySchema {
  static schema: ObjectSchema = {
    name: 'product',
    properties: {
      _id: 'uuid',
      name: 'string',
      image: 'string',
    },
  };
}
