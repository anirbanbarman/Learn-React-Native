
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hello React</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Component')}>

        <Text>Go to component </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>

        <Text>Go to List List</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Image')}>

        <Text>Go to Image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>

        <Text>Go to Counter Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Color')}>

        <Text>Go to Color</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Square')}>

        <Text>Go to Square Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Text')}>

        <Text>Go to Text Screen</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 30
  }
});


