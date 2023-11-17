import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../Text';
import { textVariants } from '../Text/variants';
import { ButtonContainer, ButtonDisabled, ButtonSecondary, GradientButton } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  variant?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

export default function Button({
  title,
  variant,
  loading,
  disabled,
  onPress,
  margin,
  ...props
}: ButtonProps) {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      {loading ? (
        <ActivityIndicator size={'large'} color={theme.colors.neutralTheme.white} />
      ) : (
        <Text variant={textVariants.BUTTON_SEMIBOLD} color={color}>
          {title}
        </Text>
      )}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin} disabled={disabled}>
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    );
  }

  switch (variant) {
    case theme.buttons.buttonsTheme.primary:
      return (
        <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
          <GradientButton
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
          </GradientButton>
        </ButtonContainer>
      );
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );
    default:
      return (
        <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.neutralTheme.white)}
        </ButtonContainer>
      );
  }
}
