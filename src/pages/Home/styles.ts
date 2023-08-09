import styled from 'styled-components/native';

export const ContainerHomer = styled.View`
  position: relative;
  flex: 1;
  background-color: #fffffa;
  padding: 48px 24px 24px;
`;

export const Logo = styled.Image`
  height: 96px;
  width: 144px;
  margin: 0 auto 48px;
`;

export const ContainerEmptyShoppingCart = styled.View`
  display: flex;
  align-items: center;
`;

export const TextEmptyShoppingCart = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  width: 60%;
  text-align: center;
  color: #232020;
  opacity: 0.8;
`;

export const TextLastShoppping = styled.Text`
  font-size: 16px;
  color: #232020;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const TouchContainerShopping = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: #f5f4f4;
  padding: 12px 0px;
`;

export const TextDateShopping = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: #232020;
`;

export const ContentFooterShopping = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextFooterShopping = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: #232020;
`;

export const ButtonAdd = styled.TouchableOpacity`
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 72px;
  height: 72px;
  border-radius: 50px;
  background-color: #06a77d;
  display: flex;
  justify-content: center;
  align-items: center;
  shadow-color: #232020;
  elevation: 4;
`;
