import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native/types';

import { ContainerText } from './style';
import { textVariants } from './variants';

interface TextProps extends TextPropsNative {
  color?: string;
  variant?: string;
}

export default function Text({ color, variant, ...props }: TextProps) {
  const fontSize = useMemo(() => {
    switch (variant) {
      case textVariants.TITLE_BOLD:
      case textVariants.SUBTITLE_SEMIBOLD:
      case textVariants.TITLE_LIGHT:
      case textVariants.TITLE_REGULAR:
        return '24px';
      case textVariants.SUBTITLE_BOLD:
      case textVariants.SUBTITLE_SEMIBOLD:
      case textVariants.SUBTITLE_LIGHT:
      case textVariants.SUBTITLE_REGULAR:
        return '20px';
      case textVariants.BUTTON_BOLD:
      case textVariants.BUTTON_SEMIBOLD:
      case textVariants.BUTTON_LIGHT:
      case textVariants.BUTTON_REGULAR:
        return '18px';
      case textVariants.PARAGRAPH_SMALL_BOLD:
      case textVariants.PARAGRAPH_SMALL_SEMIBOLD:
      case textVariants.PARAGRAPH_SMALL_LIGHT:
      case textVariants.PARAGRAPH_SMALL_REGULAR:
        return '10px';
      case textVariants.PARAGRAPH_BOLD:
      case textVariants.PARAGRAPH_SEMIBOLD:
      case textVariants.PARAGRAPH_LIGHT:
      case textVariants.PARAGRAPH_REGULAR:
      default:
        return '14px';
    }
  }, [variant]);

  const fontFamily = useMemo(() => {
    switch (variant) {
      case textVariants.TITLE_BOLD:
      case textVariants.SUBTITLE_BOLD:
      case textVariants.BUTTON_BOLD:
      case textVariants.PARAGRAPH_SMALL_BOLD:
      case textVariants.PARAGRAPH_BOLD:
        return 'Poppins-Bold';
      case textVariants.TITLE_LIGHT:
      case textVariants.SUBTITLE_LIGHT:
      case textVariants.BUTTON_LIGHT:
      case textVariants.PARAGRAPH_SMALL_LIGHT:
      case textVariants.PARAGRAPH_LIGHT:
        return 'Poppins-Light';
      case textVariants.TITLE_SEMIBOLD:
      case textVariants.SUBTITLE_SEMIBOLD:
      case textVariants.BUTTON_SEMIBOLD:
      case textVariants.PARAGRAPH_SMALL_SEMIBOLD:
      case textVariants.PARAGRAPH_SEMIBOLD:
        return 'Poppins-SemiBold';
      case textVariants.TITLE_REGULAR:
      case textVariants.SUBTITLE_REGULAR:
      case textVariants.BUTTON_REGULAR:
      case textVariants.PARAGRAPH_SMALL_REGULAR:
      case textVariants.PARAGRAPH_REGULAR:
      default:
        return 'Poppins-Regular';
    }
  }, [variant]);

  return <ContainerText fontFamily={fontFamily} fontSize={fontSize} color={color} {...props} />;
}
