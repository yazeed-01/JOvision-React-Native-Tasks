import React from 'react';
import { View, Image, Alert, StyleSheet, FlatList, Pressable } from 'react-native';

const images = [
  require('../Resources/Images/image1.jpg'),
  require('../Resources/Images/image2.jpg'),
  require('../Resources/Images/image3.webp'),
  require('../Resources/Images/image4.webp'),
  require('../Resources/Images/image5.jpg'),
  require('../Resources/Images/image6.webp'),
  require('../Resources/Images/image7.jpg'),
  require('../Resources/Images/image8.webp'),
  require('../Resources/Images/image9.jpg'),
  require('../Resources/Images/image10.jpg'),
];

export const Task28 = () => {
  const handleImagePress = (index: number) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handleImagePress(index)}>
            <Image source={item} style={styles.image} />
          </Pressable>
        )}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />
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
  listContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});