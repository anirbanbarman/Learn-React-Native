
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ColorCounter from '../components/ColorCounter';
const COLOR_INCREMENT=15;

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(`rgb(${red},${green},${blue})`)


  return (

    <View >

      <ColorCounter onIncrease={()=>{red>-1 && red<255 && setRed(red+COLOR_INCREMENT)}} onDecrease={()=>{red>0 && red<256 && setRed(red-COLOR_INCREMENT)}} color="Red" />
      <ColorCounter  onIncrease={()=>{green>-1 && green<255 && setGreen(green+COLOR_INCREMENT)}} onDecrease={()=>{green>0 && green<256 && setGreen(green-COLOR_INCREMENT)}} color="Green" />
      <ColorCounter  onIncrease={()=>{blue>-1 && blue<255 && setBlue(blue+COLOR_INCREMENT)}} onDecrease={()=>{blue>0 && blue<256 && setBlue(blue-COLOR_INCREMENT)}} color="blue" />
      <View>
      <View style={{marginTop:50,marginLeft:100, height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({

});


