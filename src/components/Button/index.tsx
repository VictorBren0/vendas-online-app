import { Text, TouchableOpacityProps } from 'react-native';

import { ButtonContainer } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      <Text>{title}</Text>
    </ButtonContainer>
  );
}
