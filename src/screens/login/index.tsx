import { Text, View } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './style';

export default function Login() {
  return (
    <View>
      <Container>
        <Text>Login</Text>
        <Input />
        <Button title="Entrar" />
      </Container>
    </View>
  );
}
