import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import logo from './assets/imgs/popuku_01.png';

export default function App() {

  /* Image Picker */
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if(permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if(pickerResult.cancelled === true){
      return;
    }
    setSelectedImage({localUri: pickerResult.uri});
  };

  let openShareDialogAsync = async () => {
    if(!(await Sharing.isAvailableAsync())) {
      alert('Oh, sharing is unavailable.');
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  if(selectedImage!== null){
    return(
      <View style={styles.container}>
        <Image
          source={{uri: selectedImage.localUri}}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.textOnButton}>
            Share This Photo
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo} />

      <Text style={styles.textInstructions}>
        Hi! I am Yichen
      </Text>

      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}
      >
        <Text style={styles.textOnButton}>
          Pick Me Up
        </Text>
      </TouchableOpacity>

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
  }
});
