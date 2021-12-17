
import React from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer >
    <Stack.Navigator initialRouteName="Home" screenOptions={{title:"App"}} >
      <Stack.Screen name="Home"  style={styles.container} component={HomeScreen} />
      <Stack.Screen name="Component"  style={styles.container} component={ComponentScreen} />
      <Stack.Screen name="List"  style={styles.container} component={ListScreen} />
      <Stack.Screen name="Image"  style={styles.container} component={ImageScreen} />
      <Stack.Screen name="Counter"  style={styles.container} component={CounterScreen} />
      <Stack.Screen name="Color"  style={styles.container} component={ColorScreen}/>
      <Stack.Screen name="Square"  style={styles.container} component={SquareScreen}/>
      <Stack.Screen name="Text"  style={styles.container} component={TextScreen}/>
      <Stack.Screen name="Box"  style={styles.container} component={BoxScreen}/>






    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
