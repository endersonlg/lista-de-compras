import styled from 'styled-components/native';

interface ButtonTouchable {
  color: 'primary' | 'secondary';
}

export const ButtonTouchable = styled.TouchableOpacity<ButtonTouchable>`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) =>
    color === 'primary' ? '#06a77d' : '#ED1C24'};
  border-radius: 8px;

  shadow-color: ${({ color }) => (color === 'primary' ? '#06a77d' : '#ED1C24')};
  elevation: 4;
`;

export const TextButton = styled.Text`
  font-size: 24px;
  color: #fffffa;
`;
