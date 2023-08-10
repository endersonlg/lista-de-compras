import React, { useEffect, useMemo, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ParamListBase,
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { View, FlatList, TouchableOpacity } from 'react-native';

import { AppNavigationRoutesProps } from '../../../App';
import { Button } from '../../components/Button';
import {
  ContainerProduct,
  ContainerShoppingList,
  ContentProduct,
  DescriptionProduct,
  ImageProduct,
  NameProduct,
} from './styles';

interface ShoppingListParams extends ParamListBase {
  ShoopingList: {
    index: string;
  };
}

interface Product {
  id: number;
  unidade: number;
  name: string;
  image: string;
  selected?: boolean;
}

interface ListProduct {
  data: Product[];
  created_at: Date;
  finished_at?: Date;
}

export function ShoppingList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const route = useRoute<RouteProp<ShoppingListParams, 'ShoopingList'>>();
  const isFocused = useIsFocused();
  const navigation = useNavigation<AppNavigationRoutesProps>();

  const indexParam = useMemo(() => Number(route.params.index), [route]);

  useEffect(() => {
    (async () => {
      if (isFocused && indexParam !== undefined) {
        const productListAux = await AsyncStorage.getItem('productList');
        const productListParse: ListProduct[] = JSON.parse(
          productListAux ?? '[]',
        );
        setProducts(productListParse[indexParam].data);

        if (productListParse[indexParam].finished_at) {
          setStarted(true);
          setFinished(true);
          return;
        }

        if (
          productListParse[indexParam].data.find(
            (productAux) => productAux.selected,
          )
        ) {
          setStarted(true);
        }
      }
    })();
  }, [indexParam, isFocused]);

  const handleProductSelected = (index: number) => {
    if (!products[index]?.selected) {
      const auxProducts = [...products];

      auxProducts.splice(index, 1, {
        ...products[index],
        selected: true,
      });

      setProducts(auxProducts);
    } else {
      const auxProducts = [...products];

      auxProducts.splice(index, 1, {
        ...products[index],
        selected: false,
      });

      setProducts(auxProducts);
    }
  };

  const handleFinish = async () => {
    const productListAux = await AsyncStorage.getItem('productList');
    const productListParse: ListProduct[] = JSON.parse(productListAux ?? '[]');
    productListParse.splice(indexParam, 1, {
      created_at: productListParse[indexParam].created_at,
      data: products,
      finished_at: new Date(),
    });

    await AsyncStorage.setItem('productList', JSON.stringify(productListParse));

    navigation.navigate('Home');
  };

  const handleDelete = async () => {
    const productListAux = await AsyncStorage.getItem('productList');
    const productListParse: ListProduct[] = JSON.parse(productListAux ?? '[]');
    productListParse.splice(indexParam, 1);

    await AsyncStorage.setItem('productList', JSON.stringify(productListParse));

    navigation.navigate('Home');
  };

  return (
    <ContainerShoppingList>
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            disabled={!started}
            activeOpacity={0.8}
            onPress={() => started && handleProductSelected(index)}
          >
            <ContainerProduct>
              <ImageProduct
                source={{ uri: `data:image/png;base64,${item.image}` }}
              />
              <ContentProduct>
                <NameProduct
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  seleted={!!item?.selected}
                >
                  {item.name}
                </NameProduct>
                <View>
                  <DescriptionProduct seleted={!!item?.selected}>
                    Unidade: {item.unidade}
                  </DescriptionProduct>
                </View>
              </ContentProduct>
            </ContainerProduct>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => String(item.id)}
      />
      {!started ? (
        <Button onPress={() => setStarted(true)} text="Começar Compras" />
      ) : !finished ? (
        <Button onPress={() => handleFinish()} text="Finalizar" />
      ) : (
        <Button
          color="secondary"
          onPress={() => handleDelete()}
          text="Apagar Compra"
        />
      )}
    </ContainerShoppingList>
  );
}
