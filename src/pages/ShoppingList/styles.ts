import styled from 'styled-components/native';

export const ContainerShoppingList = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #fffffa;
`;

export const ContainerProduct = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f5f4f4;
  padding: 12px 0px;
  background: #fffffa;
`;

export const ImageProduct = styled.Image`
  width: 75px;
  height: 75px;
  margin-right: 16px;
  opacity: 1;
`;

export const ContentProduct = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface NameProduct {
  seleted: boolean;
}

export const NameProduct = styled.Text<NameProduct>`
  color: #232020;
  margin-bottom: 4px;
  opacity: 1;
  text-decoration: ${({ seleted }) => (seleted ? 'line-through' : 'none')};
`;

interface DescriptionProduct {
  seleted: boolean;
}

export const DescriptionProduct = styled.Text<DescriptionProduct>`
  color: #232020;
  opacity: 1;

  text-decoration: ${({ seleted }) => (seleted ? 'line-through' : 'none')};
`;
