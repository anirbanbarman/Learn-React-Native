
import React, { useReducer, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ColorCounter from '../components/ColorCounter';
const COLOR_INCREMENT = 15;
const initialValue = { red: 0, green: 0, blue: 0 };

export default function SquareScreen() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "red":
        if (state.red + action.amount > 255 || state.red + action.amount < 0) return state;
        return { ...state, red: state.red + action.amount }

        break;
      case "green":
        return (state.green + action.amount > 255 || state.green + action.amount < 0)
          ? state :
          { ...state, green: state.green + action.amount }

        break;
      case "blue":
        if (state.blue + action.amount > 255 || state.blue + action.amount < 0) return state;

        return { ...state, blue: state.blue + action.amount }

        break;

      default:
        break;
    }

  }

  const [state, dispatch] = useReducer(reducer, initialValue);
  const { red, green, blue } = state;
  //  console.log(state)




  return (

    <View >

      <ColorCounter onIncrease={() => dispatch({ type: "red", amount: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: "red", amount: -1 * COLOR_INCREMENT })} color="Red" />
      <ColorCounter onIncrease={() => dispatch({ type: "green", amount: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: "green", amount: -1 * COLOR_INCREMENT })} color="Green" />
      <ColorCounter onIncrease={() => dispatch({ type: "blue", amount: COLOR_INCREMENT })} onDecrease={() => dispatch({ type: "blue", amount: -1 * COLOR_INCREMENT })} color="blue" />
      <View>


        <View style={{ marginTop: 50, marginLeft: 100, height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({

});


