 
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, Button } from 'react-native';

export default function CounterScreen() {
    const [counter,setCounter]=useState(0)
  return (
    
      
    <View >
        <Button title="Increase" onPress={()=>{
            setCounter((prev)=>prev+1)
        }}/>
        <Button title="Decrease"
         onPress={()=>{
            setCounter((prev)=>prev-1)
        }}
        />
      

      <Text>Counter:{counter}</Text>
     
     
    </View>
  );
}

const styles = StyleSheet.create({ 
  
});


