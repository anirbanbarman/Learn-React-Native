 
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, Button,FlatList } from 'react-native';

export default function ColorScreen() {
    const [colors,setColors]=useState([])
    
  return (
      
    <View >
      

      <Button title="Add Color" onPress={()=>{
          setColors([...colors,randomRGB()])
      }}/>
      <View style={{height:100,width:100,backgroundColor:randomRGB()}}/>
      <FlatList
        data={colors}
        renderItem={({item})=>{
            return  <View style={{height:100,width:100,backgroundColor:item}}/>
        }}
        keyExtractor={item => item}
      />
     
    </View>
  );
}
const randomRGB=()=>{
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);

return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({ 
  
});


