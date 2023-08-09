import React, { useEffect, useRef, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import AntDesingIcons from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {
  StatusBar,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  VirtualizedList,
} from 'react-native';

import { Button } from '../../components/Button';
import { ProductNotFound } from '../../components/ProductNotFound';
import { products as data } from '../../data/products';
import {
  Container,
  ContainerIconSearch,
  ContainerProduct,
  ContainerProductNotFound,
  ContentInput,
  ContentProduct,
  DescriptionProduct,
  ImageProduct,
  InputSearch,
  NameProduct,
  TextProductNotFound,
  ViewDescriptionAndButtons,
} from './styles';

interface Product {
  id: number;
  name: string;
  image: string;
}

interface SelectedProduct {
  id: number;
  image: string;
  name: string;
  unidade: number;
}

export function ProductList() {
  const [filterProducts, setFilterProducts] = useState<Product[]>(data);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    [],
  );
  const [inputSearch, setInputSearch] = useState<string>();
  const navigation = useNavigation();
  const refInput = useRef<TextInput>(null);

  useEffect(() => {
    if (inputSearch) {
      const filtredProducts = data.filter((product) =>
        product.name
          .toLocaleLowerCase()
          .includes(inputSearch.toLocaleLowerCase()),
      );
      setFilterProducts(filtredProducts);
    } else {
      setFilterProducts(data);
    }
  }, [inputSearch]);

  const substractProduct = (id: number) => {
    const indexProductSelected = selectedProducts.findIndex(
      (selectedProduct) => selectedProduct.id === id,
    );

    if (indexProductSelected === -1) {
      return;
    }

    if (selectedProducts[indexProductSelected].unidade === 1) {
      const auxSelectedProducts = [...selectedProducts];
      auxSelectedProducts.splice(indexProductSelected, 1);
      setSelectedProducts(auxSelectedProducts);
    } else {
      const auxSelectedProducts = [...selectedProducts];

      auxSelectedProducts.splice(indexProductSelected, 1, {
        ...selectedProducts[indexProductSelected],
        unidade: selectedProducts[indexProductSelected].unidade - 1,
      });

      setSelectedProducts(auxSelectedProducts);
    }
  };

  const addProduct = (id: number) => {
    const indexProductSelected = selectedProducts.findIndex(
      (selectedProduct) => selectedProduct.id === id,
    );

    if (indexProductSelected === -1) {
      const indexAllProducts = data.findIndex(
        (productAux) => productAux.id === id,
      );
      setSelectedProducts([
        ...selectedProducts,
        {
          id,
          image: data[indexAllProducts].image,
          name: data[indexAllProducts].name,
          unidade: 1,
        },
      ]);
      return;
    }

    const auxSelectedProducts = [...selectedProducts];

    auxSelectedProducts.splice(indexProductSelected, 1, {
      ...selectedProducts[indexProductSelected],
      unidade: selectedProducts[indexProductSelected].unidade + 1,
    });

    setSelectedProducts(auxSelectedProducts);
  };

  const getItem = (_: any, index: number): Product => filterProducts[index];

  const handleFinishList = async () => {
    try {
      const productListAux = await AsyncStorage.getItem('productList');
      const productListParse = JSON.parse(productListAux ?? '[]');
      await AsyncStorage.setItem(
        'productList',
        JSON.stringify([
          { data: selectedProducts, created_at: new Date() },
          ...productListParse,
        ]),
      );
      navigation.navigate('Home');
    } catch (err) {
      ToastAndroid.show(
        'Ocorreu um erro ao salvar a lista de compras, tente novamente!',
        ToastAndroid.LONG,
      );
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#333" />
      <ContentInput>
        <InputSearch
          onChangeText={(value) => setInputSearch(value)}
          value={inputSearch}
          placeholder="Pesquisar Produto"
          ref={refInput}
        />
        <ContainerIconSearch
          onPress={() => refInput.current?.focus()}
          activeOpacity={0.8}
        >
          <AntDesingIcons name="search1" size={16} color="#232020" />
        </ContainerIconSearch>
      </ContentInput>
      {filterProducts.length ? (
        <VirtualizedList
          data={[]}
          initialNumToRender={0}
          maxToRenderPerBatch={20}
          windowSize={5}
          initialScrollIndex={1}
          showsVerticalScrollIndicator={false}
          getItemLayout={(_: any, index: number) => ({
            length: 100,
            index,
            offset: index * 100,
          })}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => addProduct(item.id)}
              activeOpacity={0.8}
              style={{ marginRight: 8 }}
            >
              <ContainerProduct
                selected={
                  !!selectedProducts.find(
                    (selectedProduct) => selectedProduct.id === item.id,
                  )
                }
              >
                <ImageProduct
                  source={{ uri: `data:image/png;base64,${item.image}` }}
                />
                <ContentProduct>
                  <NameProduct numberOfLines={1} ellipsizeMode="tail">
                    {item.name}
                  </NameProduct>
                  <ViewDescriptionAndButtons>
                    <DescriptionProduct>
                      Unidade:{' '}
                      {selectedProducts.find(
                        (selectedProduct) => selectedProduct.id === item.id,
                      )?.unidade ?? 0}
                    </DescriptionProduct>
                    <TouchableOpacity
                      onPress={() => substractProduct(item.id)}
                      activeOpacity={0.8}
                      style={{ marginRight: 8 }}
                    >
                      <AntDesign
                        name="minuscircleo"
                        size={24}
                        color="#ED1C24"
                        style={{
                          opacity: selectedProducts.find(
                            (selectedProduct) => selectedProduct.id === item.id,
                          )
                            ? 1
                            : 0.1,
                        }}
                      />
                    </TouchableOpacity>
                  </ViewDescriptionAndButtons>
                </ContentProduct>
              </ContainerProduct>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => String(item.id)}
          getItemCount={() => filterProducts.length}
          getItem={getItem}
        />
      ) : (
        <ContainerProductNotFound>
          <ProductNotFound size={256} color="#f5f4f4" />
          <TextProductNotFound>Produto não encontrado :(</TextProductNotFound>
        </ContainerProductNotFound>
      )}

      {selectedProducts.length ? (
        <Button onPress={handleFinishList} text="Finalizar Lista" />
      ) : null}
    </Container>
  );
}
