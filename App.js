import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/tabs";

import { Provider } from 'react-redux';
import { store } from './store/store';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
              initialRouteName={'Home'}
          >
              <Stack.Screen
                  name="MainLayout"
                  component={Tabs}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
