import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity,View } from 'react-native';
import ColorCircle from './ColorCircle';
import Picker from '../Picker/Picker';


class ColorList extends Component {
  state = {
    color1: '#2D3359',
    color2: '#474F7D',
    newColor1: '',
    newColor2: '',
  }

  setColor1 = (text) => {
    this.setState({newColor1: text})
  }

  setColor2 = (text) => {
    this.setState({newColor2: text})
  }

  changeColor = (newColor1,newColor2) => {
    this.setState({
      color1: '#'+newColor1,
      color2: '#'+newColor2,
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <Picker />
        <View style={styles.colorCircleContainer}>
          <ColorCircle color= {this.state.color1} />
          <ColorCircle color= {this.state.color2} />
          <ColorCircle color ='#6F77A6' />
          <ColorCircle color ='#B4BDF0' />
          <ColorCircle color ='#E4E7F7' />
        </View>
        <TextInput style = {styles.input}
          placeholder = "Color1"
          placeholderTextColor = '#272727'
          autoCapitalize = "none"
          onChangeText = {this.setColor1}
        />
        <TextInput style = {styles.input}
          placeholder = "Color2"
          placeholderTextColor = '#272727'
          autoCapitalize = "none"
          onChangeText = {this.setColor2}
        />
        
        <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
            () => this.changeColor(this.state.newColor1, this.state.newColor2)
          }>
            <Text style = {styles.submitButtonText}>Submit</Text>
  
        </TouchableOpacity>
        
        
        
      </View>
    )
  } 
}

export default ColorList

const styles = StyleSheet.create({ 
  container: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorCircleContainer: {
    height: 70,
    padding: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    flex: 0.3,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
  },
  submitButton: {
    backgroundColor: '#000000',
    margin: 10,
    padding: 2,
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 15,
  }

});