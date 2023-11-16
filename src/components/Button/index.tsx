import { Text, TouchableOpacityProps } from 'react-native';

import { ButtonContainer } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

export default function Button({ title, margin, ...props }: ButtonProps) {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text>{title}</Text>
    </ButtonContainer>
  );
}
