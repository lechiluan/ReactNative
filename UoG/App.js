import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import LogIn from './screen/LogIn';
import SignUp from './screen/SignUp';
import ForgotPassword from './screen/ForgotPassword';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack  = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="LogIn">
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}