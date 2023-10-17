import { TextInputProps } from 'react-native/types';

import { Container } from './style';

type InputProps = TextInputProps;

const Input = ({ ...props }: InputProps) => {
  return <Container {...props} />;
};

export default Input;
