 
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

export default function TextScreen() {
    
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
  return (
      
    <View >
      
 <Text>Enter Name</Text>
      <TextInput 
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={(newValue)=>setName(newValue)}
      value={name}
      
      />
      <Text>you typed {name}</Text>

      <TextInput 
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={(newValue)=>setPassword(newValue)}
      value={password}
      secureTextEntry={true}
      
      
      />
     {password.length<4?<Text>Password length must be 4 charecters </Text>:null}
     
     
    </View>
  );
}

const styles = StyleSheet.create({ 
    input:{
        margin:15,
        borderWidth:1,
        borderColor:"black",
        padding:5,

    }
  
});


