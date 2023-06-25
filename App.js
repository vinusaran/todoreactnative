import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthenticationScreen from './AuthenticationScreen';
import TodoListScreen from './TodoListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TodoListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TodoList" component={TodoListScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Auth" component={AuthenticationScreen} />
        <Tab.Screen name="Todo" component={TodoListStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
