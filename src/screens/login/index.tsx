import { Text, View } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './style';

export default function Login() {
  function handleOnPress() {
    console.log('Clicou');
  }
  return (
    <View>
      <Container>
        <Text>Login</Text>
        <Input />
        <Button margin="50px" title="Entrar" onPress={handleOnPress} />
      </Container>
    </View>
  );
}
