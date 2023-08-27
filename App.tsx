import {NavigationContainer} from '@react-navigation/native';

import {RootStack} from './src/Screens/index';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
