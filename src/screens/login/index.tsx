import { Text, View } from 'react-native';

import Input from '../../components/input';
import { Container } from './style';

const Login = () => {
  return (
    <View>
      <Container>
        <Text>Login</Text>
        <Input />
      </Container>
    </View>
  );
};

export default Login;
