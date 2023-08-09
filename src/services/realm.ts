import Realm from 'realm';

import ProductSchema from '../schemas/ProductSchema';

export const getRealm = async () =>
  Realm.open({
    path: 'lista de compras',
    schema: [ProductSchema],
  });
