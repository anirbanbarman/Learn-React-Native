 
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hello React</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Component', { name: 'Jane' })}>

         <Text>Go to component </Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('List', { name: 'Jane' })}>

         <Text>Go to List List</Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Image', { name: 'Jane' })}>

         <Text>Go to Image</Text> 
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
  text:{
      fontSize:30
  }
});


