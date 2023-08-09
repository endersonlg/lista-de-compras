import React from 'react';

import { ButtonTouchable, TextButton } from './styles';

interface Button {
  onPress: () => void;
  text: string;
  color?: 'primary' | 'secondary';
}

export function Button({ text, color = 'primary', ...rest }: Button) {
  return (
    <ButtonTouchable activeOpacity={0.8} color={color} {...rest}>
      <TextButton>{text}</TextButton>
    </ButtonTouchable>
  );
}
