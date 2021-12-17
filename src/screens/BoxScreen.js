 
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function BoxScreen() {
  return (
      
    <View style={styles.viewStyle}>
      

      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle1}>Child #1</Text>

      <Text style={styles.textStyle2}>Child #1</Text>

     
     
    </View>
  );
}

const styles = StyleSheet.create({ 
    viewStyle:{
        borderWidth:1,
        borderColor:"black",
    
        height:200,
        justifyContent:"flex-start"},

    textStyle1:{
        borderWidth:1,
        borderColor:"red",
        margin:1,
        flex:1
       

    },
   textStyle2:{
        borderWidth:1,
        borderColor:"red",
        margin:1
       

    }
  
});


