import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: #ff0000;
  padding: 10px;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Testando</Text>
      <Button>
        <Text>Testando</Text>
      </Button>
    </SafeAreaView>
  );
};

export default App;
