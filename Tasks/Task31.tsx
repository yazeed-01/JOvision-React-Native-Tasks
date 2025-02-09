import React, { useRef, useState } from 'react';
import { View, Image, Alert, StyleSheet, FlatList, Pressable, Button, TextInput, Text } from 'react-native';

const initialImages = [
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

export const Task31 = () => {
  const flatListRef = useRef<FlatList>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [images, setImages] = useState(initialImages);

  const handleScrollToIndex = () => {
    const userInput = parseInt(inputValue, 10);
    const index = userInput - 1;

    if (index >= 0 && index < images.length) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
      setSelectedIndex(index); // Highlight the selected image
      setModalVisible(false);
    } else {
      Alert.alert('Invalid Index', 'Please enter a valid index between 1 and 10');
    }
  };

  const handleImagePress = (index: number) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const handleDeleteImage = (index: number) => {
    Alert.alert(
      'Delete Image',
      'Are you sure you want to delete this image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedImages = images.filter((_, i) => i !== index);
            setImages(updatedImages);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleCopyImage = (index: number) => {
    const newImage = images[index];
    const updatedImages = [
      ...images.slice(0, index + 1), // Copy all elements before the insertion point
      newImage, // Insert the duplicated image
      ...images.slice(index + 1), // Copy all elements after the insertion point
    ];
    setImages(updatedImages);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.imageContainer}>
            {/* Copy icon */}
            <Pressable
              style={styles.copyIcon}
              onPress={() => handleCopyImage(index)}
            >
              <Text style={styles.copyIconText}>+</Text>
            </Pressable>
            <Pressable onPress={() => handleImagePress(index)}>
              <Image
                source={item}
                style={[
                  styles.image,
                  selectedIndex === index && styles.selectedImage, // Add border if selected
                ]}
              />
            </Pressable>
            {/* Delete icon */}
            <Pressable
              style={styles.deleteIcon}
              onPress={() => handleDeleteImage(index)}
            >
              <Text style={styles.deleteIconText}>x</Text>
            </Pressable>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />
      <Button title="Scroll to Image" onPress={() => setModalVisible(true)} />

      {/* Custom Modal */}
      {modalVisible && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text>Enter the index of the image (1-10):</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Enter index"
            />
            <View style={styles.modalButtons}>
              <Button title="Confirm" onPress={handleScrollToIndex} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      )}
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
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  selectedImage: {
    borderWidth: 3,
    borderColor: 'blue', // Highlight color for selected image
  },
  copyIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    padding: 5,
    zIndex: 1, // the icon is above the image
  },
  copyIconText: {
    fontSize: 16,
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    padding: 5,
    zIndex: 1, // the icon is above the image
  },
  deleteIconText: {
    fontSize: 16,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});