import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import logo from './assets/imgs/popuku_01.png';
import ColorList from './Components/ColorList/ColorList';

export default function App() {


  

  return (
    
      <View style={styles.container}>
        
        <Image source={logo} style={styles.logo} />
        <Text style={styles.textInstructions}>
          Hi! I am Yichen
        </Text>
        <ColorList />
        <StatusBar style="auto" />
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
  textInstructions: {
    color: '#888',
    fontSize: 28,
  },
  logo: {
    height: 200,
    width: 200,
    margin: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  textOnButton: {
    color: '#fff',
    fontSize: 15,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: '#888',
    color: '#888',
  },
});
