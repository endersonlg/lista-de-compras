import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fffffa;
  padding: 16px 24px;
`;

export const ContentInput = styled.View`
  position: relative;
  margin-bottom: 24px;
  border-bottom-width: 1px;
  border-bottom-color: #23202066;
`;

export const InputSearch = styled.TextInput`
  height: 36px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: #232020;
`;

export const ContainerIconSearch = styled.TouchableOpacity`
  position: absolute;
  right: 12px;
  bottom: 12px;
  opacity: 0.3;
`;

interface ContainerProduct {
  selected: boolean;
}

export const ContainerProduct = styled.View<ContainerProduct>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f5f4f4;
  padding: 12px 0px;
  background: #fffffa;
  opacity: ${({ selected }) => (selected ? 1 : 0.6)};
`;

export const ImageProduct = styled.Image`
  width: 75px;
  height: 75px;
  margin-right: 16px;
`;

export const ContentProduct = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ViewDescriptionAndButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewButtonsSubtract = styled.View``;

export const NameProduct = styled.Text`
  color: #232020;
  margin-bottom: 4px;
`;

export const DescriptionProduct = styled.Text`
  color: #232020;
`;

export const ContainerProductNotFound = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const TextProductNotFound = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  width: 60%;
  text-align: center;
  color: #232020;
  opacity: 0.8;
`;
