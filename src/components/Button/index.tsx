import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../Text';
import { textVariants } from '../Text/variants';
import { ButtonContainer, ButtonSecondary, GradientButton } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  variant?: string;
}

export default function Button({ title, variant, margin, ...props }: ButtonProps) {
  switch (variant) {
    case theme.buttons.buttonsTheme.primary:
      return (
        <ButtonContainer margin={margin} {...props}>
          <GradientButton
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            <Text variant={textVariants.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
              {title}
            </Text>
          </GradientButton>
        </ButtonContainer>
      );
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary margin={margin} {...props}>
          <Text variant={textVariants.BUTTON_BOLD} color={theme.colors.mainTheme.primary}>
            {title}
          </Text>
        </ButtonSecondary>
      );
    default:
      return (
        <ButtonContainer margin={margin} {...props}>
          <Text variant={textVariants.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
            {title}
          </Text>
        </ButtonContainer>
      );
  }
}
