import { TextInputProps } from 'react-native/types';

import { Container } from './style';

type InputProps = TextInputProps;

export default function Input ({ ...props }: InputProps) {
  return <Container {...props} />;
};

