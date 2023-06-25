import React from 'react';
import { View, Button } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import TodoListScreen from './TodoListScreen';


const AuthenticationScreen = ({ navigation }) => {
  const authenticate = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();
    if (success) {
      navigation.navigate('TodoList');
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Authenticate" onPress={authenticate} />
    </View>
  );
};

export default AuthenticationScreen;
