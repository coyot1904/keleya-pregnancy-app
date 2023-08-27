import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Auth from './Auth';
import Login from './Login';
import Register from './Register';
import Name from './Name';
import Pick from './Date';
import Workout from './Workout';
import Success from './Success';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Name"
        component={Name}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pick"
        component={Pick}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Workout"
        component={Workout}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
