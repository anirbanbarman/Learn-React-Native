 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetails from '../components/ImageDetails';

export default function ImageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Image Screen</Text>
      <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} score={9}/>
      <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} score={6}/>
      <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={95}/>
     
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    
  },
  text:{
      fontSize:20
  }
});


