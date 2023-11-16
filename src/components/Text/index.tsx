import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native/types';

import { ContainerText } from './style';
import { textVariants } from './variants';

interface TextProps extends TextPropsNative {
  color?: string;
  variant?: string;
}

export default function Text({ color, variant, ...props }: TextProps) {
  const handleFontSize = useMemo(() => {
    switch (variant) {
      case textVariants.TITLE:
        return '32px';
      default:
        return '16px';
    }
  }, [variant]);

  return <ContainerText fontSize={handleFontSize} color={color} {...props} />;
}