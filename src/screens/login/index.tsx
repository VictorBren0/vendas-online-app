import { Text, View } from 'react-native';


import { Container } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login () {
  return (
    <View>
      <Container>
        <Text>Login</Text>
        <Input />
        <Button title='Entrar'/>
      </Container>
    </View>
  );
};
