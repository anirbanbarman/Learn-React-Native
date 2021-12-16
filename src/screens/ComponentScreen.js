 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ComponentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >this is Component Screen</Text>
     
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


