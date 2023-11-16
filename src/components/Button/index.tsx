import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer } from './style';
import { theme } from '../../themes/theme';
import Text from '../Text';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

export default function Button({ title, margin, ...props }: ButtonProps) {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text color={theme.colors.neutralTheme.white}>{title}</Text>
    </ButtonContainer>
  );
}
