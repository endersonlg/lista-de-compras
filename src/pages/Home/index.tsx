/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';

import AntDesignIcons from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { FlatList, StatusBar, ActivityIndicator } from 'react-native';

import { AppNavigationRoutesProps } from '../../../App';
import logo from '../../../assets/logo_home.png';
import { EmptyShoppingCart } from '../../components/EmptyShoppingCart';
import {
  ButtonAdd,
  ContainerEmptyShoppingCart,
  ContainerHomer,
  TouchContainerShopping,
  ContentFooterShopping,
  Logo,
  TextDateShopping,
  TextEmptyShoppingCart,
  TextFooterShopping,
  TextLastShoppping,
} from './styles';

interface Product {
  id: number;
  unidade: number;
}

interface ListProduct {
  data: Product[];
  created_at: Date;
  finished_at?: Date;
}
export function Home() {
  const navigation = useNavigation<AppNavigationRoutesProps>();
  const isFocused = useIsFocused();
  const [listShoppings, setListShoppings] = useState<ListProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (isFocused) {
        const productListAux = await AsyncStorage.getItem('productList');
        setListShoppings(JSON.parse(productListAux ?? '[]'));
        setLoading(false);
      }
    })();
  }, [isFocused]);

  // console.log(listShoppings[0]);

  // async function handleDeleteList(index: number) {
  //   const auxListShoppings = [...listShoppings];
  //   auxListShoppings.splice(index, 1);
  //   setListShoppings(auxListShoppings);
  //   await AsyncStorage.setItem('productList', JSON.stringify(auxListShoppings));
  // }

  return (
    <ContainerHomer>
      <StatusBar backgroundColor="#333" />
      <Logo source={logo} />
      <TextLastShoppping>Ultímas Compras</TextLastShoppping>
      {loading ? (
        <ActivityIndicator size={72} color="#06a77d" />
      ) : listShoppings.length === 0 ? (
        <ContainerEmptyShoppingCart>
          <EmptyShoppingCart size={256} color="#f5f4f4" />
          <TextEmptyShoppingCart>
            Clique embaixo para adicionar uma nova lista de compra :D
          </TextEmptyShoppingCart>
        </ContainerEmptyShoppingCart>
      ) : (
        <FlatList
          data={listShoppings ?? []}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchContainerShopping
              onPress={() =>
                navigation.navigate('Lista de Compra', {
                  index,
                })
              }
              activeOpacity={0.8}
            >
              <TextDateShopping>
                {format(
                  new Date(item.created_at),
                  "'Dia' dd 'de' MMMM' às 'HH:mm'h'",
                  {
                    locale: pt,
                  },
                )}
              </TextDateShopping>
              <ContentFooterShopping>
                <TextFooterShopping>
                  Nº de produtos: {item.data.length}
                </TextFooterShopping>
                <AntDesignIcons
                  name="checkcircleo"
                  size={24}
                  color="#06a77d"
                  style={{
                    opacity: item.finished_at ? 1 : 0.1,
                  }}
                />
              </ContentFooterShopping>
            </TouchContainerShopping>
          )}
          keyExtractor={(_, index) => String(index + 1)}
        />
      )}
      <ButtonAdd
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Lista de Produtos')}
      >
        <AntDesignIcons name="plus" size={48} color="#f5f4f4" />
      </ButtonAdd>
    </ContainerHomer>
  );
}
