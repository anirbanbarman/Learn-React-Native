 
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function ImageDetails({title,imageSource,score}) {
    console.log(imageSource)
  return (
      
    <View >
        <Image style={styles.logo} source={imageSource}/>

      <Text>Image Details - {title}</Text>
      <Text>Image score-{score}</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({ 
    logo: {
        width: 120,
        height: 120,
      },
});


