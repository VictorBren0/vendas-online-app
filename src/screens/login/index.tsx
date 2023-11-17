import { View } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { theme } from '../../themes/theme';
import { Container } from './style';

export default function Login() {
  function handleOnPress() {
    console.log('Clicou');
  }
  return (
    <View>
      <Container>
        <Input />
        <Button
          variant={theme.buttons.buttonsTheme.primary}
          margin="50px"
          title="Entrar"
          onPress={handleOnPress}
        />
      </Container>
    </View>
  );
}
