import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity,View } from 'react-native';

export default function ColorCircle(props) {
  return ( 
    <View 
      style = {{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: props.color,
      }}
    /> 
  );
}

const styles = StyleSheet.create({ 
  circle: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    margin: 5,
  },
});