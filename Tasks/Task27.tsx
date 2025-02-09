import React, { useState } from 'react';
import { View, Image, Button, Alert, StyleSheet } from 'react-native';

export const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(require('../Resources/image1.jpg'));

  const handleButtonPress = () => {
    Alert.alert(
      'Choose Image','Select the number of the image you want to display:',
      [
        { text: 'Image 1', onPress: () => setSelectedImage(require('../Resources/image1.jpg')) },
        { text: 'Image 2', onPress: () => setSelectedImage(require('../Resources/image2.jpg')) },
        { text: 'Image 3', onPress: () => setSelectedImage(require('../Resources/image3.webp')) },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true } // Allow the user to dismiss the alert by tapping outside
    );
  };

  return (
    <View style={styles.container}>
      <Image source={selectedImage} style={styles.image} />
      <Button title="Choose Image" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
  },
});

